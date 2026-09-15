<template>
  <div class="live-wishes-widget" :class="{ 'is-collapsed': !isOpen }">
    <!-- NÚT BẬT/TẮT SỔ LỜI CHÚC -->
    <button class="widget-toggle-btn" @click="isOpen = !isOpen" title="Sổ lời chúc trực tuyến">
      <span class="toggle-icon">{{ isOpen ? '✕' : '💬' }}</span>
      <span v-if="!isOpen" class="toggle-badge">{{ mesCount }}</span>
    </button>

    <!-- KHUNG CHAT TRỰC TUYẾN -->
    <div v-show="isOpen" class="live-chat-panel">
      <div class="chat-header">
        <div class="live-indicator">
          <span class="live-dot"></span>
          <span class="live-text">TRỰC TUYẾN</span>
        </div>
        <span class="chat-title">Lời Chúc Hạnh Phúc ({{ mesCount }})</span>
      </div>

      <div ref="chatBox" class="chat-messages-scroll">
        <TransitionGroup name="list">
          <div v-for="(item, index) in wishes" :key="item.id || index" class="message-bubble">
            <div class="user-avatar" :style="{ backgroundColor: item.avatarBg || '#8f2e36' }">
              {{ (item.name || 'K').charAt(0).toUpperCase() }}
            </div>
            <div class="user-content">
              <span class="user-name">{{ item.name }}</span>
              <p class="user-text">{{ item.message }}</p>
            </div>
          </div>
        </TransitionGroup>

        <div v-if="wishes.length === 0" class="empty-notice">
          Hãy là người đầu tiên gửi lời chúc đến cặp đôi nhé! ❤️
        </div>
      </div>

      <div class="chat-action-footer">
        <div class="trigger-input" @click="showModal = true">
          <span>✍️ Gửi lời chúc mừng...</span>
        </div>

        <div class="reaction-trigger-wrap">
          <button class="btn-heart-reaction" @click.stop="toggleReactionMenu" title="Thả cảm xúc">
            💖
          </button>

          <Transition name="pop-scale">
            <div v-if="showReactionMenu" class="reaction-popover">
              <button
                v-for="emoji in quickEmojis"
                :key="emoji"
                class="emoji-choice"
                @click.stop="emitReaction(emoji)"
              >
                {{ emoji }}
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- CÁC HẠT TIM VÀ EMOJI BAY LÊN -->
    <div class="floating-emojis-layer">
      <span
        v-for="f in floatingReactions"
        :key="f.id"
        class="floating-item"
        :style="{ left: f.left + 'px', animationDuration: f.duration + 's' }"
      >
        {{ f.emoji }}
      </span>
    </div>

    <!-- MODAL NHẬP LỜI CHÚC -->
    <WishModal
      v-model="showModal"
      :script-url="SCRIPT_URL"
      @toast="handleModalToast"
    />

    <!-- TOAST NOTIFICATION -->
    <Transition name="toast-fade">
      <div v-if="toast.show" class="global-toast" :class="toast.type">
        <span class="toast-emoji">{{ toast.icon }}</span>
        <span class="toast-msg">{{ toast.msg }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import { demoMessages } from "./demoMessages.js";
import WishModal from "./WishModal.vue";

import { db } from "@/firebase";
import {
  ref as dbRef,
  push,
  onChildAdded,
  off,
  query,
  limitToLast
} from "firebase/database";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWXgxFNZdg6ZdeSqpd3es7OEEKKRwQ0olvp-DCc7ELh9e6DMA5AvZz7iRkEQhxHPJDDQ/exec";

const chatBox = ref(null);
const wishes = ref([]);
const realCount = ref(0);

const isOpen = ref(false); // Mặc định thu gọn gọn gàng để không che khuất thiệp
const showModal = ref(false);
const showReactionMenu = ref(false);
const floatingReactions = ref([]);

const quickEmojis = ["❤️", "🥳", "🥰", "🎉", "💐", "🥂"];

const toast = ref({
  show: false,
  msg: "",
  type: "success",
  icon: "❤️"
});

const avatarColors = [
  "#8f2e36",
  "#c8a55c",
  "#a23946",
  "#4a3b2f",
  "#b38b4d",
  "#2e5a44"
];

let demoIndex = 0;
let demoTimer = null;
let toastTimer = null;
let autoReactionTimer = null;

let chatRef = null;
let reactionRef = null;

let limitMess = 99;

const demoCount = computed(() => {
  return wishes.value.filter(i => String(i.id).startsWith("demo-")).length;
});

const mesCount = computed(() => {
  const total = realCount.value + demoCount.value;
  return total >= limitMess ? `${limitMess}+` : total;
});

const randomAvatar = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }
};

