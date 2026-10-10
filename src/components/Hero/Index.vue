<template>
  <section
    ref="heroRef"
    class="hero-container"
    @click="closeLetter">

    <div class="hero-stage" :class="{ 'is-opened-stage': animState === 'opened' }">

      <div
        v-if="animState !== 'opened' && animState !== 'unfolding'"
        class="envelope-back"
        :class="animState">
        <div class="envelope-inner-liner">
          <div class="liner-pattern-bg"></div>
        </div>
      </div>

      <div
        v-if="animState !== 'opened' && animState !== 'unfolding'"
        class="envelope-flap-top"
        :class="[
          animState,
          { 'flap-open': animState !== 'closed' }
        ]"
        @click.stop="animState === 'closed' ? openInvitation() : null">
        <div class="flap-triangle">
          <div class="flap-v-gold-trim"></div>
          <div class="flap-crest-ornament">✦ ❦ ✦</div>
        </div>

        <div
          class="wax-seal"
          :class="{ 'seal-broken': animState !== 'closed' }">
          <div class="wax-seal-drip"></div>
          <div class="wax-seal-inner">
            <span class="wax-seal-symbol">囍</span>
          </div>
        </div>
      </div>

      <div
        class="invitation-card"
        :class="[
          animState,
          {
            'is-opened': isCardUnfolded
          }
        ]"
        @click.stop="animState === 'closed' ? openInvitation() : null">

        <div
          class="card-cover-unfold"
          :class="{ 'unfolded': isCardUnfolded }">
          <div class="cover-shimmer-beam"></div>
          <div class="cover-frame-outer">
            <div class="cover-frame-inner">
              <div class="corner-ornament tl">✦</div>
              <div class="corner-ornament tr">✦</div>
              <div class="corner-ornament bl">✦</div>
              <div class="corner-ornament br">✦</div>

              <div class="cover-content">
                <div class="cover-monogram">
                  <span class="mono-char">T</span>
                  <span class="mono-symbol">❦</span>
                  <span class="mono-char">L</span>
                </div>

                <span class="cover-tagline">WEDDING INVITATION</span>

                <div class="couple-names-wrap">
                  <h1 class="groom-name">Lê Hoàng Thiện</h1>
                  <div class="couple-connector">
                    <span class="connector-line"></span>
                    <span class="heart-icon">❦</span>
                    <span class="connector-line"></span>
                  </div>
                  <h1 class="bride-name">Phan Thị Linh</h1>
                </div>

                <div class="wedding-date-tag">
                  <span class="date-text">06 . 01 . 2027</span>
                </div>

                <p class="save-the-date">SAVE OUR SPECIAL DAY</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card-book">
          <div class="book-spine-shadow"></div>

          <div class="book-pages-wrapper">

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

            <div class="book-page page-right">
              <div class="page-ornament-border">
                
                <div class="right-page-body">

                  <div class="parents-section">
                    <div class="parent-side groom-side">
                      <span class="family-badge">NHÀ TRAI</span>
                      <p class="parent-name">Ông: <strong>Lê Xuyên Truyền</strong></p>
                      <p class="parent-name">Bà: <strong>Lê Thị Thanh Nữ</strong></p>
                      <span class="hometown">Phường Trung An, Tỉnh Đồng Tháp</span>
                    </div>

                    <div class="family-divider">
                      <span class="div-line"></span>
                      <span class="div-symbol">囍</span>
                      <span class="div-line"></span>
                    </div>

                    <div class="parent-side bride-side">
                      <span class="family-badge">NHÀ GÁI</span>
                      <p class="parent-name empty-placeholder">&nbsp;</p>
                      <p class="parent-name">Bà: <strong>Đỗ Thị Vinh</strong></p>
                      <span class="hometown">Sao Mai, Quảng Lập, Lâm Đồng</span>
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
                      <h3 class="name-display">Phan Thị Linh</h3>
                      <span class="rank-title">Út Nữ</span>
                    </div>
                  </div>

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
                          Phường Trung An, Tỉnh Đồng Tháp
                        </div>
                      </div>

                      <div class="schedule-direction-wrap">
                        <a
                          href="https://maps.app.goo.gl/yAcU4wFFd8jT2qM46"
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

      <div
        v-if="animState !== 'opened' && animState !== 'unfolding'"
        class="envelope-pocket"
        :class="animState"
        @click.stop="animState === 'closed' ? openInvitation() : null">
        <div class="pocket-base">
          <div class="pocket-base-pattern"></div>
        </div>
        <div class="pocket-left"></div>
        <div class="pocket-right"></div>
        <div class="pocket-bottom"></div>
        <div class="pocket-v-trim"></div>

        <div class="pocket-corner bl">❧</div>
        <div class="pocket-corner br">☙</div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref(null)

