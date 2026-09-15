<template>
  <section
    ref="heroRef"
    class="hero-container"
    @click="closeLetter">

    <div
      class="invitation-card"
      :class="{ 'is-open': isOpen }">

      <!-- BÌA THIỆP CƯỚI (FRONT COVER) -->
      <div
        class="card-cover"
        @click.stop="onCoverClick">

        <div class="cover-frame-outer">
          <div class="cover-frame-inner">

            <!-- Hoa văn 4 góc mạ vàng -->
            <div class="corner-ornament tl">✦</div>
            <div class="corner-ornament tr">✦</div>
            <div class="corner-ornament bl">✦</div>
            <div class="corner-ornament br">✦</div>

            <div class="cover-content">
              <span class="cover-tagline">WEDDING INVITATION</span>
              
              <!-- Con dấu sáp cưới hoàng gia (Royal Wax Seal) -->
              <div class="wax-seal">
                <div class="wax-seal-inner">
                  <span class="wax-seal-symbol">囍</span>
                </div>
              </div>

              <div class="couple-names-wrap">
                <h1 class="groom-name">Lê Hoàng Thiện</h1>
                <div class="couple-connector">
                  <span class="connector-line"></span>
                  <span class="heart-icon">❦</span>
                  <span class="connector-line"></span>
                </div>
                <h1 class="bride-name">Phan Linh</h1>
              </div>

              <div class="wedding-date-tag">
                <span class="date-text">06 . 01 . 2027</span>
              </div>

              <p class="save-the-date">SAVE OUR SPECIAL DAY</p>

              <div v-if="!isOpen" class="open-hint-btn">
                <span class="hint-pulse-ring"></span>
                <span class="hint-text">✉ Chạm để mở thiệp</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- NỘI DUNG BÊN TRONG THIỆP (BOOK PAGES) -->
      <div class="card-book">
        <div class="book-spine-shadow"></div>

        <div class="book-pages-wrapper">

          <!-- TRANG TRÁI (LEFT PAGE): LỜI MỜI & TÂM SỰ -->
          <div class="book-page page-left">
            <div class="page-ornament-border">
              
              <div class="left-page-body">
                <div class="quote-box">
                  <p class="quote-text">
                    “Yêu không chỉ là một danh từ, đó là một hành trình dài của sự thấu hiểu, sẻ chia và cùng nhau già đi.”
                  </p>
                  <span class="quote-diamond">✦ ✦ ✦</span>
                </div>

                <div class="invitation-intro">
                  <span class="sub-heading">TRÂN TRỌNG KÍNH MỜI</span>
                  <h2 class="guest-title">Quý Vị & Các Bạn</h2>
                </div>

                <div class="invitation-message">
                  <p class="msg-para">
                    Sau những năm tháng cùng nhau đi qua giông bão và bình yên, chúng con hiểu rằng mình đã tìm thấy một nửa trọn vẹn của cuộc đời.
                  </p>
                  
                  <div class="event-callout">
                    ĐẾN THAM DỰ TIỆC MỪNG & CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
                  </div>

                  <p class="msg-sub">
                    Sự hiện diện, những nụ cười và lời chúc phúc của Quý vị chính là món quà ý nghĩa nhất và là niềm vinh hạnh to lớn cho hai gia đình trong ngày trọng đại này.
                  </p>
                </div>

                <div class="bottom-ornament">
                  <span>❧</span> ❦ <span>☙</span>
                </div>
              </div>

            </div>
          </div>

          <!-- TRANG PHẢI (RIGHT PAGE): GIA ĐÌNH & THỜI GIAN ĐỊA ĐIỂM -->
          <div class="book-page page-right">
            <div class="page-ornament-border">
              
              <div class="right-page-body">

                <!-- Thông tin song thân -->
                <div class="parents-section">
                  <div class="parent-side groom-side">
                    <span class="family-badge">NHÀ TRAI</span>
                    <p class="parent-name">Ông: <strong>Lê Xuyên Truyền</strong></p>
                    <p class="parent-name">Bà: <strong>Lê Thị Thanh Nữ</strong></p>
                    <span class="hometown">Mỹ Tho, Tiền Giang</span>
                  </div>

                  <div class="family-divider">
                    <span class="div-line"></span>
                    <span class="div-symbol">囍</span>
                    <span class="div-line"></span>
                  </div>

                  <div class="parent-side bride-side">
                    <span class="family-badge">NHÀ GÁI</span>
                    <p class="parent-name empty-placeholder">&nbsp;</p>
                    <p class="parent-name">Bà: <strong>[Họ tên Mẹ]</strong></p>
                    <span class="hometown">Đà Lạt, Lâm Đồng</span>
                  </div>
                </div>

                <div class="wedding-announcement">
                  <span>TRÂN TRỌNG BÁO TIN LỄ TÂN HÔN CỦA HAI CON</span>
                </div>

                <div class="couple-highlight-box">
                  <div class="couple-person">
                    <h3 class="name-display">Lê Hoàng Thiện</h3>
                    <span class="rank-title">Trưởng Nam</span>
                  </div>

                  <div class="rings-union">
                    <div class="ring-gold ring-left">
                      <div class="diamond-sparkle"></div>
                    </div>
                    <div class="ring-gold ring-right">
                      <div class="diamond-sparkle"></div>
                    </div>
                  </div>

                  <div class="couple-person">
                    <h3 class="name-display">Phan Linh</h3>
                    <span class="rank-title">Út Nữ</span>
                  </div>
                </div>

                <!-- Thời gian & Địa điểm Hôn Lễ -->
                <div class="ceremony-schedule-card">
                  <h4 class="ceremony-title">HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA NHÀ TRAI</h4>
                  <div class="gold-separator"></div>

                  <div class="schedule-content-layout">
                    <div class="schedule-info">
                      <div class="solar-time">
                        VÀO LÚC <strong>11:00 — THỨ TƯ</strong>
                        <div class="date-large">06 . 01 . 2027</div>
                      </div>

                      <div class="lunar-time">
                        (Nhằm ngày 29 tháng 11 năm Bính Ngọ)
                      </div>

                      <div class="venue-address">
                        <span class="pin-icon">📍</span>
                        Ấp 3, Xã Trung An, TP. Mỹ Tho, Tỉnh Tiền Giang
                      </div>
                    </div>

                    <div class="schedule-direction-wrap">
                      <a
                        href="https://www.google.com/maps?q=10.371986,106.324576"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-mini-direction"
                        title="Chỉ dẫn đường đi trên Google Maps"
                        @click.stop
                      >
                        <span class="direction-compass">🧭</span>
                        <span class="direction-text">Chỉ Đường</span>
                        <span class="direction-arrow">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref(null)
