<template>
  <!-- HIỆU ỨNG CÁNH HOA RƠI LÃNG MẠN (CANVAS FALLING PETALS) -->
  <canvas ref="petalsCanvas" class="falling-petals-canvas" aria-hidden="true"></canvas>

  <!-- BÌA MỞ THIỆP (HERO INVITATION) -->
  <HeroSection @opened="unlockPage" />

  <!-- CÁC PHẦN NỘI DUNG SAU KHI MỞ THIỆP -->
  <template v-if="pageUnlocked">
    <CountdownSection id="countdown" />
    <CoupleSection id="couple" />
    <StorySection id="story" />
    <GallerySection id="gallery" />
    <!-- <EventSection id="event" /> -->
    <FooterSection id="footer" />

    <QuickNav />
  </template>

  <RSVPSection />
  <MusicPlayer />
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

import HeroSection from '@/components/Hero/Index.vue'
import CountdownSection from '@/components/Countdown/CountdownSection.vue'
import CoupleSection from '@/components/Couple/CoupleSection.vue'
import StorySection from '@/components/Story/StorySection.vue'
import GallerySection from '@/components/Gallery/GallerySection.vue'
import EventSection from '@/components/Event/Index.vue'
import FooterSection from '@/components/Footer/FooterSection.vue'
import RSVPSection from '@/components/RSVP/RSVPSection.vue'
import MusicPlayer from '@/components/Music/MusicPlayer.vue'
import QuickNav from '@/components/Navigation/QuickNav.vue'

const pageUnlocked = ref(false)
const petalsCanvas = ref(null)
let animationFrameId = null

const unlockPage = () => {
  pageUnlocked.value = true
}

watch(pageUnlocked, value => {
  document.body.style.overflow = value ? 'auto' : 'hidden'
})

// HIỆU ỨNG CÁNH HOA RƠI NHẸ NHÀNG (FALLING ROSE PETALS)
const initPetalsEffect = () => {
  const canvas = petalsCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  const handleResize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', handleResize)

  const petalCount = window.innerWidth < 768 ? 15 : 28
  const petals = []

  class Petal {
    constructor() {
      this.reset(true)
    }

    reset(initial = false) {
      this.x = Math.random() * width
      this.y = initial ? Math.random() * height : -20
      this.size = 8 + Math.random() * 10
      this.speedY = 0.8 + Math.random() * 1.2
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8
      this.rotation = Math.random() * 360
      this.rotSpeed = (Math.random() - 0.5) * 1.5
      this.opacity = 0.35 + Math.random() * 0.35
      this.color = Math.random() > 0.3 ? '#f3c5c9' : '#dfba73' // Cánh hồng phớt & cánh vàng kim
    }

    update() {
      this.y += this.speedY
      this.x += Math.sin(this.y * 0.01) * 0.6 + this.speedX * 0.3
      this.rotation += this.rotSpeed

      if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
        this.reset()
      }
    }

    draw() {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate((this.rotation * Math.PI) / 180)
      ctx.globalAlpha = this.opacity
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.ellipse(0, 0, this.size, this.size * 0.6, Math.PI / 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  for (let i = 0; i < petalCount; i++) {
    petals.push(new Petal())
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)
    for (const p of petals) {
      p.update()
      p.draw()
    }
    animationFrameId = requestAnimationFrame(render)
  }

  render()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  initPetalsEffect()
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.falling-petals-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 98;
}
</style>