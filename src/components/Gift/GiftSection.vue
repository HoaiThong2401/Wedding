<template>
  <section class="gift-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">WEDDING GIFT</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Phong Bao Mừng Cưới</h2>
          <div class="decorator-line"></div>
        </div>
        <p class="title-desc">Nhấn vào phong bao để mở mã QR</p>
      </div>

      <button class="envelope-btn" @click="open = true">
        <div class="coin coin-1"></div>
        <div class="coin coin-2"></div>
        <div class="coin coin-3"></div>
        <div class="coin coin-4"></div>
        <div class="coin coin-5"></div>
        <div class="coin coin-6"></div>
        <div class="coin coin-7"></div>
        <div class="coin coin-8"></div>
        <div class="coin coin-9"></div>
        <div class="coin coin-10"></div>

        <span class="spark s1">✦</span>
        <span class="spark s2">✦</span>
        <span class="spark s3">✦</span>

        <div class="envelope">
          <div class="envelope-lines">
            <div class="corner tl"></div>
            <div class="corner tr"></div>
            <div class="corner bl"></div>
            <div class="corner br"></div>
            <div class="seal">囍</div>
          </div>
        </div>

        <p class="hint">Chạm để mở bao thư</p>
      </button>

      <div v-if="open" class="modal" @click.self="open = false">
        <div class="modal-box">
          <div class="modal-header">
            <div class="header-blank"></div>
            <h3>QR Mừng Cưới</h3>
            <button class="close-icon" @click="open = false">✕</button>
          </div>

          <div class="modal-body">
            <div class="qr-wrapper">
              <img src="/images/bank.jpg" alt="QR" />
            </div>

            <div class="actions">
              <button class="btn download" @click="downloadQR">
                📍 Tải mã QR về máy
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const open = ref(false)

const downloadQR = () => {
  const link = document.createElement("a")
  link.href = "/images/bank.jpg"
  link.download = "qr-mung-cuoi.jpg"
  link.click()
}
</script>

<style scoped>
.gift-section {
  padding: 80px 16px;
  text-align: center;
}

