<template>
  <section class="gallery-section" id="gallery">
    <div class="container">

      <div class="section-header">
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Wedding Gallery</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Những khoảnh khắc ngọt ngào ghi dấu tình yêu của chúng mình</p>
      </div>

      <!-- LƯỚI ẢNH POLAROID NGHỆ THUẬT -->
      <div class="gallery-grid">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="gallery-item"
          :style="getTransformStyle(index)"
          @click="openLightbox(index)"
        >
          <div class="polaroid-card">
            <div class="photo-frame">
              <img :src="photo.src" :alt="photo.caption" loading="lazy" class="photo-img" />
              <div class="photo-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="polaroid-caption">
              <span class="caption-title">{{ photo.caption }}</span>
              <span class="caption-sub">Forever in Love</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FULLSCREEN LIGHTBOX MODAL -->
      <Transition name="lightbox-fade">
        <div
          v-if="lightboxOpen"
          class="lightbox-overlay"
          @click.self="closeLightbox"
          @keydown.esc="closeLightbox"
          tabindex="0"
        >
          <div class="lightbox-content">
            <button class="lightbox-close" @click="closeLightbox" title="Đóng (Esc)">✕</button>

            <button class="lightbox-nav prev" @click="prevPhoto" title="Ảnh trước">‹</button>
            <button class="lightbox-nav next" @click="nextPhoto" title="Ảnh tiếp theo">›</button>

            <div class="lightbox-image-box">
              <img
                :src="photos[currentIndex].src"
                :alt="photos[currentIndex].caption"
                class="lightbox-img"
              />
            </div>

            <div class="lightbox-info">
              <h4 class="lightbox-title">{{ photos[currentIndex].caption }}</h4>
              <span class="lightbox-counter">{{ currentIndex + 1 }} / {{ photos.length }}</span>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const photos = [
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80",
    caption: "Ánh mắt trao nhau"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80",
    caption: "Cùng nhau qua năm tháng"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80",
    caption: "Nụ cười rạng rỡ"
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80",
    caption: "Bình yên bên anh"
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80",
    caption: "Chạm vào hạnh phúc"
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80",
    caption: "Ngày chung đôi"
  },
  {
    src: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=800&auto=format&fit=crop&q=80",
    caption: "Trọn vẹn lời hứa"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80",
    caption: "Hành trình ngập tràn nắng"
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=80",
    caption: "Mãi mãi một tình yêu"
  }
]

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const rotations = [-2.2, 1.8, -1.5, 2.5, -2, 1.6, -1.8, 2.2, -1.2]

const getTransformStyle = (index) => {
  const r = rotations[index % rotations.length]
  return {
    '--rot': `${r}deg`
  }
}

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextPhoto = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length
}

const prevPhoto = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextPhoto()
  if (e.key === 'ArrowLeft') prevPhoto()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.gallery-section {
  padding: 90px 16px;
  position: relative;
}

.container {
  max-width: 1050px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 25px;
  margin-top: 50px;
  justify-items: center;
}

.gallery-item {
  width: 100%;
  max-width: 310px;
  transform: rotate(var(--rot));
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.gallery-item:hover {
  transform: rotate(0deg) scale(1.05) translateY(-8px) !important;
  z-index: 10;
}

.polaroid-card {
  background: #ffffff;
  border: 1px solid rgba(200, 165, 92, 0.3);
  border-radius: 6px;
  padding: 12px 12px 18px;
  box-shadow: var(--shadow-md);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

.gallery-item:hover .polaroid-card {
  box-shadow: var(--shadow-gold);
  border-color: rgba(200, 165, 92, 0.6);
}

.photo-frame {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  background: #f5efe6;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.gallery-item:hover .photo-img {
  transform: scale(1.06);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: rgba(143, 46, 54, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .photo-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 24px;
  background: rgba(255, 255, 255, 0.9);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.polaroid-caption {
  text-align: center;
  margin-top: 14px;
}

.caption-title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--wine-red);
  display: block;
}

.caption-sub {
  font-family: var(--font-script);
  font-size: 18px;
  color: var(--primary-gold-dark);
  display: block;
  margin-top: 2px;
}

/* LIGHTBOX MODAL */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 12, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  outline: none;
}

.lightbox-content {
  position: relative;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lightbox-image-box {
  max-width: 100%;
  max-height: 75vh;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #c8a55c;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
}

.lightbox-img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  display: block;
}

.lightbox-close {
  position: absolute;
  top: -45px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.lightbox-close:hover {
  background: #a23946;
  border-color: #a23946;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.lightbox-nav:hover {
  background: #c8a55c;
  border-color: #c8a55c;
  color: #1a120c;
}

.lightbox-nav.prev { left: -65px; }
.lightbox-nav.next { right: -65px; }

.lightbox-info {
  margin-top: 15px;
  text-align: center;
  color: #fff;
}

.lightbox-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #ffd778;
  margin: 0;
}

.lightbox-counter {
  font-size: 13px;
  color: #c4b5a5;
  letter-spacing: 2px;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 16px;
  }

  .lightbox-nav.prev { left: 10px; }
  .lightbox-nav.next { right: 10px; }
}

@media (max-width: 576px) {
  .gallery-section {
    padding: 60px 16px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
    margin-top: 30px;
  }

  .polaroid-card {
    padding: 8px 8px 12px;
  }

  .caption-title {
    font-size: 13px;
  }

  .caption-sub {
    font-size: 15px;
  }
}
</style>