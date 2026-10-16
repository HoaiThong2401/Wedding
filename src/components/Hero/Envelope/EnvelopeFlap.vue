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
      <div class="flap-v-gold-trim"></div>
      <div class="flap-crest-ornament">✦ ❦ ✦</div>
    </div>

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

@media (max-width: 992px) {
  .envelope-flap-top {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }
}

@media (max-width: 576px) {
  .envelope-flap-top {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.58);
  }

  .seal-tap-badge {
    padding: 3px 12px;
    font-size: 9.5px;
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
}
</style>
