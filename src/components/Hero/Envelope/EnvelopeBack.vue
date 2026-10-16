<template>
  <div
    v-if="animState !== 'opened' && animState !== 'unfolding'"
    class="envelope-back"
    :class="animState"
  >
    <div class="envelope-inner-liner">
      <div class="liner-pattern-bg"></div>
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
    transform: translate(-50%, -50%) scale(0.58);
  }
}
</style>
