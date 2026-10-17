<template>
  <div class="card-book" :class="{ 'is-opened': isOpened }">
    <!-- 3D central spine fold shadow (desktop only) -->
    <div class="book-spine-shadow"></div>

    <div class="book-pages-wrapper">
      <CardPageLeft class="book-page-left-fold" />
      <CardPageRight class="book-page-right-fold" />
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
  background: #781018;
  box-shadow: 0 35px 80px rgba(50, 10, 18, 0.35);
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

.book-pages-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.book-page-left-fold {
  flex: 1;
  height: 100%;
}

.book-page-right-fold {
  flex: 1;
  height: 100%;
}

/* 3D central spine fold shadow */
.book-spine-shadow {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 28px;
  transform: translateX(-50%);
  background: linear-gradient(
    to right, 
    rgba(35, 5, 10, 0.28) 0%, 
    rgba(255, 235, 180, 0.45) 48%, 
    rgba(255, 255, 255, 0.6) 50%, 
    rgba(255, 235, 180, 0.45) 52%, 
    rgba(35, 5, 10, 0.28) 100%
  );
  z-index: 15;
  pointer-events: none;
}

/* Responsive: Mobile & Tablet */
@media (max-width: 992px) {
  .card-book {
    overflow: hidden;
  }

  .book-spine-shadow {
    display: none !important;
  }

  /* On mobile: Bỏ bìa trái đi theo yêu cầu của người dùng */
  .book-page-left-fold {
    display: none !important;
  }

  .book-pages-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .book-page-right-fold {
    width: 100%;
    height: 100%;
    flex: 1;
  }
}
</style>
