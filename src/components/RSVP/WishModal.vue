<template>
  <Transition name="modal-fade">
    <div v-if="modelValue" class="wish-modal-overlay" @click.self="closeModal">
      <div class="wish-modal-content">
        <div class="modal-header">
          <h3>Gửi Lời Chúc</h3>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>
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
            <span v-else>✦ Gửi lời chúc</span>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: Boolean,
  scriptUrl: String
});

const emit = defineEmits(["update:modelValue", "success", "toast"]);

const name = ref("");
const message = ref("");
const loading = ref(false);

const closeModal = () => {
  emit("update:modelValue", false);
};

const submitWish = async () => {
  if (loading.value) return;
  
  if (!name.value.trim()) {
    emit("toast", "Hãy cho chúng mình biết bạn là ai nhé!!", "error", "🥺");
    return;
  }
  
  if (!message.value.trim()) {
    emit("toast", "Bạn không có lời chúc gì gửi đến bọn mình sao!!", "error", "😥");
    return;
  }
  
  loading.value = true;
  try {
    const res = await fetch(props.scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name: name.value.trim(),
        message: message.value.trim()
      })
    });
    const text = (await res.text()).trim().toLowerCase();
    if (text === "ok") {
      emit("toast", "Gửi lời chúc thành công ❤️", "success", "❤️");
      name.value = "";
      message.value = "";
      closeModal();
      emit("success");
    } else {
      emit("toast", "Không gửi được lời chúc.", "error", "⚠️");
    }
  } catch (e) {
    emit("toast", "Không thể kết nối máy chủ.", "error", "⚠️");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.wish-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
}

.wish-modal-content {
  background: #fffdfa;
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: modalZoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-header {
  padding: 18px 24px;
  background: #ffffff;
  border-bottom: 1px solid rgba(179, 139, 77, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  color: #a23946;
  font-family: serif;
}

.modal-close {
  background: none;
  border: none;
  font-size: 18px;
  color: #a39689;
  cursor: pointer;
}

.modal-close:hover {
  color: #a23946;
}

.wish-form {
  padding: 24px;
  box-sizing: border-box;
}

.mb-4 {
  margin-bottom: 16px;
}

.form-control {
  width: 100%;
  border: 1px solid rgba(179, 139, 77, 0.3);
  background: #ffffff;
  border-radius: 8px;
  padding: 12px 16px;
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
}

textarea.form-control {
  resize: none;
  line-height: 1.5;
}

.btn-submit {
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #a23946, #802833);
  color: #fffdfa;
  border-radius: 50px;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(162, 57, 70, 0.2);
  transition: all 0.3s ease;
}

.btn-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(162, 57, 70, 0.3);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@keyframes modalZoom {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 480px) {
  .wish-modal-content {
    max-width: 100%;
  }
}
</style>