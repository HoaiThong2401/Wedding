<template>
  <div
    v-if="animState !== 'opened' && animState !== 'unfolding'"
    class="envelope-pocket"
    :class="animState"
    @click.stop="handleClick"
  >
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

@media (max-width: 992px) {
  .envelope-pocket {
    width: 100%;
    max-width: 480px;
    height: min(640px, calc(100dvh - 40px));
    min-height: 520px;
    transform: translate(-50%, -50%) scale(0.68);
  }
}

@media (max-width: 576px) {
  .envelope-pocket {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.58);
  }
}
</style>
