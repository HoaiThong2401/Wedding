<template>
  <div
    class="card-cover-unfold"
    :class="{ 'unfolded': isUnfolded }"
  >
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
</template>

<script setup>
defineProps({
  isUnfolded: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
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

@media (max-width: 992px) {
  .card-cover-unfold.unfolded {
    transform: rotateY(-110deg) scale(0.92);
  }

  .groom-name, .bride-name {
    font-size: 38px;
  }
}

@media (max-width: 576px) {
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

  .mono-char {
    font-size: 28px;
  }
}
</style>
