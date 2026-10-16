<template>
  <div
    v-if="animState !== 'opened' && animState !== 'unfolding'"
    class="envelope-flap-top"
    :class="[
      animState,
      { 'flap-open': animState !== 'closed' }
    ]"
    @click.stop="handleClick"
  >
    <div class="flap-triangle">
      <div class="flap-inner-trim"></div>
      <div class="flap-v-gold-trim"></div>
      
      <!-- Gold Foil Stamped Wedding Crest & Names at the Top -->
      <div class="flap-crest-wrap">
        <div class="flap-gold-accent">
          <span class="accent-line"></span>
          <span class="accent-heart">❦</span>
          <span class="accent-line"></span>
        </div>
        <div class="flap-invitation-title">WEDDING INVITATION</div>
        <div class="flap-couple-names">Hoàng Thiện <span>❦</span> Thị Linh</div>
        <div class="flap-wedding-date">✦ 06 . 01 . 2027 ✦</div>
      </div>
    </div>

    <!-- Gold Satin Ribbon Tails beneath Wax Seal -->
    <div
      class="wax-seal-ribbons"
      :class="{ 'ribbon-hidden': animState !== 'closed' }"
    >
      <div class="ribbon-tail left"></div>
      <div class="ribbon-tail right"></div>
    </div>

    <!-- Royal Wax Seal -->
    <div
      class="wax-seal"
      :class="{ 'seal-broken': animState !== 'closed' }"
    >
      <div class="wax-seal-drip"></div>
      <div class="wax-seal-inner">
        <span class="wax-seal-symbol">囍</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  animState: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['open'])

const handleClick = () => {
  if (props.animState === 'closed') {
    emit('open')
  }
}
</script>

<style scoped>
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
  height: 48%;
  background: linear-gradient(175deg, #8c202d 0%, #791924 50%, #61111a 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  box-shadow: 0 16px 36px rgba(45, 9, 15, 0.45);
  transform-origin: top center;
  transition: transform 0.85s cubic-bezier(0.33, 1, 0.68, 1);
  transform-style: preserve-3d;
}

.envelope-flap-top.flap-open .flap-triangle {
  transform: rotateX(180deg);
}

.flap-v-gold-trim {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 50% 100%, 100% 0, calc(100% - 3px) 0, 50% calc(100% - 4.5px), 3px 0);
  background: linear-gradient(135deg, #dfba73 0%, #fff3b3 35%, #d4af37 65%, #996515 100%);
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.35));
  pointer-events: none;
}

.flap-inner-trim {
  position: absolute;
  top: 6px;
  left: 14px;
  right: 14px;
  height: calc(100% - 14px);
  clip-path: polygon(0 0, 50% 100%, 100% 0, calc(100% - 1.5px) 0, 50% calc(100% - 2.5px), 1.5px 0);
  background: linear-gradient(135deg, rgba(223, 186, 115, 0.5) 0%, rgba(255, 230, 150, 0.7) 50%, rgba(200, 165, 92, 0.4) 100%);
  pointer-events: none;
}

/* Stamped Wedding Crest & Names at the Top */
.flap-crest-wrap {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  max-width: 520px;
  pointer-events: none;
  z-index: 10;
}

.flap-gold-accent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 2px;
}