const animState = ref('closed')
const isCardUnfolded = ref(false)
let observer = null

const emit = defineEmits(['opened'])

const playMusic = () => {
  window.dispatchEvent(new Event('user-interact'))
}

const openInvitation = () => {
  if (animState.value !== 'closed') return

  playMusic()

  animState.value = 'opening'

  setTimeout(() => {
    animState.value = 'sliding'
  }, 250)

  setTimeout(() => {
    animState.value = 'centering'
  }, 950)

  setTimeout(() => {
    animState.value = 'unfolding'
  }, 2300)

  setTimeout(() => {
    isCardUnfolded.value = true
  }, 2500)

  setTimeout(() => {
    animState.value = 'opened'
    emit('opened')
  }, 4400)
}

const closeLetter = () => {
}

onMounted(() => {
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

.hero-stage {
  position: relative;
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2500px;
}

.envelope-back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  background: linear-gradient(135deg, #fbf7ee 0%, #f4e9db 50%, #ede0cd 100%);
  border-radius: 16px;
  border: 1.5px solid #d4af37;
  overflow: hidden;
  z-index: 5;
  box-shadow: 0 35px 80px rgba(74, 59, 47, 0.28), 0 12px 30px rgba(74, 59, 47, 0.15), inset 0 0 0 1px rgba(212, 175, 55, 0.4);
  transition: opacity 0.8s ease, transform 1.0s cubic-bezier(0.22, 1, 0.36, 1);
  user-select: none;
}

.envelope-back.centering,
.envelope-back.unfolding,
.envelope-back.opened {
  opacity: 0;
  pointer-events: none;
}

.envelope-inner-liner {
  position: absolute;
  inset: 10px;
  border-radius: 12px;
  background: radial-gradient(circle at center, #ffffff 0%, #faefe2 100%);
  border: 1px dashed rgba(200, 165, 92, 0.55);
  overflow: hidden;
}

.liner-pattern-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(200, 165, 92, 0.22) 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.75;
}

.envelope-flap-top {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  z-index: 40;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1500px;
  transition: opacity 0.8s ease;
  user-select: none;
}

.envelope-flap-top.flap-open {
  z-index: 4;
}

.envelope-flap-top.centering,
.envelope-flap-top.unfolding,
.envelope-flap-top.opened {
  opacity: 0;
  pointer-events: none;
}

.flap-triangle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 44%;
  background: linear-gradient(to bottom, #ffffff 0%, #fcf8f0 60%, #eee1cf 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 12px 28px rgba(74, 59, 47, 0.22);
  transform-origin: top center;
  transition: transform 0.85s cubic-bezier(0.33, 1, 0.68, 1);
  transform-style: preserve-3d;
}

.flap-v-gold-trim {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 50% 100%, 100% 0, calc(100% - 2.5px) 0, 50% calc(100% - 3.5px), 2.5px 0);
  background: linear-gradient(135deg, #d4af37 0%, #ffe699 50%, #b8860b 100%);
  filter: drop-shadow(0 2px 4px rgba(74, 59, 47, 0.15));
  pointer-events: none;
}

.flap-crest-ornament {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #c8a55c;
  letter-spacing: 5px;
  opacity: 0.85;
  pointer-events: none;
}

.envelope-flap-top.flap-open .flap-triangle {
  transform: rotateX(180deg);
}

.envelope-pocket {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  z-index: 30;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.8s ease, transform 1.0s cubic-bezier(0.22, 1, 0.36, 1);
}

.envelope-pocket.centering,
.envelope-pocket.unfolding,
.envelope-pocket.opened {
  opacity: 0;
  pointer-events: none;
}

.pocket-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #fdfaf4 0%, #f4e9db 60%, #ede0cd 100%);
  border-radius: 16px;
  border: 1.5px solid #d4af37;
  overflow: hidden;
}

.pocket-base-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(200, 165, 92, 0.16) 1px, transparent 1px);
  background-size: 18px 18px;
}

