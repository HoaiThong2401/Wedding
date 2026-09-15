<template>
  <Transition name="modal-fade">
    <div v-if="modelValue" class="wish-modal-overlay" @click.self="closeModal">
      <div class="wish-modal-content">
        
        <div class="modal-header">
          <div class="header-title-wrap">
            <span class="header-icon">💌</span>
            <h3>Gửi Lời Chúc Mừng</h3>
          </div>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>

        <div class="wish-form">
          <div class="form-group">
            <label class="form-label">Tên của bạn:</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="Nhập tên hoặc danh xưng..."
              maxlength="50"
            >
          </div>

          <div class="form-group">
            <label class="form-label">Lời chúc phúc:</label>
            <textarea
              v-model="message"
              rows="4"
              class="form-control"
              placeholder="Gửi gắm những lời chúc ý nghĩa nhất đến Hoàng Thiện & Phan Linh..."
              maxlength="300"
            ></textarea>
          </div>

          <button class="btn btn-submit" @click="submitWish" :disabled="loading">
            <span v-if="loading">⏳ Đang gửi lời chúc...</span>
            <span v-else>✦ Gửi Lời Chúc Hạnh Phúc</span>
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { db } from "@/firebase";
import { ref as dbRef, push } from "firebase/database";

const props = defineProps({
  modelValue: Boolean,
  scriptUrl: String
});

const emit = defineEmits([
  "update:modelValue",
  "toast"
]);

const name = ref("");
const message = ref("");
const loading = ref(false);

const closeModal = () => {
  emit("update:modelValue", false);
};

const submitWish = async () => {
  if (loading.value) return;

  if (!name.value.trim()) {
    emit("toast", "Hãy cho chúng mình biết bạn là ai nhé!", "error", "🥺");
    return;
  }

  if (!message.value.trim()) {
    emit("toast", "Hãy gửi vài lời chúc tốt đẹp đến cặp đôi bạn nhé!", "error", "✍️");
    return;
  }

  loading.value = true;

  const wish = {
    name: name.value.trim(),
    message: message.value.trim(),
    time: Date.now()
  };

  try {
    await push(dbRef(db, "wishes"), wish);

    if (props.scriptUrl) {
      fetch(props.scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          name: wish.name,
          message: wish.message
        })
      }).catch(() => {});
    }

    emit("toast", "Gửi lời chúc thành công! Cảm ơn bạn rất nhiều ❤️", "success", "❤️");

    name.value = "";
    message.value = "";
    closeModal();
  } catch (e) {
    console.error(e);
    emit("toast", "Gửi thất bại, bạn thử lại sau nhé.", "error", "⚠️");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.wish-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 12, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10002;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.wish-modal-content {
  background: #ffffff;
  border-radius: var(--radius-md);
  border: 1.5px solid #c8a55c;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  animation: modalZoom 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-header {
  padding: 18px 24px;
  background: linear-gradient(135deg, #8f2e36, #a23946);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-icon {
  font-size: 18px;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  color: #ffd778;
  font-family: var(--font-serif);
  font-weight: 600;
}

.modal-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.4);
}

.wish-form {
  padding: 24px;
}

.form-group {
  margin-bottom: 18px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #4a3b2f;
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  border: 1px solid rgba(200, 165, 92, 0.4);
  background: #fdfaf6;
  border-radius: 8px;
  padding: 12px 14px;
  color: #33261c;
  font-size: 14px;
  font-family: var(--font-body);
  outline: none;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #8f2e36;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(143, 46, 54, 0.1);
}

textarea.form-control {
  resize: none;
  line-height: 1.5;
}

.btn-submit {
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #8f2e36, #a23946);
  color: #ffffff;
  border-radius: var(--radius-pill);
  padding: 13px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(143, 46, 54, 0.25);
  transition: all 0.3s ease;
  margin-top: 6px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.35);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@keyframes modalZoom {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>