const isOpen = ref(false)
let observer = null

const emit = defineEmits(['opened'])

const playMusic = () => {
  window.dispatchEvent(new Event('user-interact'))
}

const onCoverClick = () => {
  if (isOpen.value) return
  isOpen.value = true
  emit('opened')
  playMusic()
}

const closeLetter = () => {
  // Cho phép bấm nền ngoài để đóng lại nếu muốn
}

onMounted(() => {
  // Có thể tự mở sau vài giây nếu cần hoặc đợi tương tác
})

onUnmounted(() => {
  if (observer && heroRef.value) {
    observer.unobserve(heroRef.value)
  }
})
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  perspective: 2500px;
  background: radial-gradient(circle at center, #fbf7ef 0%, #f0e6d5 100%);
  position: relative;
  overflow: hidden;
}

.invitation-card {
  position: relative;
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  transform-style: preserve-3d;
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

/* BÌA THIỆP */
.card-cover {
  position: absolute;
  inset: 0;
  z-index: 20;
  transform-origin: left center;
  transition: transform 1.2s cubic-bezier(0.65, 0.05, 0.36, 1), box-shadow 1.2s ease;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #fdfbf7 0%, #f4eae0 50%, #eae0cf 100%);
  box-shadow: 0 25px 60px rgba(74, 59, 47, 0.2), inset 0 0 0 1px rgba(200, 165, 92, 0.4);
  backface-visibility: hidden;
}

.invitation-card.is-open .card-cover {
  transform: rotateY(-170deg);
  box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

.cover-frame-outer {
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 2px solid #c8a55c;
  box-sizing: border-box;
}

.cover-frame-inner {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(200, 165, 92, 0.6);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #ffffff 0%, #faf3eb 100%);
  padding: 20px 24px;
  box-sizing: border-box;
}

.corner-ornament {
  position: absolute;
  color: #c8a55c;
  font-size: 14px;
  opacity: 0.8;
}
.corner-ornament.tl { top: 8px; left: 8px; }
.corner-ornament.tr { top: 8px; right: 8px; }
.corner-ornament.bl { bottom: 8px; left: 8px; }
.corner-ornament.br { bottom: 8px; right: 8px; }

.cover-content {
  text-align: center;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-tagline {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 5px;
  font-weight: 600;
  color: #b38b4d;
  text-transform: uppercase;
  margin-bottom: 12px;
}

/* WAX SEAL */
.wax-seal {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #b53847 0%, #851b27 75%, #590f18 100%);
  box-shadow: 0 6px 20px rgba(133, 27, 39, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  animation: sealFloat 4s ease-in-out infinite;
}

.wax-seal::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px dashed rgba(200, 165, 92, 0.5);
}

.wax-seal-inner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 215, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.wax-seal-symbol {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: bold;
  color: #ffd778;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.couple-names-wrap {
  margin: 6px 0 14px;
}

.groom-name, .bride-name {
  font-family: var(--font-script);
  font-size: 48px;
  color: #8f2e36;
  font-weight: 400;
  margin: 0;
  line-height: 1.15;
  text-shadow: 0 2px 5px rgba(143, 46, 54, 0.1);
}

.couple-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 6px 0;
}

.connector-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a55c, transparent);
}