.pocket-left {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 52%;
  background: linear-gradient(135deg, #fefdfb 0%, #f5e8da 100%);
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  border-bottom-left-radius: 16px;
  filter: drop-shadow(3px 0 8px rgba(74, 59, 47, 0.1));
}

.pocket-right {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 52%;
  background: linear-gradient(225deg, #fefdfb 0%, #f5e8da 100%);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  border-bottom-right-radius: 16px;
  filter: drop-shadow(-3px 0 8px rgba(74, 59, 47, 0.1));
}

.pocket-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65%;
  background: linear-gradient(to top, #ebdccc 0%, #faf5ec 100%);
  clip-path: polygon(0 100%, 50% 15%, 100% 100%);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0 -5px 16px rgba(74, 59, 47, 0.14);
}

.pocket-v-trim {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48%;
  clip-path: polygon(0 0, 50% 92%, 100% 0, 100% 2.5px, 50% calc(92% + 2.5px), 0 2.5px);
  background: linear-gradient(90deg, #b8860b 0%, #ffd778 50%, #b8860b 100%);
  box-shadow: 0 2px 6px rgba(74, 59, 47, 0.12);
  pointer-events: none;
  z-index: 24;
}

.pocket-corner {
  position: absolute;
  bottom: 12px;
  font-size: 16px;
  color: #c8a55c;
  opacity: 0.85;
  pointer-events: none;
}

.pocket-corner.bl {
  left: 14px;
}

.pocket-corner.br {
  right: 14px;
}

.wax-seal {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #c73748 0%, #941b29 60%, #5e0e17 100%);
  box-shadow: 0 12px 32px rgba(148, 27, 41, 0.55), 0 4px 12px rgba(0, 0, 0, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.45), inset 0 -3px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 45;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: sealPulse 3.5s ease-in-out infinite;
}

.wax-seal.seal-broken {
  animation: none;
  transform: translate(-50%, -50%) scale(1.35);
  opacity: 0;
  filter: brightness(1.4) drop-shadow(0 0 22px rgba(255, 215, 0, 0.95));
}

.wax-seal-drip {
  position: absolute;
  inset: -4px;
  border-radius: 46% 54% 52% 48% / 48% 52% 48% 52%;
  border: 2px solid rgba(255, 215, 120, 0.65);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
}

.wax-seal-inner {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 220, 130, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.25) 0%, transparent 80%);
}

.wax-seal-symbol {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 700;
  color: #ffe082;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6), 0 0 14px rgba(255, 215, 0, 0.6);
}

.seal-tap-badge {
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  padding: 5px 16px;
  border-radius: 50px;
  border: 1px solid rgba(200, 165, 92, 0.6);
  box-shadow: 0 6px 18px rgba(74, 59, 47, 0.12);
  font-family: var(--font-serif);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: #851b27;
  font-weight: 700;
  text-transform: uppercase;
  animation: tapBadgeFloat 2.5s ease-in-out infinite;
}

.badge-spark {
  color: #c8a55c;
  font-size: 10px;
}

@keyframes sealPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 12px 32px rgba(148, 27, 41, 0.55), 0 4px 12px rgba(0, 0, 0, 0.28);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.04);
    box-shadow: 0 15px 38px rgba(148, 27, 41, 0.7), 0 0 22px rgba(255, 215, 0, 0.45);
  }
}

@keyframes tapBadgeFloat {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-3px);
  }
}

.invitation-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  perspective: 2500px;
  transform-style: preserve-3d;
  z-index: 15;
  transition: transform 1.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 1.35s ease;
  will-change: transform;
}