.accent-line {
  height: 1px;
  flex: 1;
  max-width: 60px;
  background: linear-gradient(90deg, transparent, #dfba73, transparent);
}

.accent-heart {
  color: #dfba73;
  font-size: 13px;
  text-shadow: 0 0 6px rgba(255, 215, 0, 0.4);
}

.flap-invitation-title {
  font-family: var(--font-serif);
  font-size: 16px;
  letter-spacing: 4px;
  font-weight: 700;
  color: #f7e0a3;
  text-transform: uppercase;
  margin-bottom: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

.flap-couple-names {
  font-family: var(--font-script);
  font-size: 36px;
  line-height: 1.15;
  background: linear-gradient(135deg, #ffffff 0%, #fff0b3 40%, #dfba73 80%, #b8860b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
  margin-bottom: 3px;
}

.flap-couple-names span {
  font-size: 18px;
  margin: 0 4px;
  color: #dfba73;
  -webkit-text-fill-color: initial;
}

.flap-wedding-date {
  font-family: var(--font-serif);
  font-size: 12px;
  letter-spacing: 2.5px;
  color: #f7e0a3;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  padding: 3px 14px;
  background: rgba(223, 186, 115, 0.12);
  border: 1px solid rgba(223, 186, 115, 0.35);
  border-radius: 20px;
  display: inline-block;
}

/* Gold Satin Ribbon Tails */
.wax-seal-ribbons {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -10px);
  width: 50px;
  height: 56px;
  z-index: 42;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.wax-seal-ribbons.ribbon-hidden {
  opacity: 0;
  transform: translate(-50%, -10px) scale(0.6);
}

.ribbon-tail {
  position: absolute;
  top: 0;
  width: 16px;
  height: 48px;
  background: linear-gradient(180deg, #dfba73 0%, #ffd778 30%, #c8a55c 70%, #996515 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.ribbon-tail.left {
  left: 8px;
  transform: rotate(-14deg);
  transform-origin: top center;
}

.ribbon-tail.right {
  right: 8px;
  transform: rotate(14deg);
  transform-origin: top center;
}

/* Royal Wax Seal */
.wax-seal {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 74px;
  height: 74px;
  border-radius: 47% 53% 50% 50% / 52% 48% 52% 48%;
  background: radial-gradient(circle at 35% 30%, #e63946 0%, #ad1d2e 45%, #700f1c 85%, #46060e 100%);
  box-shadow: 
    0 14px 35px rgba(168, 28, 45, 0.65), 
    0 4px 15px rgba(0, 0, 0, 0.45), 
    inset 0 2.5px 5px rgba(255, 255, 255, 0.55), 
    inset 0 -3.5px 7px rgba(0, 0, 0, 0.55);
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
  filter: brightness(1.4) drop-shadow(0 0 25px rgba(255, 215, 0, 0.95));
}

.wax-seal-drip {
  position: absolute;
  inset: -4px;
  border-radius: 46% 54% 52% 48% / 48% 52% 48% 52%;
  border: 2px solid rgba(255, 225, 140, 0.7);
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
}

.wax-seal-inner {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 235, 160, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.3) 0%, transparent 80%);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
}

.wax-seal-symbol {
  font-family: var(--font-serif);
  font-size: 34px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #ffe699 40%, #dfba73 80%, #b8860b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.75));
}

@keyframes sealPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 14px 35px rgba(168, 28, 45, 0.65), 0 4px 15px rgba(0, 0, 0, 0.45);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.04);
    box-shadow: 0 16px 42px rgba(168, 28, 45, 0.8), 0 0 25px rgba(255, 215, 0, 0.55);
  }
}

@media (max-width: 992px) {
  .envelope-flap-top {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }

  .flap-invitation-title {
    font-size: 13.5px;
    letter-spacing: 3.5px;
  }

  .flap-couple-names {
    font-size: 32px;
  }
}

@media (max-width: 576px) {
  .envelope-flap-top {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.85);
  }

  .flap-crest-wrap {
    top: 14px;
    width: 90%;
    max-width: 310px;
  }

  .flap-gold-accent {
    margin-bottom: 2px;
  }

  .accent-line {
    max-width: 32px;
  }

  .flap-invitation-title {
    font-size: 11px;
    letter-spacing: 2.8px;
    margin-bottom: 2px;
  }

  .flap-couple-names {
    font-size: 26px;
    line-height: 1.25;
    margin-bottom: 4px;
    white-space: nowrap;
  }

  .flap-couple-names span {
    font-size: 14px;
  }

  .flap-wedding-date {
    font-size: 10.5px;
    letter-spacing: 1.8px;
    padding: 2px 10px;
  }

  .wax-seal {
    width: 62px;
    height: 62px;
  }

  .wax-seal-inner {
    width: 44px;
    height: 44px;
  }

  .wax-seal-symbol {
    font-size: 26px;
  }

  .wax-seal-ribbons {
    height: 46px;
  }

  .ribbon-tail {
    width: 14px;
    height: 40px;
  }
}
</style>