.heart-icon {
  color: #8f2e36;
  font-size: 16px;
}

.wedding-date-tag {
  background: rgba(200, 165, 92, 0.12);
  border: 1px solid rgba(200, 165, 92, 0.35);
  padding: 4px 18px;
  border-radius: 50px;
  margin-bottom: 10px;
}

.date-text {
  font-family: var(--font-serif);
  font-size: 15px;
  letter-spacing: 2.5px;
  color: #8f7a60;
  font-weight: 600;
}

.save-the-date {
  font-size: 10.5px;
  letter-spacing: 4px;
  color: #b38b4d;
  font-weight: 600;
  text-transform: uppercase;
}

.open-hint-btn {
  margin-top: 20px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 22px;
  border-radius: 50px;
  background: linear-gradient(135deg, #8f2e36, #a23946);
  color: #fff;
  font-size: 13.5px;
  font-weight: 500;
  box-shadow: 0 6px 18px rgba(143, 46, 54, 0.28);
  transition: transform 0.3s ease;
}

.open-hint-btn:hover {
  transform: translateY(-2px);
}

.hint-pulse-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50px;
  border: 2px solid #a23946;
  animation: pulseRing 2s infinite;
}

/* RUỘT THIỆP (BOOK INSIDE) */
.card-book {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #fdfaf6;
  box-shadow: 0 30px 70px rgba(74, 59, 47, 0.18);
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}

.invitation-card.is-open .card-book {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.book-spine-shadow {
  position: absolute;
  left: 50%;
  top: 1%;
  bottom: 1%;
  width: 24px;
  transform: translateX(-50%);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.08));
  border-radius: 30px;
  z-index: 10;
}

.book-pages-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.book-page {
  flex: 1;
  position: relative;
  background: radial-gradient(circle at center, #ffffff 0%, #faf4ea 100%);
  padding: 12px;
  box-sizing: border-box;
}

.page-left {
  border-right: 1px solid rgba(200, 165, 92, 0.3);
}

.page-right {
  border-left: 1px solid rgba(200, 165, 92, 0.3);
}

.page-ornament-border {
  width: 100%;
  height: 100%;
  border: 1.5px solid #c8a55c;
  padding: 16px 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-ornament-border::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid rgba(200, 165, 92, 0.4);
  pointer-events: none;
}

/* NỘI DUNG TRANG TRÁI */
.left-page-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
}

.quote-box {
  max-width: 95%;
  margin-bottom: 4px;
}

.quote-mark {
  font-family: var(--font-serif);
  font-size: 26px;
  color: #c8a55c;
  line-height: 1;
  display: block;
}

.quote-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13.5px;
  color: #6e5e4f;
  line-height: 1.5;
  margin: 0;
}