.invitation-card.sliding {
  transform: translate(-50%, calc(-50% - 190px)) scale(0.68);
  box-shadow: 0 35px 80px rgba(74, 59, 47, 0.32);
  z-index: 15;
  transition: transform 0.72s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.invitation-card.centering {
  transform: translate(-50%, -50%) scale(1);
  box-shadow: 0 30px 70px rgba(74, 59, 47, 0.22);
  z-index: 60;
  transition: transform 1.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.invitation-card.unfolding,
.invitation-card.opened {
  transform: translate(-50%, -50%) scale(1);
  z-index: 60;
}

.card-cover-unfold {
  position: absolute;
  inset: 0;
  z-index: 20;
  transform-origin: left center;
  transition: transform 2.0s cubic-bezier(0.25, 1, 0.35, 1), 
              opacity 1.4s ease 0.6s, 
              box-shadow 2.0s ease;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #fefdf9 0%, #f6ebe0 50%, #eee1cf 100%);
  box-shadow: 0 25px 60px rgba(74, 59, 47, 0.2), inset 0 0 0 1px rgba(200, 165, 92, 0.45);
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.cover-shimmer-beam {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.3) 50%, transparent 55%);
  transform: rotate(25deg);
  pointer-events: none;
  animation: shimmerPass 6s ease-in-out infinite;
}

@keyframes shimmerPass {
  0%, 100% {
    transform: rotate(25deg) translateY(-80%);
    opacity: 0;
  }
  30%, 60% {
    transform: rotate(25deg) translateY(80%);
    opacity: 1;
  }
}

.card-cover-unfold.unfolded {
  transform: rotateY(-135deg) scale(0.98);
  opacity: 0;
  pointer-events: none;
}

.cover-frame-outer {
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 2px solid #d4af37;
  box-sizing: border-box;
}

.cover-frame-inner {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(200, 165, 92, 0.65);
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
  color: #d4af37;
  font-size: 15px;
  opacity: 0.85;
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

.cover-monogram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 6px;
}

.mono-char {
  font-family: var(--font-script);
  font-size: 38px;
  color: #b38b4d;
  font-weight: 600;
  line-height: 1;
}

.mono-symbol {
  font-size: 15px;
  color: #8f2e36;
}

.cover-tagline {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 5px;
  font-weight: 600;
  color: #b38b4d;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.couple-names-wrap {
  margin: 4px 0 12px;
}

.groom-name, .bride-name {
  font-family: var(--font-script);
  font-size: 48px;
  background: linear-gradient(135deg, #8f2e36 0%, #b53847 60%, #8f2e36 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

.heart-icon {
  color: #8f2e36;
  font-size: 16px;
}

.wedding-date-tag {
  background: rgba(200, 165, 92, 0.12);
  border: 1px solid rgba(200, 165, 92, 0.4);
  padding: 4px 18px;
  border-radius: 50px;
  margin-bottom: 8px;
}

.date-text {
  font-family: var(--font-serif);
  font-size: 15px;
  letter-spacing: 2.5px;
  color: #8f7a60;
  font-weight: 600;
}

.save-the-date {
  font-size: 10px;
  letter-spacing: 4px;
  color: #b38b4d;
  font-weight: 600;
  text-transform: uppercase;
}

.card-book {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #fdfaf6;
  box-shadow: 0 30px 70px rgba(74, 59, 47, 0.18);
  opacity: 0;
  transform: scale(0.96);
  pointer-events: none;
  transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, 
              transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.invitation-card.is-opened .card-book {
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

  .hero-stage {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
  }

  .envelope-back,
  .envelope-pocket,
  .envelope-flap-top {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }

  .invitation-card {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }

  .invitation-card.sliding {
    transform: translate(-50%, calc(-50% - 160px)) scale(0.68);
  }

  .invitation-card.centering,
  .invitation-card.unfolding,
  .invitation-card.opened {
    transform: translate(-50%, -50%) scale(1);
  }

  .card-cover-unfold.unfolded {
    transform: rotateY(-110deg) scale(0.92);
  }

  .card-book {
    position: absolute;
    inset: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .book-pages-wrapper {
    flex-direction: column;
    min-height: 100%;
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
    font-size: 38px;
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

  .hero-stage {
    width: 100%;
    max-width: 390px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 480px;
  }

  .envelope-back,
  .envelope-pocket,
  .envelope-flap-top {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.58);
  }

  .invitation-card {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.58);
  }

  .invitation-card.sliding {
    transform: translate(-50%, calc(-50% - 130px)) scale(0.58);
  }

  .invitation-card.centering,
  .invitation-card.unfolding,
  .invitation-card.opened {
    transform: translate(-50%, -50%) scale(1);
  }

  .cover-frame-outer {
    padding: 6px;
  }

  .cover-frame-inner {
    padding: 16px 12px;
  }

  .groom-name, .bride-name {
    font-size: 28px;
    line-height: 1.15;
  }

  .cover-tagline {
    font-size: 9.5px;
    letter-spacing: 3px;
    margin-bottom: 8px;
  }

  .seal-tap-badge {
    padding: 3px 12px;
    font-size: 9.5px;
  }

  .mono-char {
    font-size: 28px;
  }

  .wax-seal {
    width: 52px;
    height: 52px;
  }

  .wax-seal-inner {
    width: 38px;
    height: 38px;
  }

  .wax-seal-symbol {
    font-size: 22px;
  }

  .open-hint-btn {
    margin-top: 8px;
    padding: 6px 16px;
    font-size: 12px;
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