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

    <!-- 3 Symmetrical Pocket Triangles (Left, Right, Bottom) converging to center -->
    <div class="pocket-left"></div>
    <div class="pocket-right"></div>
    <div class="pocket-bottom"></div>
    <div class="pocket-bottom-trim"></div>

    <!-- Ornate Gold Foil Corners -->
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
  background: radial-gradient(circle at 50% 80%, #8c202d 0%, #751923 60%, #4f0e16 100%);
  border-radius: 18px;
  border: 2px solid #d4af37;
  overflow: hidden;
  box-shadow: 
    inset 0 0 50px rgba(0, 0, 0, 0.45),
    0 35px 80px rgba(50, 10, 18, 0.4);
}

.pocket-base-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(212, 175, 55, 0.14) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.8;
}

/* Symmetrical Envelope Folds radiating from the 4 corners to the center */
.pocket-left {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #9b2836 0%, #851e29 100%);
  clip-path: polygon(0 0, 0 100%, 52% 48%);
  border-bottom-left-radius: 18px;
  border-top-left-radius: 18px;
  filter: drop-shadow(3px 2px 8px rgba(0, 0, 0, 0.28));
}

.pocket-right {
  position: absolute;
  inset: 0;
  background: linear-gradient(225deg, #9b2836 0%, #851e29 100%);
  clip-path: polygon(100% 0, 100% 100%, 48% 48%);
  border-bottom-right-radius: 18px;
  border-top-right-radius: 18px;
  filter: drop-shadow(-3px 2px 8px rgba(0, 0, 0, 0.28));
}

.pocket-bottom {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #7d1a25 0%, #8c202d 55%, #9b2836 100%);
  clip-path: polygon(0 100%, 100% 100%, 50% 47%);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  filter: drop-shadow(0 -4px 10px rgba(0, 0, 0, 0.3));
}

.pocket-bottom-trim {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 100%, 50% 47%, 100% 100%, 100% calc(100% - 2px), 50% calc(47% + 2px), 0 calc(100% - 2px));
  background: linear-gradient(90deg, transparent 5%, #dfba73 30%, #fff3b3 50%, #dfba73 70%, transparent 95%);
  pointer-events: none;
  z-index: 24;
}

/* Corner Ornaments */
.pocket-corner {
  position: absolute;
  bottom: 14px;
  font-size: 20px;
  color: #dfba73;
  opacity: 0.85;
  pointer-events: none;
  z-index: 25;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.pocket-corner.bl {
  left: 18px;
}

.pocket-corner.br {
  right: 18px;
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
    transform: translate(-50%, -50%) scale(0.85);
  }

  .pocket-corner {
    bottom: 12px;
    font-size: 18px;
  }
  .pocket-corner.bl { left: 14px; }
  .pocket-corner.br { right: 14px; }
}
</style>
