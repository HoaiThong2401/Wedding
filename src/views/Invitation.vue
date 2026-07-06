<template>
  <HeroSection @opened="unlockPage" />

  <template v-if="pageUnlocked">
    <CountdownSection id="countdown" />
    <CoupleSection id="couple" />
    <StorySection id="story" />
    <GallerySection id="gallery" />
    <EventSection id="event" />
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
import RSVPSection from '@/components/RSVP/RSVPSection.vue'
import FooterSection from '@/components/Footer/FooterSection.vue'
import MusicPlayer from '@/components/Music/MusicPlayer.vue'

import QuickNav from '@/components/Navigation/QuickNav.vue' 

const pageUnlocked = ref(false)

const unlockPage = () => {
  pageUnlocked.value = true
}

watch(pageUnlocked, value => {
  document.body.style.overflow = value ? 'auto' : 'hidden'
})

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>