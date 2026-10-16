<template>
  <section
    ref="heroRef"
    class="hero-container"
    @click="closeLetter"
  >
    <div class="hero-stage" :class="{ 'is-opened-stage': animState === 'opened' }">
      <EnvelopeBack :anim-state="animState" />
      <EnvelopeFlap :anim-state="animState" @open="openInvitation" />
      <InvitationCard
        :anim-state="animState"
        :is-unfolded="isCardUnfolded"
        @open="openInvitation"
      />
      <EnvelopePocket :anim-state="animState" @open="openInvitation" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EnvelopeBack from './Envelope/EnvelopeBack.vue'
import EnvelopeFlap from './Envelope/EnvelopeFlap.vue'
import EnvelopePocket from './Envelope/EnvelopePocket.vue'
import InvitationCard from './Card/InvitationCard.vue'

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

const closeLetter = () => {}

onMounted(() => {})

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
}
</style>