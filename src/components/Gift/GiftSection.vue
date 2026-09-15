<template>
  <section class="gift-section" id="gift">
    <div class="container">

      <div class="section-header">
        <span class="section-sub">WEDDING GIFT</span>
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Hộp Mừng Cưới</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Gửi trao yêu thương & lời chúc phúc may mắn đến đôi uyên ương</p>
      </div>

      <!-- NÚT PHONG BAO MỪNG CƯỚI -->
      <div class="envelope-container">
        <button class="royal-envelope-btn" @click="openModal = true">
          <div class="envelope-shimmer"></div>

          <!-- Các hạt lấp lánh & tiền xu bay bay -->
          <span class="sparkle sp-1">✦</span>
          <span class="sparkle sp-2">✦</span>
          <span class="sparkle sp-3">✦</span>
          <span class="sparkle sp-4">✦</span>

          <div class="envelope-body">
            <div class="envelope-border-inner">
              <div class="envelope-wax-seal">
                <span>囍</span>
              </div>
              <p class="envelope-text">MỪNG CƯỚI</p>
              <span class="envelope-hint">Chạm để mở QR mừng cưới</span>
            </div>
          </div>
        </button>
      </div>

      <!-- MODAL QR MỪNG CƯỚI -->
      <Transition name="modal-fade">
        <div v-if="openModal" class="gift-modal-overlay" @click.self="openModal = false">
          <div class="gift-modal-card">
            
            <div class="modal-top-bar">
              <h3 class="modal-heading">Gửi Mừng Hạnh Phúc</h3>
              <button class="btn-close-modal" @click="openModal = false">✕</button>
            </div>

            <div class="modal-content-body">
              <p class="modal-subtext">
                Cảm ơn tình cảm yêu thương và sự chúc phúc quý báu từ Quý vị!
              </p>

              <div class="qr-display-box">
                <img src="/images/bank.jpg" alt="Mã QR mừng cưới" class="qr-image" />
              </div>

              <!-- Thông tin chuyển khoản & Copy STK -->
              <div class="bank-details-box">
                <div class="bank-info-row">
                  <span class="bank-label">Ngân hàng:</span>
                  <strong class="bank-val">MB BANK</strong>
                </div>

                <div class="bank-info-row">
                  <span class="bank-label">Chủ tài khoản:</span>
                  <strong class="bank-val">LE HOANG THIEN</strong>
                </div>

                <div class="bank-info-row account-num-row">
                  <span class="bank-label">Số tài khoản:</span>
                  <strong class="bank-val stk-highlight">{{ accountNumber }}</strong>
                  <button class="btn-copy-stk" @click="copyAccountNumber">
                    {{ copied ? '✓ Đã chép' : '📋 Sao chép' }}
                  </button>
                </div>
              </div>

              <div class="modal-actions">
                <button class="btn-download-qr" @click="downloadQR">
                  📥 Tải mã QR về máy
                </button>
              </div>
            </div>

          </div>
        </div>
      </Transition>

      <!-- Toast thông báo -->
      <Transition name="toast-fade">
        <div v-if="toastShow" class="copy-toast">
          <span>✨ {{ toastMessage }}</span>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openModal = ref(false)
const accountNumber = ref('0908889999') // Số tài khoản ngân hàng
const copied = ref(false)
const toastShow = ref(false)
const toastMessage = ref('')

const showToast = (msg) => {
  toastMessage.value = msg
  toastShow.value = true
  setTimeout(() => {
    toastShow.value = false
  }, 3000)
}

const copyAccountNumber = async () => {
  try {
    await navigator.clipboard.writeText(accountNumber.value)
    copied.value = true
    showToast('Đã sao chép số tài khoản vào bộ nhớ đệm!')
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    showToast('Không thể tự động sao chép, bạn vui lòng chép thủ công nhé!')
  }
}

const downloadQR = () => {
  const link = document.createElement('a')
  link.href = '/images/bank.jpg'
  link.download = 'qr-mung-cuoi-hoang-thien-phan-linh.jpg'
  link.click()
  showToast('Đang tải mã QR...')
}
</script>