.quote-diamond {
  color: #c8a55c;
  font-size: 9px;
  margin-top: 3px;
  display: block;
}

.invitation-intro {
  margin: 2px 0;
}

.sub-heading {
  font-family: var(--font-serif);
  font-size: 13.5px;
  letter-spacing: 2.5px;
  color: #b38b4d;
  font-weight: 600;
  display: block;
}

.guest-title {
  font-family: var(--font-script);
  font-size: 42px;
  color: #8f2e36;
  margin: 2px 0 6px;
  font-weight: normal;
}

.invitation-message {
  max-width: 440px;
  margin: 0 auto;
}

.msg-para {
  font-size: 13.5px;
  color: #5f5040;
  line-height: 1.5;
  margin-bottom: 8px;
}

.event-callout {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  color: #8f2e36;
  letter-spacing: 0.5px;
  line-height: 1.4;
  background: rgba(143, 46, 54, 0.06);
  padding: 6px 10px;
  border-radius: 6px;
  margin: 6px 0;
}

.msg-sub {
  font-size: 12.5px;
  color: #7a6b5c;
  line-height: 1.5;
  margin: 0;
}

.bottom-ornament {
  color: #c8a55c;
  font-size: 13px;
  margin-top: 4px;
}

/* NỘI DUNG TRANG PHẢI */
.right-page-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.parents-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.parent-side {
  flex: 1;
}

.family-badge {
  display: inline-block;
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #8f2e36;
  margin-bottom: 4px;
  border-bottom: 1px solid #c8a55c;
  padding-bottom: 2px;
}

.parent-name {
  font-size: 12.5px;
  color: #4e4337;
  margin: 2px 0;
}

.parent-name strong {
  font-weight: 600;
}

.parent-name.empty-placeholder {
  visibility: hidden;
}

.hometown {
  display: block;
  font-size: 11.5px;
  color: #847460;
  margin-top: 2px;
}

.family-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 20px;
}

.div-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, #c8a55c, transparent);
}

.div-symbol {
  font-family: var(--font-serif);
  color: #c8a55c;
  font-size: 15px;
  margin: 3px 0;
}

.wedding-announcement {
  font-size: 10.5px;
  letter-spacing: 1.5px;
  color: #806a50;
  font-weight: 600;
  text-transform: uppercase;
  margin: 5px 0;
}

.couple-highlight-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(200, 165, 92, 0.07);
  border: 1px dashed rgba(200, 165, 92, 0.4);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 2px 0;
}

.couple-person {
  flex: 1;
}

.name-display {
  font-family: var(--font-script);
  font-size: 28px;
  color: #8f2e36;
  margin: 0;
  line-height: 1.15;
}

.rank-title {
  display: block;
  font-size: 11px;
  color: #8a7862;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.rings-union {
  display: flex;
  align-items: center;
  position: relative;
  width: 38px;
  height: 24px;
}

