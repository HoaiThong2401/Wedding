<template>
  <div class="card-book" :class="{ 'is-opened': isOpened }">
    <div class="book-spine-shadow"></div>

    <div class="book-pages-wrapper">
      <CardPageLeft />
      <CardPageRight />
    </div>
  </div>
</template>

<script setup>
import CardPageLeft from './CardPageLeft.vue'
import CardPageRight from './CardPageRight.vue'

defineProps({
  isOpened: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.card-book {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #fdfaf6;
  box-shadow: 0 30px 70px rgba(74, 59, 47, 0.18);
  opacity: 0;
  transform: scale(0.96);
  pointer-events: none;
  transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, 
              transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.card-book.is-opened {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.book-spine-shadow {
  position: absolute;
  left: 50%;
  top: 1%;
  bottom: 1%;
  width: 24px;
  transform: translateX(-50%);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.08));
  border-radius: 30px;
  z-index: 10;
}

.book-pages-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  .card-book {
    position: absolute;
    inset: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .book-pages-wrapper {
    flex-direction: column;
    min-height: 100%;
  }

  .book-spine-shadow {
    display: none;
  }
}
</style>
