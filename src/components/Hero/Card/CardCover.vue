<template>
  <div
    class="card-cover-unfold"
    :class="{ 'unfolded': isUnfolded }"
  >
    <div class="cover-shimmer-beam"></div>

    <div class="cover-frame-outer">
      <div class="cover-frame-inner">
        <!-- Gold Oriental Fretwork Corners -->
        <div class="cover-fret tl">
          <svg viewBox="0 0 45 45" fill="none" stroke="#dfba73">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.3" />
          </svg>
        </div>
        <div class="cover-fret tr">
          <svg viewBox="0 0 45 45" fill="none" stroke="#dfba73">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.3" />
          </svg>
        </div>
        <div class="cover-fret bl">
          <svg viewBox="0 0 45 45" fill="none" stroke="#dfba73">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.3" />
          </svg>
        </div>
        <div class="cover-fret br">
          <svg viewBox="0 0 45 45" fill="none" stroke="#dfba73">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.3" />
          </svg>
        </div>

        <!-- Cherry Blossoms at Top-Left & Bottom-Right (as in reference image) -->
        <img
          src="/images/cherry-blossom-cluster.png"
          alt="Hoa đào"
          class="cover-blossom-deco tl"
        />
        <img
          src="/images/cherry-blossom-cluster.png"
          alt="Hoa đào"
          class="cover-blossom-deco br"
        />

        <div class="cover-content">
          <div class="cover-symbol-happiness">
            <span class="symbol-gold-text">囍</span>
          </div>

          <div class="cover-names-wrap">
            <h1 class="cover-couple-names">Hoàng Thiện <span>&</span> Phan Linh</h1>
          </div>

          <div class="cover-tagline-wrap">
            <span class="cover-tagline">THIỆP MỜI</span>
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
  background: radial-gradient(circle at 50% 40%, #8c1a24 0%, #76121a 65%, #4f080e 100%);
  box-shadow: 0 30px 70px rgba(50, 10, 18, 0.4), inset 0 0 0 1.5px rgba(223, 186, 115, 0.6);
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.cover-shimmer-beam {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 45%, rgba(255, 230, 160, 0.2) 50%, transparent 55%);
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
  padding: 10px;
  box-sizing: border-box;
}

.cover-frame-inner {
  width: 100%;
  height: 100%;
  border: 1.5px solid rgba(223, 186, 115, 0.85);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #8a1923 0%, #731219 70%, #50080e 100%);
  padding: 20px 24px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.5);
}

/* Fret Corners */
.cover-fret {
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
  z-index: 5;
}

.cover-fret.tl { top: 8px; left: 8px; }
.cover-fret.tr { top: 8px; right: 8px; transform: scaleX(-1); }
.cover-fret.bl { bottom: 8px; left: 8px; transform: scaleY(-1); }
.cover-fret.br { bottom: 8px; right: 8px; transform: scale(-1); }

/* Cherry Blossoms */
.cover-blossom-deco {
  position: absolute;
  pointer-events: none;
  z-index: 4;
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.4));
  opacity: 0.95;
}

.cover-blossom-deco.tl {
  top: -15px;
  left: -15px;
  transform: rotate(-10deg);
}

.cover-blossom-deco.br {
  bottom: -20px;
  right: -20px;
  transform: rotate(170deg) scale(1.15);
}

/* Cover Content */
.cover-content {
  text-align: center;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 6;
}

/* Gold 囍 Symbol */
.cover-symbol-happiness {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.symbol-gold-text {
  font-family: var(--font-serif);
  font-size: 46px;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, #ffffff 0%, #ffe699 30%, #dfba73 70%, #b8860b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.7));
}

/* Couple Names */
.cover-names-wrap {
  margin: 4px 0 8px;
}

.cover-couple-names {
  font-family: var(--font-script);
  font-size: 48px;
  background: linear-gradient(135deg, #ffffff 0%, #fff5cc 35%, #f7e0a3 70%, #dfba73 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8));
}

.cover-couple-names span {
  font-size: 34px;
  color: #dfba73;
  margin: 0 4px;
}

/* THIỆP MỜI */
.cover-tagline-wrap {
  margin-bottom: 12px;
}

.cover-tagline {
  font-family: var(--font-serif);
  font-size: 14px;
  letter-spacing: 5px;
  font-weight: 700;
  color: #dfba73;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(223, 186, 115, 0.6);
  padding-bottom: 3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

/* Guest Label Box (As in reference image) */
.cover-guest-label-box {
  background: #fdfaf4;
  border: 1.5px solid #d4af37;
  border-radius: 4px;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
  margin-bottom: 12px;
  min-width: 220px;
}

.guest-prefix {
  font-family: var(--font-serif);
  font-size: 11px;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: #8c1822;
}

.guest-dots {
  font-family: var(--font-serif);
  font-size: 12px;
  color: #554433;
  font-style: italic;
}

/* Date Tag */
.wedding-date-tag {
  background: rgba(223, 186, 115, 0.15);
  border: 1px solid rgba(223, 186, 115, 0.45);
  padding: 4px 18px;
  border-radius: 50px;
  margin-bottom: 6px;
}

.date-text {
  font-family: var(--font-serif);
  font-size: 14px;
  letter-spacing: 3px;
  color: #ffe699;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.save-the-date {
  font-size: 10px;
  letter-spacing: 4px;
  color: #dfba73;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

@media (max-width: 992px) {
  .card-cover-unfold.unfolded {
    transform: rotateY(-110deg) scale(0.92);
  }

  .cover-couple-names {
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

  .symbol-gold-text {
    font-size: 34px;
  }

  .cover-couple-names {
    font-size: 30px;
  }

  .cover-tagline {
    font-size: 11.5px;
    letter-spacing: 3px;
  }

  .cover-guest-label-box {
    padding: 4px 14px;
    min-width: 180px;
    margin-bottom: 8px;
  }

  .cover-blossom-deco {
    width: 100px;
    height: 100px;
  }
}
</style>
