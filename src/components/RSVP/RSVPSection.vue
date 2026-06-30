<template>
  <section class="rsvp-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">BEST WISHES</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Gửi Lời Chúc</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="row justify-content-center g-4 layout-wrapper">
        <div class="col-lg-5">
          <div class="wish-form">
            <div class="mb-4">
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Họ và tên của bạn..."
              >
            </div>

            <div class="mb-4">
              <textarea
                v-model="message"
                rows="4"
                class="form-control"
                placeholder="Nhập lời chúc ý nghĩa gửi đến cặp đôi..."
              ></textarea>
            </div>

            <button class="btn btn-submit" @click="submitWish" :disabled="loading">
              <span v-if="loading">⏳ Đang gửi...</span>
              <span v-else>✦ Gửi lời chúc hạnh phúc</span>
            </button>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="live-chat-container">
            <div class="chat-header">
              <span class="live-badge">● LIVE</span>
              <span class="chat-title">Lời Chúc Trực Tuyến</span>
            </div>

            <div ref="chatBox" class="chat-messages-box">
              <TransitionGroup name="list">
                <div v-for="item in wishes" :key="item.id" class="chat-item">
                  <div class="chat-avatar" :style="{ backgroundColor: item.avatarBg }">
                    {{ item.name.charAt(0).toUpperCase() }}
                  </div>
                  <div class="chat-content">
                    <span class="chat-user-name">{{ item.name }}</span>
                    <p class="chat-text">{{ item.message }}</p>
                  </div>
                </div>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const name = ref("");
const message = ref("");
const loading = ref(false);
const chatBox = ref(null);

const wishes = ref([
  { id: 1, name: "Thanh Bình", message: "Chúc hai bạn trăm năm hạnh phúc, mãi mãi bên nhau nhé! 🎉", avatarBg: "#b38b4d" },
  { id: 2, name: "Khánh Linh", message: "Thiệp cưới xinh xuất sắc luôn hai bạn ơi. Chúc mừng hạnh phúc nha!", avatarBg: "#a23946" },
  { id: 3, name: "Minh Triết", message: "Happy Wedding! Chúc chú rể Hoàng Thiện và cô dâu Phan Linh vạn sự như ý.", avatarBg: "#4a3b2f" }
]);

const mockMessages = [
  { name: "Anh Tuấn", message: "Chúc hai bạn sớm đón rồng con nha! 👶❤️", avatarBg: "#8a6d3b" },
  { name: "Ngọc Diệp", message: "Đẹp đôi quá trời luôn. Chúc mừng ngày vui của hai bạn!", avatarBg: "#a23946" },
  { name: "Hoàng Long", message: "Mãi hạnh phúc như ngày đầu nhé! Mừng hạnh phúc hai bạn.", avatarBg: "#2e5a44" },
  { name: "Thu Hà", message: "Chúc ngày vui tràn ngập tiếng cười và hạnh phúc viên mãn.", avatarBg: "#b38b4d" },
  { name: "Phước Thịnh", message: "Chúc mừng hạnh phúc nha hai người bạn của tôi! Đêm nay không say không về.", avatarBg: "#4a3b2f" },
  { name: "Thảo Nguyên", message: "Love is in the air! Cung hỷ cung hỷ song hỷ lâm môn! ✨", avatarBg: "#a23946" }
];

let liveTimer = null;

const scrollToBottom = async () => {
  await nextTick();
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }
};

const submitWish = async () => {
  if (loading.value) return

  if (!name.value.trim() || !message.value.trim()) {
    alert("Vui lòng điền đầy đủ họ tên và lời chúc nhé ❤️")
    return
  }

  loading.value = true

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzWXgxFNZdg6ZdeSqpd3es7OEEKKRwQ0olvp-DCc7ELh9e6DMA5AvZz7iRkEQhxHPJDDQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name: name.value.trim(),
        message: message.value.trim()
      })
    })

    const text = await res.text()
    const clean = text.trim().toLowerCase()

    if (clean === "ok") {
  alert("Gửi lời chúc thành công ❤️")

  wishes.value.push({
    id: Date.now(),
    name: name.value.trim(),
    message: message.value.trim(),
    avatarBg: "#a23946"
  })

  name.value = ""
  message.value = ""

  scrollToBottom()

    } else {
      alert("Lỗi gửi dữ liệu từ hệ thống Sheets")
    }

  } catch (err) {
    console.error(err)
    alert("Không gửi được lời chúc, vui lòng thử lại!")
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  scrollToBottom();

  liveTimer = setInterval(() => {
    const randomMsg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
    wishes.value.push({
      id: Date.now() + Math.random(),
      ...randomMsg
    });
    scrollToBottom();
  }, 3500);
});

onUnmounted(() => {
  if (liveTimer) clearInterval(liveTimer);
});
</script>

<style scoped>
.rsvp-section {
  padding: 80px 16px;
  background: #fffdfa;
}

.section-title {
  margin-bottom: 50px;
}

.sub-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #b38b4d;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.title-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.decorator-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.section-title h2 {
  font-family: serif;
  font-size: 34px;
  font-weight: 600;
  color: #a23946;
  margin: 0;
  letter-spacing: 0.5px;
}

.layout-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.wish-form {
  background: #fffdfa;
  border: 1px solid rgba(179, 139, 77, 0.25);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 15px 45px rgba(74, 59, 47, 0.04);
  box-sizing: border-box;
}

.form-control {
  width: 100%;
  border: 1px solid rgba(179, 139, 77, 0.3);
  background: #ffffff;
  border-radius: 8px;
  padding: 14px 18px;
  color: #4a3b2f;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: #a39689;
  opacity: 0.7;
}

.form-control:focus {
  border-color: #a23946;
  box-shadow: 0 0 0 3px rgba(162, 57, 70, 0.08);
  background: #fffdfa;
}

textarea.form-control {
  resize: none;
  line-height: 1.6;
}

.btn-submit {
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #a23946, #802833);
  color: #fffdfa;
  border-radius: 50px;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(162, 57, 70, 0.2);
  transition: all 0.3s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(162, 57, 70, 0.35);
  opacity: 0.95;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.live-chat-container {
  border: 1px solid rgba(179, 139, 77, 0.25);
  background: rgba(74, 59, 47, 0.02);
  border-radius: 16px;
  overflow: hidden;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 20px rgba(74, 59, 47, 0.02);
}

.chat-header {
  background: #ffffff;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(179, 139, 77, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
}

.live-badge {
  background: #dc2626;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 1px;
  animation: pulse 1.5s infinite;
}

.chat-title {
  font-size: 14px;
  font-weight: 600;
  color: #4a3b2f;
}

.chat-messages-box {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
}

.chat-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #ffffff;
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(74, 59, 47, 0.02);
  max-width: 90%;
  animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.chat-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-user-name {
  font-size: 12.5px;
  font-weight: 700;
  color: #7a6b5c;
}

.chat-text {
  font-size: 13.5px;
  color: #4a3b2f;
  margin: 0;
  line-height: 1.4;
  word-break: break-word;
}

.list-enter-active {
  transition: all 0.4s ease-out;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes popIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
  .rsvp-section {
    padding: 60px 16px;
  }

  .section-title {
    margin-bottom: 35px;
  }

  .section-title h2 {
    font-size: 26px;
  }

  .title-group {
    gap: 12px;
  }

  .decorator-line {
    width: 30px;
  }

  .wish-form {
    padding: 30px 20px;
  }

  .live-chat-container {
    height: 300px;
  }
}
</style>