.section-title {
  margin-bottom: 40px;
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

.title-desc {
  font-size: 14px;
  color: #7a6b5c;
  margin-top: 10px;
  font-style: italic;
}

.envelope-btn {
  width: 240px;
  height: 320px;
  position: relative;
  margin: 20px auto 0;
  border: none;
  background: transparent;
  cursor: pointer;
  overflow: visible;
  display: block;
  outline: none;
}

.envelope {
  width: 150px;
  height: 220px;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  background: linear-gradient(145deg, #a23946, #802833);
  border: 1px solid rgba(179, 139, 77, 0.3);
  box-shadow: 0 15px 40px rgba(74, 59, 47, 0.18);
  padding: 6px;
  box-sizing: border-box;
  animation: shake 3s ease-in-out infinite;
}

.envelope-lines {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(179, 139, 77, 0.4);
  border-radius: 8px;
  position: relative;
}

.seal {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff3c4, #b38b4d);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  color: #a23946;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.corner {
  position: absolute;
  width: 16px;
  height: 16px;
}

.tl { top: 6px; left: 6px; border-top: 2px solid rgba(179, 139, 77, 0.6); border-left: 2px solid rgba(179, 139, 77, 0.6); }
.tr { top: 6px; right: 6px; border-top: 2px solid rgba(179, 139, 77, 0.6); border-right: 2px solid rgba(179, 139, 77, 0.6); }
.bl { bottom: 6px; left: 6px; border-bottom: 2px solid rgba(179, 139, 77, 0.6); border-left: 2px solid rgba(179, 139, 77, 0.6); }
.br { bottom: 6px; right: 6px; border-bottom: 2px solid rgba(179, 139, 77, 0.6); border-right: 2px solid rgba(179, 139, 77, 0.6); }

.coin {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #fff3c4, #b38b4d);
  border: 1px solid #ffffff;
  box-shadow: 0 3px 8px rgba(74, 59, 47, 0.15);
  opacity: 0;
  animation: floatWide 3.5s linear infinite;
}

.coin-1  { width: 20px; height: 20px; left: -10%; top: 70%; animation-delay: 0s }
.coin-2  { width: 14px; height: 14px; left: 0%;   top: 80%; animation-delay: 0.3s }
.coin-3  { width: 18px; height: 18px; left: 15%;  top: 85%; animation-delay: 0.6s }
.coin-4  { width: 16px; height: 16px; left: 30%;  top: 85%; animation-delay: 0.9s }
.coin-5  { width: 22px; height: 22px; left: 45%;  top: 80%; animation-delay: 1.2s }
.coin-6  { width: 14px; height: 14px; left: 60%;  top: 85%; animation-delay: 1.5s }
.coin-7  { width: 18px; height: 18px; left: 75%;  top: 80%; animation-delay: 1.8s }
.coin-8  { width: 16px; height: 16px; left: 90%;  top: 80%; animation-delay: 2.1s }
.coin-9  { width: 12px; height: 12px; left: 100%; top: 75%; animation-delay: 2.4s }
.coin-10 { width: 24px; height: 24px; left: 50%;  top: 88%; animation-delay: 2.7s }

.spark {
  position: absolute;
  color: #b38b4d;
  font-size: 12px;
  opacity: 0;
  animation: pulse 2s infinite;
}

.s1 { top: 20%; left: 15%; animation-delay: 0s; }
.s2 { top: 45%; right: 10%; animation-delay: 0.7s; }
.s3 { bottom: 30%; left: 10%; animation-delay: 1.4s; }

@keyframes floatWide {
  0% { transform: translateY(0) scale(0.7); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translateY(-120px) translateX(-20px) scale(1); }
  100% { transform: translateY(-260px) translateX(30px) scale(1.1); opacity: 0; }
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(1.5deg); }
  40% { transform: rotate(-1.5deg); }
  60% { transform: rotate(1deg); }
  80% { transform: rotate(-1deg); }
}

.hint {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  color: #b38b4d;
  letter-spacing: 1px;
  font-weight: 500;
}

.envelope-btn:hover .envelope {
  border-color: #b38b4d;
  box-shadow: 0 20px 50px rgba(162, 57, 70, 0.25);
  transform: scale(1.02);
}

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(74, 59, 47, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 9999;
}

.modal-box {
  width: 340px;
  border-radius: 16px;
  overflow: hidden;
  background: #fffdfa;
  border: 1px solid rgba(179, 139, 77, 0.25);
  box-shadow: 0 25px 60px rgba(74, 59, 47, 0.25);
  animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(15px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-header {
  background: linear-gradient(135deg, #a23946, #802833);
  color: #fffdfa;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(179, 139, 77, 0.2);
}

.header-blank {
  width: 28px;
}

.modal-header h3 {
  font-family: serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 1px;
}

.close-icon {
  border: none;
  background: rgba(255, 255, 255, 0.15);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  color: #fffdfa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: background 0.2s ease;
}

.close-icon:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-wrapper {
  background: #ffffff;
  border: 1px solid rgba(179, 139, 77, 0.2);
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(74, 59, 47, 0.05);
  margin-bottom: 20px;
}

.qr-wrapper img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
}

.actions {
  width: 100%;
}

.btn {
  width: 100%;
  padding: 11px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.download {
  background: #fffdfa;
  border: 1px solid #b38b4d;
  color: #a23946;
  box-shadow: 0 4px 15px rgba(74, 59, 47, 0.08);
}

.download:hover {
  background: #a23946;
  color: #fffdfa;
  border-color: #a23946;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(162, 57, 70, 0.2);
}

@media (max-width: 768px) {
  .gift-section {
    padding: 60px 16px;
  }

  .section-title {
    margin-bottom: 30px;
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
}
</style>