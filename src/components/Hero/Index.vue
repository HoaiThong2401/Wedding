<template>
  <section class="hero">

    <div class="card" :class="{ fly: isOpen, open: isOpen }" @click="openLetter">

      <!-- COVER -->
      <div class="cover">
        <div class="cover-card">

          <p class="cover-title">WEDDING INVITATION</p>

          <div class="divider"></div>

          <div class="cover-preview">
            <p> Lê Hoàng Thiện</p>
            💍
            <p> Phan Linh</p>
          </div>

          <div class="divider"></div>

          <p class="hint" v-if="!isOpen">Click để mở thiệp</p>

        </div>
      </div>

      <!-- BOOK -->
      <div class="book">
        <HeroSection />
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'

const isOpen = ref(false)

const openLetter = () => {
  if (isOpen.value) return
  isOpen.value = true
}
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  background: #f6f1ea;
}

/* CARD */
.card {
  width: 900px;
  height: 600px;
  position: relative;
  cursor: pointer;

  transform-style: preserve-3d;
  transition: 1.2s ease;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.15);
}

/* lift effect */
.card.fly {
  transform: translateY(-40px);
}

/* COVER */
.cover {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #fffaf3, #ffffff);
  transition: 0.8s ease;
}

.cover-card {
  width: 55%;
  padding: 40px;
  text-align: center;

  border: 1px solid rgba(74, 59, 47, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
}

.cover-title {
  font-size: 14px;
  letter-spacing: 3px;
  color: #4a3b2f;
}

.cover-preview {
  margin: 20px 0;
  font-size: 16px;
  color: #4a3b2f;
  line-height: 1.8;
}

.divider {
  width: 60px;
  height: 1px;
  background: #4a3b2f;
  opacity: 0.3;
  margin: 12px auto;
}

.hint {
  font-size: 12px;
  opacity: 0.6;
}

/* OPEN COVER ANIMATION */
.card.open .cover {
  opacity: 0;
  transform: rotateY(-120deg);
  pointer-events: none;
}

/* BOOK */
.book {
  position: absolute;
  inset: 0;

  opacity: 0;
  transform: scale(0.98);
  transition: 1s ease;
}

/* show book */
.card.open .book {
  opacity: 1;
  transform: scale(1);
}
</style>