const showToast = (msg, type = "success", icon = "❤️") => {
  clearTimeout(toastTimer);
  toast.value = { show: true, msg, type, icon };
  toastTimer = setTimeout(() => {
    toast.value.show = false;
  }, 3500);
};

const handleModalToast = (msg, type, icon) => {
  showToast(msg, type, icon);
};

const pushDemoMessage = async () => {
  const item = demoMessages[demoIndex];
  wishes.value.push({
    id: "demo-" + Date.now(),
    name: item.name,
    message: item.message,
    avatarBg: randomAvatar()
  });

  if (wishes.value.length > limitMess) {
    wishes.value.shift();
  }

  demoIndex = (demoIndex + 1) % demoMessages.length;
  await scrollToBottom();
};

const spawnFloating = (emoji) => {
  const id = Date.now() + Math.random();
  floatingReactions.value.push({
    id,
    emoji,
    left: Math.floor(Math.random() * 60),
    duration: 2 + Math.random() * 1.5
  });

  setTimeout(() => {
    floatingReactions.value = floatingReactions.value.filter(f => f.id !== id);
  }, 4000);
};

const spawnRandomReaction = () => {
  const emoji = quickEmojis[Math.floor(Math.random() * quickEmojis.length)];
  const count = emoji === "❤️" ? 3 : 1;
  for (let i = 0; i < count; i++) {
    spawnFloating(emoji);
  }
};

const startAutoReaction = () => {
  const run = () => {
    spawnRandomReaction();
    autoReactionTimer = setTimeout(run, 5000 + Math.random() * 4000);
  };
  run();
};

const listenRealtimeChat = () => {
  chatRef = query(dbRef(db, "wishes"), limitToLast(limitMess + 1));
  let loaded = false;

  onChildAdded(chatRef, async (snapshot) => {
    const item = snapshot.val();
    if (!item) return;

    wishes.value.push({
      id: snapshot.key,
      name: item.name || "Khách",
      message: item.message || "",
      avatarBg: randomAvatar()
    });

    realCount.value = wishes.value.filter(i => !String(i.id).startsWith("demo-")).length;

    if (wishes.value.length > limitMess) {
      wishes.value.shift();
    }

    if (loaded) {
      await scrollToBottom();
    }
  });

  setTimeout(async () => {
    loaded = true;
    await scrollToBottom();
  }, 500);
};

const listenRealtimeReaction = () => {
  reactionRef = dbRef(db, "reactions");
  let loaded = false;

  onChildAdded(reactionRef, (snapshot) => {
    if (!loaded) return;
    const data = snapshot.val();
    if (!data?.emoji) return;

    for (let i = 0; i < 2; i++) {
      spawnFloating(data.emoji);
    }
  });

  setTimeout(() => {
    loaded = true;
  }, 500);
};

const emitReaction = async (emoji) => {
  showReactionMenu.value = false;
  spawnFloating(emoji);

  await push(dbRef(db, "reactions"), {
    emoji,
    time: Date.now()
  });
};

const toggleReactionMenu = () => {
  showReactionMenu.value = !showReactionMenu.value;
};

const closeReactionMenu = () => {
  showReactionMenu.value = false;
};

