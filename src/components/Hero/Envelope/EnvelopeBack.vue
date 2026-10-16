<template>
  <div
    v-if="animState !== 'opened' && animState !== 'unfolding'"
    class="envelope-back"
    :class="animState"
  >
    <div class="envelope-inner-liner">
      <div class="liner-pattern-bg"></div>
      <div class="liner-frame-border">
        <span class="liner-corner tl">✦</span>
        <span class="liner-corner tr">✦</span>
        <span class="liner-corner bl">✦</span>
        <span class="liner-corner br">✦</span>
        <div class="liner-center-watermark">
          <span class="watermark-symbol">囍</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  animState: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.envelope-back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  width: 960px;
  max-width: 92vw;
  height: min(600px, calc(100dvh - 40px));
  min-height: 520px;
  background: radial-gradient(circle at 50% 30%, #8f232e 0%, #761a23 55%, #4e0f16 100%);
  border-radius: 18px;
  border: 2px solid #d4af37;
  overflow: hidden;
  z-index: 5;
  box-shadow: 
    0 40px 90px rgba(50, 10, 18, 0.42),
    0 15px 35px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1.5px rgba(255, 230, 150, 0.45),
    inset 0 2px 10px rgba(255, 255, 255, 0.15);
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
  inset: 12px;
  border-radius: 14px;
  background: radial-gradient(circle at center, #fffdf8 0%, #fbf3e4 60%, #f4e3c7 100%);
  border: 1.5px solid rgba(212, 175, 55, 0.65);
  overflow: hidden;
  box-shadow: inset 0 0 25px rgba(184, 134, 11, 0.12);
}

.liner-pattern-bg {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='%23c8a55c' stroke-width='0.8' stroke-opacity='0.3'%3E%3Cpath d='M24 0 L48 24 L24 48 L0 24 Z'/%3E%3Ccircle cx='24' cy='24' r='6'/%3E%3Cpath d='M24 6 C24 14 34 24 42 24'/%3E%3Cpath d='M24 6 C24 14 14 24 6 24'/%3E%3Cpath d='M24 42 C24 34 34 24 42 24'/%3E%3Cpath d='M24 42 C24 34 14 24 6 24'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 36px 36px;
  opacity: 0.85;
}

.liner-frame-border {
  position: absolute;
  inset: 8px;
  border: 1px dashed rgba(200, 165, 92, 0.45);
  pointer-events: none;
}

.liner-corner {
  position: absolute;
  color: #c8a55c;
  font-size: 14px;
  line-height: 1;
  opacity: 0.8;
}
.liner-corner.tl { top: 6px; left: 6px; }
.liner-corner.tr { top: 6px; right: 6px; }
.liner-corner.bl { bottom: 6px; left: 6px; }
.liner-corner.br { bottom: 6px; right: 6px; }

.liner-center-watermark {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.watermark-symbol {
  font-family: var(--font-serif);
  font-size: 64px;
  color: rgba(200, 165, 92, 0.18);
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

@media (max-width: 992px) {
  .envelope-back {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }
}

@media (max-width: 576px) {
  .envelope-back {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.85);
  }

  .envelope-inner-liner {
    inset: 8px;
  }
}
</style>
