<template>
  <div class="tiktok-chat-widget" :class="{ 'is-closed': !isOpen }">
    <button class="chat-toggle-btn" @click="isOpen = !isOpen">
      <span class="toggle-icon">{{ isOpen ? '✕' : '💬' }}</span>
      <span v-if="!isOpen" class="toggle-badge">{{ mesCount }}</span>
    </button>

    <div v-show="isOpen" class="live-chat-container">
      <div class="chat-header">
        <span class="live-badge">● LIVE</span>
        <span class="chat-title">Lời Chúc Trực Tuyến ({{ mesCount }})</span>
      </div>

      <div ref="chatBox" class="chat-messages-box">
        <TransitionGroup name="list">
          <div v-for="(item, index) in wishes" :key="item.id || index" class="chat-item">
            <div class="chat-avatar" :style="{ backgroundColor: item.avatarBg || '#a23946' }">
              {{ item.name.charAt(0).toUpperCase() }}
            </div>
            <div class="chat-content">
              <span class="chat-user-name">{{ item.name }}</span>
              <p class="chat-text">{{ item.message }}</p>
            </div>
          </div>
        </TransitionGroup>
        
        <div v-if="wishes.length === 0 && !fetching" class="empty-chat">
          Chưa có lời chúc nào ❤️
        </div>
      </div>

      <div class="chat-footer-trigger">
        <div class="fake-input" @click="showModal = true">Gửi lời chúc hạnh phúc...</div>
        
        <div class="reaction-wrapper">
          <button class="reaction-trigger-btn" @click.stop="toggleReactionMenu">
            💝
          </button>
          
          <Transition name="pop-scale">
            <div v-if="showReactionMenu" class="reaction-popover">
              <button 
                v-for="emoji in quickEmojis" 
                :key="emoji" 
                class="emoji-btn"
                @click.stop="emitReaction(emoji)"
              >
                {{ emoji }}
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div class="floating-reactions-container">
      <span 
        v-for="f in floatingReactions" 
        :key="f.id" 
        class="floating-emoji"
        :style="{ left: f.left + 'px', animationDuration: f.duration + 's' }"
      >
        {{ f.emoji }}
      </span>
    </div>

    <WishModal 
      v-model="showModal" 
      :script-url="SCRIPT_URL"
      @success="fetchWishes"
      @toast="handleModalToast"
    />

    <Transition name="toast-fade">
      <div v-if="toast.show" class="toast-notification" :class="toast.type">
        <span class="toast-icon">{{ toast.icon }}</span>
        <span class="toast-text">{{ toast.msg }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import { demoMessages } from "./demoMessages.js";
import WishModal from "./WishModal.vue";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWXgxFNZdg6ZdeSqpd3es7OEEKKRwQ0olvp-DCc7ELh9e6DMA5AvZz7iRkEQhxHPJDDQ/exec";

const fetching = ref(false);
const chatBox = ref(null);
const wishes = ref([]);
const realCount = ref(0);
const isOpen = ref(true);
const showModal = ref(false);
const showReactionMenu = ref(false);
const floatingReactions = ref([]);
const quickEmojis = ['❤️', '🥳', '🥰', '😂', '👍', '🎉'];

const demoCount = computed(() => {
  return wishes.value.filter(item => String(item.id).startsWith("demo-")).length;
});

const mesCount = computed(() => {
  const total = realCount.value + demoCount.value;
  return total > 999 ? "999+" : total;
});

let liveTimer = null;
let demoTimer = null;
let toastTimer = null;

const toast = ref({
  show: false,
  msg: "",
  type: "success",
  icon: "❤️"
});

const avatarColors = [
  "#b38b4d",
  "#a23946",
  "#4a3b2f",
  "#8a6d3b",
  "#2e5a44",
  "#7a6b5c"
];

let demoIndex = 0;

const randomAvatar = () => avatarColors[Math.floor(Math.random() * avatarColors.length)];

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

const scrollToBottom = async () => {
  await nextTick();
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }
};

const pushDemoMessage = async () => {
  const item = demoMessages[demoIndex];
  wishes.value.push({
    id: `demo-${Date.now()}`,
    name: item.name,
    message: item.message,
    avatarBg: randomAvatar()
  });
  if (wishes.value.length > 50) {
    wishes.value.shift();
  }
  demoIndex++;
  if (demoIndex >= demoMessages.length) {
    demoIndex = 0;
  }
  await scrollToBottom();
};