onMounted(() => {
  listenRealtimeChat();
  listenRealtimeReaction();
  startAutoReaction();

  demoTimer = setInterval(pushDemoMessage, 9000);
  window.addEventListener("click", closeReactionMenu);
});

onUnmounted(() => {
  clearInterval(demoTimer);
  clearTimeout(autoReactionTimer);
  clearTimeout(toastTimer);

  window.removeEventListener("click", closeReactionMenu);

  if (chatRef) off(chatRef);
  if (reactionRef) off(reactionRef);
});
</script>

<style scoped>
.live-wishes-widget {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.widget-toggle-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1.5px solid #dfba73;
  background: linear-gradient(135deg, #8f2e36, #a23946);
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.35);
  transition: transform 0.3s ease;
  position: relative;
}

.widget-toggle-btn:hover {
  transform: scale(1.08);
}

.toggle-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #dc2626;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  border: 1.5px solid #ffffff;
}

.live-chat-panel {
  width: 320px;
  max-width: 85vw;
  height: 360px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(200, 165, 92, 0.4);
  border-radius: var(--radius-md);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slidePanel 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.chat-header {
  padding: 10px 14px;
  background: rgba(200, 165, 92, 0.12);
  border-bottom: 1px solid rgba(200, 165, 92, 0.25);
  display: flex;
  align-items: center;
  gap: 10px;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #dc2626;
  color: #fff;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.live-dot {
  width: 5px;
  height: 5px;
  background: #fff;
  border-radius: 50%;
  animation: pulseDot 1.5s infinite;
}

.chat-title {
  font-family: var(--font-body);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--wine-red);
}

.chat-messages-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message-bubble {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(200, 165, 92, 0.2);
  padding: 8px 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.user-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}

.user-name {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--wine-red);
}

.user-text {
  font-size: 12px;
  color: var(--text-main);
  margin: 0;
  line-height: 1.4;
  word-break: break-word;
}

.empty-notice {
  text-align: center;
  color: var(--text-muted);
  font-size: 12px;
  margin: auto 0;
  font-style: italic;
}

.chat-action-footer {
  padding: 10px 12px;
  background: #ffffff;
  border-top: 1px solid rgba(200, 165, 92, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
}

.trigger-input {
  flex: 1;
  background: #fbf8f3;
  border: 1px solid rgba(200, 165, 92, 0.3);
  border-radius: 20px;
  padding: 7px 12px;
  font-size: 12px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.trigger-input:hover {
  background: #ffffff;
  border-color: var(--wine-red);
}

.reaction-trigger-wrap {
  position: relative;
}

.btn-heart-reaction {
  background: #fbf8f3;
  border: 1px solid rgba(200, 165, 92, 0.3);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: transform 0.2s ease;
}

.btn-heart-reaction:hover {
  transform: scale(1.15);
}

.reaction-popover {
  position: absolute;
  bottom: 42px;
  right: 0;
  background: #ffffff;
  padding: 6px 10px;
  border-radius: 30px;
  display: flex;
  gap: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(200, 165, 92, 0.3);
  z-index: 10;
}

.emoji-choice {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.emoji-choice:hover {
  transform: scale(1.3);
}

.floating-emojis-layer {
  position: absolute;
  right: 10px;
  bottom: 60px;
  width: 70px;
  height: 240px;
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
}

.floating-item {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  opacity: 0;
  animation: floatEmoji ease-in-out forwards;
}

.global-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border: 1.5px solid #c8a55c;
  color: var(--wine-red);
  padding: 10px 22px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10005;
  font-size: 13.5px;
  font-weight: 600;
}

@keyframes slidePanel {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes floatEmoji {
  0% { transform: translateY(0) scale(0.5); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translateY(-100px) translateX(-10px) scale(1); }
  100% { transform: translateY(-220px) translateX(10px) scale(0.8); opacity: 0; }
}

@media (max-width: 480px) {
  .live-wishes-widget {
    left: 12px;
    bottom: 12px;
  }
  .live-chat-panel {
    width: 290px;
    height: 310px;
  }
}
</style>