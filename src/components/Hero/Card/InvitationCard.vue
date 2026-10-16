<template>
  <div
    class="invitation-card"
    :class="[
      animState,
      {
        'is-opened': isUnfolded
      }
    ]"
    @click.stop="handleClick"
  >
    <CardCover :is-unfolded="isUnfolded" />
    <CardBook :is-opened="isUnfolded" />
  </div>
</template>

<script setup>
import CardCover from './CardCover.vue'
import CardBook from './CardBook.vue'

const props = defineProps({
  animState: {
    type: String,
    required: true
  },
  isUnfolded: {
    type: Boolean,
    default: false
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

@media (max-width: 992px) {
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
}

@media (max-width: 576px) {
  .invitation-card {
    width: 100%;
    max-width: 360px;
    height: min(560px, calc(100dvh - 24px));
    min-height: 440px;
    transform: translate(-50%, -50%) scale(0.85);
  }

  .invitation-card.sliding {
    transform: translate(-50%, calc(-50% - 130px)) scale(0.85);
  }

  .invitation-card.centering,
  .invitation-card.unfolding,
  .invitation-card.opened {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
