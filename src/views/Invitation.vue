<template>
  <HeroSection @opened="unlockPage" />

  <template v-if="pageUnlocked">
    <CountdownSection />
    <CoupleSection />
    <StorySection />
    <GallerySection />
    <EventSection />
    <!-- <GiftSection /> -->
    <FooterSection />
  </template>
  <RSVPSection />
  <MusicPlayer />
</template>

<script setup>
import { ref, watch } from 'vue'

import HeroSection from '@/components/Hero/Index.vue'
import CountdownSection from '@/components/Countdown/CountdownSection.vue'
import CoupleSection from '@/components/Couple/CoupleSection.vue'
import StorySection from '@/components/Story/StorySection.vue'
import GallerySection from '@/components/Gallery/GallerySection.vue'
import EventSection from '@/components/Event/Index.vue'
import GiftSection from '@/components/Gift/GiftSection.vue'
import RSVPSection from '@/components/RSVP/RSVPSection.vue'
import FooterSection from '@/components/Footer/FooterSection.vue'
import MusicPlayer from '@/components/Music/MusicPlayer.vue'

const pageUnlocked = ref(false)

const unlockPage = () => {
  pageUnlocked.value = true
}

watch(pageUnlocked, value => {
  document.body.style.overflow = value ? 'auto' : 'hidden'
})

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>