<style scoped>
.gift-section {
  padding: 90px 16px;
  position: relative;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

.envelope-container {
  margin: 40px auto 0;
  display: flex;
  justify-content: center;
}

.royal-envelope-btn {
  position: relative;
  width: 260px;
  height: 320px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.4s ease;
}

.royal-envelope-btn:hover {
  transform: scale(1.04);
}

.envelope-body {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(145deg, #a23946 0%, #802833 70%, #59161e 100%);
  border: 2px solid #c8a55c;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(143, 46, 54, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: gentleWiggle 4s ease-in-out infinite;
}

.envelope-border-inner {
  width: 100%;
  height: 100%;
  border: 1px dashed rgba(255, 215, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.envelope-wax-seal {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffd778 0%, #c8a55c 80%, #916c27 100%);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px solid #ffffff;
}

.envelope-wax-seal span {
  font-family: var(--font-serif);
  font-size: 30px;
  color: #802833;
  font-weight: bold;
}

.envelope-text {
  font-family: var(--font-serif);
  font-size: 20px;
  letter-spacing: 4px;
  color: #ffd778;
  font-weight: 700;
  margin: 0 0 6px;
}

.envelope-hint {
  font-size: 12px;
  color: #fce7b2;
  font-weight: 400;
  opacity: 0.9;
}

.sparkle {
  position: absolute;
  color: #ffd778;
  font-size: 16px;
  pointer-events: none;
  animation: sparkleTwinkle 2.5s infinite ease-in-out;
}

.sp-1 { top: 10%; left: -10px; animation-delay: 0s; }
.sp-2 { top: 20%; right: -10px; animation-delay: 0.7s; }
.sp-3 { bottom: 15%; left: -5px; animation-delay: 1.4s; }
.sp-4 { bottom: 25%; right: -15px; animation-delay: 2.1s; }

@keyframes gentleWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
}

@keyframes sparkleTwinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.3); }
}

/* MODAL */
.gift-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 12, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.gift-modal-card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: var(--radius-md);
  border: 2px solid #c8a55c;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  animation: zoomModal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-top-bar {
  background: linear-gradient(135deg, #8f2e36, #a23946);
  color: #ffffff;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-heading {
  font-family: var(--font-serif);
  font-size: 19px;
  color: #ffd778;
  margin: 0;
}

.btn-close-modal {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content-body {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-subtext {
  font-size: 13.5px;
  color: var(--text-muted);
  text-align: center;
  margin-bottom: 18px;
  line-height: 1.5;
}

.qr-display-box {
  background: #fffdfa;
  border: 1.5px solid rgba(200, 165, 92, 0.4);
  padding: 12px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 20px;
}

.qr-image {
  width: 210px;
  height: 210px;
  object-fit: contain;
  display: block;
}

.bank-details-box {
  width: 100%;
  background: rgba(200, 165, 92, 0.08);
  border: 1px dashed rgba(200, 165, 92, 0.4);
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 18px;
  text-align: left;
}

.bank-info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13.5px;
}

.bank-info-row:last-child {
  margin-bottom: 0;
}

.bank-label {
  color: var(--text-muted);
}

.bank-val {
  color: var(--text-main);
  font-weight: 600;
}

.stk-highlight {
  color: var(--wine-red);
  font-size: 15px;
  letter-spacing: 1px;
}

.btn-copy-stk {
  background: #ffffff;
  border: 1px solid var(--primary-gold);
  color: var(--wine-red);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-copy-stk:hover {
  background: var(--wine-red);
  color: #fff;
  border-color: var(--wine-red);
}

.modal-actions {
  width: 100%;
}

.btn-download-qr {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #8f2e36, #a23946);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(143, 46, 54, 0.25);
  transition: all 0.3s ease;
}

.btn-download-qr:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.35);
}

/* TOAST */
.copy-toast {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a120c;
  color: #ffd778;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  z-index: 10001;
}

@keyframes zoomModal {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

.toast-fade-enter-active, .toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>