const fetchWishes = async () => {
  if (fetching.value) return;
  fetching.value = true;
  try {
    const res = await fetch(`${SCRIPT_URL}?action=read`, {
      method: "GET",
      cache: "no-store"
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (!Array.isArray(data)) return;
    
    realCount.value = data.length;
    const currentRealCount = wishes.value.filter(w => !String(w.id).startsWith("demo-")).length;

    if (data.length > currentRealCount) {
      const realWishes = data
        .map((item, index) => ({
          id: item.time || `real-${Date.now()}-${index}`,
          name: item.name || "Khách",
          message: item.message || "",
          avatarBg: randomAvatar()
        }))
        .reverse();
      const currentDemos = wishes.value.filter(item => String(item.id).startsWith("demo-"));
      wishes.value = [...realWishes, ...currentDemos];
      if (wishes.value.length > 50) {
        wishes.value.splice(0, wishes.value.length - 50);
      }
      await scrollToBottom();
    }
  } catch (err) {
    console.error(err);
  } finally {
    fetching.value = false;
  }
};

const closeReactionMenu = () => {
  showReactionMenu.value = false;
};

const toggleReactionMenu = () => {
  showReactionMenu.value = !showReactionMenu.value;
};

const emitReaction = (emoji) => {
  const count = emoji === '❤️' ? 4 : 2;
  for (let i = 0; i < count; i++) {
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
  }
  showReactionMenu.value = false;
};

onMounted(async () => {
  await fetchWishes();
  liveTimer = setInterval(fetchWishes, 2000);
  demoTimer = setInterval(() => {
    pushDemoMessage();
  }, 8000);
  window.addEventListener('click', closeReactionMenu);
});

onUnmounted(() => {
  clearInterval(liveTimer);
  clearInterval(demoTimer);
  clearTimeout(toastTimer);
  window.removeEventListener('click', closeReactionMenu);
});
</script>

<style scoped>
.tiktok-chat-widget {
  position: fixed;
  left: 16px;
  bottom: 16px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  max-width: 70%;
}

.chat-toggle-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #a23946, #802833);
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(162, 57, 70, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
}

.chat-toggle-btn:hover {
  transform: scale(1.05);
}

.toggle-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #dc2626;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 2px solid #fffdfa;
}

.live-chat-container {
  width: 320px;
  max-width: 100%;
  height: 350px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 253, 250, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: slideUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.chat-header {
  background: rgba(255, 255, 255, 0.15);
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-badge {
  background: #dc2626;
  color: #ffffff;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  animation: pulse 1.5s infinite;
}

.chat-title {
  font-size: 12px;
  font-weight: 600;
  color: #33261c;
}

.chat-messages-box {
  flex: 1;
  overflow-y: auto;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scroll-behavior: smooth;
}

.chat-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.25);
  padding: 6px 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  max-width: 90%;
  animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.chat-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-content {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.chat-user-name {
  font-size: 11px;
  font-weight: 700;
  color: #44352a;
}

.chat-text {
  font-size: 12px;
  color: #1a120c;
  margin: 0;
  line-height: 1.35;
  word-break: break-word;
  white-space: pre-line;
}

.empty-chat {
  text-align: center;
  color: #554638;
  font-style: italic;
  font-size: 12px;
  margin: auto 0;
}

.chat-footer-trigger {
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 10px;
}

.fake-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  color: #44352a;
  font-size: 12px;
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
  cursor: pointer;
}

.fake-input:hover {
  background: rgba(255, 255, 255, 0.4);
}

.reaction-wrapper {
  position: relative;
  display: inline-block;
}

.reaction-trigger-btn {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.reaction-trigger-btn:hover {
  transform: scale(1.15);
  background: rgba(255, 255, 255, 0.5);
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
  border: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 10;
}

.emoji-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0;
}

.emoji-btn:hover {
  transform: scale(1.4) translateY(-4px);
}

.pop-scale-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-scale-leave-active {
  transition: all 0.2s ease-in;
}
.pop-scale-enter-from {
  opacity: 0;
  transform: scale(0.5) translateY(15px);
}
.pop-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

.floating-reactions-container {
  position: absolute;
  right: 20px;
  bottom: 60px;
  width: 80px;
  height: 250px;
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
}

.floating-emoji {
  position: absolute;
  bottom: 0;
  font-size: 24px;
  opacity: 0;
  animation: floatUp ease-in-out forwards;
}

.toast-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(74, 59, 47, 0.2);
  z-index: 10001;
  min-width: 280px;
  justify-content: center;
}

.toast-notification.success {
  background: #fffdfa;
  border: 1px solid #b38b4d;
  color: #a23946;
}

.toast-notification.error {
  background: #fff1f2;
  border: 1px solid #fda4af;
  color: #be123c;
}

.toast-icon {
  font-size: 20px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
  animation: popIn 0.3s ease;
}

.toast-text {
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.4;
}

.toast-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-fade-leave-active {
  transition: all 0.3s ease-in;
}
.toast-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px);
}
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

.list-enter-active {
  transition: all 0.4s ease-out;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(0.6) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(-20px) scale(1.1) translateX(5px);
  }
  50% {
    transform: translateY(-100px) scale(1) translateX(-10px);
  }
  80% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-240px) scale(0.8) translateX(8px);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes popIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 480px) {
  .tiktok-chat-widget {
    left: 10px;
    bottom: 10px;
    max-width: 70%;
  }
  .live-chat-container {
    width: 100%;
    height: 280px;
  }
}
</style>