.ring-gold {
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 2.5px solid #dfba73;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.ring-left { left: 2px; }
.ring-right { right: 2px; }

.diamond-sparkle {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 4px #fff, 0 0 8px #dfba73;
}

.ceremony-schedule-card {
  background: #fff;
  border: 1px solid rgba(200, 165, 92, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 4px;
}

.ceremony-title {
  font-family: var(--font-serif);
  font-size: 12px;
  letter-spacing: 1px;
  color: #8f2e36;
  margin: 0 0 4px;
  font-weight: 700;
}

.gold-separator {
  width: 36px;
  height: 1px;
  background: #c8a55c;
  margin: 0 auto 6px;
}

.solar-time {
  font-size: 12.5px;
  color: #4a3b2f;
}

.date-large {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  color: #8f2e36;
  letter-spacing: 1.5px;
  margin: 1px 0;
}

.lunar-time {
  font-size: 11px;
  color: #7a6b5c;
  font-style: italic;
  margin-bottom: 3px;
}

.venue-address {
  font-size: 11.5px;
  color: #4a3b2f;
  font-weight: 500;
}

.pin-icon {
  color: #a23946;
}

.schedule-content-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.schedule-info {
  flex: 1;
  text-align: center;
}

.schedule-direction-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-mini-direction {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: linear-gradient(135deg, #ffffff 0%, #faf3e6 100%);
  border: 1.5px solid #c8a55c;
  border-radius: 50px;
  color: #8f2e36;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(200, 165, 92, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  white-space: nowrap;
}

.btn-mini-direction:hover {
  background: linear-gradient(135deg, #8f2e36 0%, #a23946 100%);
  border-color: #8f2e36;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(143, 46, 54, 0.35);
}

.direction-compass {
  font-size: 14px;
  line-height: 1;
  transition: transform 0.4s ease;
}

.btn-mini-direction:hover .direction-compass {
  transform: rotate(45deg) scale(1.15);
}

.direction-text {
  font-family: var(--font-serif);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1;
}

.direction-arrow {
  font-size: 11px;
  font-weight: bold;
  color: #c8a55c;
  transition: all 0.3s ease;
}

.btn-mini-direction:hover .direction-arrow {
  color: #ffd778;
  transform: translate(2px, -2px);
}

@keyframes sealFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.08); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}

@media (max-width: 992px) {
  .hero-container {
    padding: 20px 12px;
    min-height: 100vh;
    min-height: 100dvh;
  }

  .invitation-card {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
  }

  .invitation-card.is-open {
    max-width: 600px;
    height: auto;
    min-height: auto;
  }

  .invitation-card.is-open .card-cover {
    display: none;
  }

  .card-book {
    position: relative;
    height: auto;
  }

  .book-pages-wrapper {
    flex-direction: column;
  }

  .book-spine-shadow {
    display: none;
  }

  .page-left {
    border-right: none;
    border-bottom: 1px solid rgba(200, 165, 92, 0.3);
  }

  .page-right {
    border-left: none;
  }

  .groom-name, .bride-name {
    font-size: 42px;
  }

  .guest-title {
    font-size: 40px;
  }
}

@media (max-width: 576px) {
  .hero-container {
    padding: 12px 8px;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .invitation-card {
    max-width: 390px;
    height: min(580px, calc(100dvh - 24px));
    min-height: 480px;
  }

  .invitation-card.is-open {
    max-width: 100%;
    height: auto;
    min-height: auto;
  }

  .cover-frame-outer {
    padding: 6px;
  }

  .cover-frame-inner {
    padding: 16px 12px;
  }

  .cover-tagline {
    font-size: 10px;
    letter-spacing: 3px;
    margin-bottom: 8px;
  }

  .wax-seal {
    width: 52px;
    height: 52px;
    margin-bottom: 10px;
  }

  .wax-seal-inner {
    width: 38px;
    height: 38px;
  }

  .wax-seal-symbol {
    font-size: 20px;
  }

  .couple-names-wrap {
    margin: 4px 0 10px;
  }

  .groom-name, .bride-name {
    font-size: 30px;
    line-height: 1.15;
  }

  .couple-connector {
    margin: 4px 0;
    gap: 10px;
  }

  .connector-line {
    width: 40px;
  }

  .heart-icon {
    font-size: 13px;
  }

  .wedding-date-tag {
    padding: 4px 14px;
    margin-bottom: 6px;
  }

  .date-text {
    font-size: 12.5px;
    letter-spacing: 2px;
  }

  .save-the-date {
    font-size: 9.5px;
    letter-spacing: 3px;
  }

  .open-hint-btn {
    margin-top: 12px;
    padding: 8px 18px;
    font-size: 12.5px;
  }

  .page-ornament-border {
    padding: 16px 12px;
  }

  .guest-title {
    font-size: 34px;
  }

  .msg-para, .msg-sub {
    font-size: 13px;
  }

  .parents-section {
    flex-direction: column;
    gap: 12px;
  }

  .family-divider {
    height: 20px;
    flex-direction: row;
    width: 60px;
  }

  .div-line {
    height: 1px;
    width: auto;
  }

  .couple-highlight-box {
    flex-direction: column;
    gap: 8px;
  }

  .name-display {
    font-size: 26px;
  }

  .schedule-content-layout {
    flex-direction: column;
    gap: 10px;
  }

  .schedule-direction-wrap {
    width: 100%;
  }

  .btn-mini-direction {
    width: 100%;
    justify-content: center;
    padding: 9px 14px;
  }
}
</style>