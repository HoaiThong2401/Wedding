<template>
  <section class="gallery-section" id="gallery">
    <div class="container">

      <div class="section-header">
        <span class="section-sub">Sweet Moments</span>
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Wedding Gallery</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Những khoảnh khắc ngọt ngào ghi dấu tình yêu của chúng mình</p>
      </div>

      <!-- 3D COVERFLOW CAROUSEL CONTAINER -->
      <div 
        class="coverflow-wrapper"
        @mouseenter="pauseAutoplay"
        @mouseleave="startAutoplay"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
      >
        <!-- Nút điều hướng Previous -->
        <button 
          class="carousel-nav-btn prev-btn" 
          @click="prevPhoto" 
          aria-label="Ảnh trước"
          title="Ảnh trước"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Khung chiếu 3D Slider -->
        <div class="coverflow-stage">
          <div
            v-for="(photo, index) in photos"
            :key="photo.id || index"
            class="coverflow-card"
            :class="getCardClass(index)"
            :style="get3DTransform(index)"
            @click="handleCardClick(index)"
          >
            <div class="card-inner">
              <div class="photo-box">
                <img 
                  :src="getImage(photo.id, photo.fallbackSrc)" 
                  :alt="photo.caption" 
                  loading="lazy" 
                  class="photo-img" 
                  draggable="false"
                />
                
                <!-- Hiệu ứng phủ bóng phản chiếu & viền mạ vàng -->
                <div class="photo-reflection"></div>
                <div class="gold-border-glow"></div>

                <!-- Overlay icon phóng to khi là ảnh chính -->
                <div v-if="getOffset(index) === 0" class="center-photo-overlay" title="Xem ảnh lớn">
                  <div class="zoom-pill">
                    <svg class="zoom-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>Phóng to</span>
                  </div>
                </div>
              </div>

              <!-- Thẻ thông tin dưới chân ảnh -->
              <div class="card-caption">
                <span class="caption-title">{{ photo.caption }}</span>
                <span class="caption-couple">Thiện & Linh</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Nút điều hướng Next -->
        <button 
          class="carousel-nav-btn next-btn" 
          @click="nextPhoto" 
          aria-label="Ảnh tiếp theo"
          title="Ảnh tiếp theo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- THANH ĐIỀU HƯỚNG & CHỈ SỐ ẢNH DƯỚI CAROUSEL -->
      <div class="gallery-controls">
        <div class="active-photo-info">
          <span class="counter-badge">{{ formatNumber(currentIndex + 1) }} / {{ formatNumber(photos.length) }}</span>
          <h3 class="current-caption">{{ photos[currentIndex]?.caption }}</h3>
        </div>

        <!-- Pagination Dots -->
        <div class="pagination-dots">
          <button
            v-for="(p, idx) in photos"
            :key="'dot-' + idx"
            class="dot-btn"
            :class="{ active: idx === currentIndex }"
            @click="goToSlide(idx)"
            :aria-label="`Chuyển tới ảnh ${idx + 1}`"
          ></button>
        </div>

        <!-- Thumbnails dải nhỏ tiện xem trước -->
        <div class="thumbnails-strip">
          <div
            v-for="(p, idx) in photos"
            :key="'thumb-' + idx"
            class="thumb-item"
            :class="{ active: idx === currentIndex }"
            @click="goToSlide(idx)"
          >
            <img :src="getImage(p.id, p.fallbackSrc)" :alt="p.caption" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- FULLSCREEN LIGHTBOX MODAL -->
      <Transition name="lightbox-fade">
        <div
          v-if="lightboxOpen"
          class="lightbox-overlay"
          @click.self="closeLightbox"
          tabindex="0"
        >
          <div class="lightbox-content">
            <button class="lightbox-close" @click="closeLightbox" title="Đóng (Esc)">✕</button>

            <button class="lightbox-nav prev" @click="prevPhoto" title="Ảnh trước">‹</button>
            <button class="lightbox-nav next" @click="nextPhoto" title="Ảnh tiếp theo">›</button>

            <div class="lightbox-image-box">
              <img
                :src="getImage(photos[currentIndex].id, photos[currentIndex].fallbackSrc)"
                :alt="photos[currentIndex].caption"
                class="lightbox-img"
              />
            </div>

            <div class="lightbox-info">
              <h4 class="lightbox-title">{{ photos[currentIndex].caption }}</h4>
              <span class="lightbox-counter">{{ formatNumber(currentIndex + 1) }} / {{ formatNumber(photos.length) }}</span>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useImageMap } from '@/composables/useImageMap'

const { imageMap, getImage, fetchImages } = useImageMap()

const defaultCaptions = [
  "Ánh mắt trao nhau",
  "Cùng nhau qua năm tháng",
  "Nụ cười rạng rỡ",
  "Bình yên bên anh",
  "Chạm vào hạnh phúc",
  "Ngày chung đôi",
  "Trọn vẹn lời hứa",
  "Hành trình ngập tràn nắng",
  "Mãi mãi một tình yêu",
  "Nơi tình yêu bắt đầu",
  "Bàn tay nắm chặt bàn tay",
  "Hạnh phúc giản đơn",
  "Bên em là bình yên",
  "Giây phút ngọt ngào",
  "Giai điệu tình yêu",
  "Dưới ánh hoàng hôn",
  "Nắm tay đi khắp thế gian",
  "Một đời an yên",
  "Tình yêu đong đầy",
  "Mảnh ghép hoàn hảo",
  "Tựa vai nhau sớm tối",
  "Hẹn ước trăm năm",
  "Gửi trao yêu thương",
  "Nắng ấm bên đời",
  "Mùa yêu thương nở hoa",
  "Khắc ghi từng khoảnh khắc",
  "Chung một nhịp đập",
  "Duyên định ngàn năm",
  "Khoảnh khắc nhiệm màu",
  "Lời thì thầm của trái tim",
  "Về chung một nhà",
  "Bên nhau trọn đời",
  "Nguyện ước trăm năm",
  "Hạnh phúc ngọt ngào",
  "Ánh hoàng hôn chứng giám",
  "Tình yêu diệu kỳ",
  "Nụ cười em là nắng",
  "Giữ chặt tay nhau",
  "Đi qua bao thăng trầm",
  "Ngày ta thuộc về nhau",
  "Trọn đời bên anh",
  "Ngập tràn hạnh phúc",
  "Bước chung con đường",
  "Giọt nắng tình yêu",
  "Lời hứa từ trái tim",
  "Vòng tay ấm áp",
  "Chung đôi chung lối",
  "Khởi đầu hành trình mới",
  "Yêu thương không hồi kết",
  "Viết tiếp câu chuyện tình",
  "Hạnh phúc mãi về sau",
  "Thiên đường có đôi"
]

// Danh sách fallback mặc định
const initialPhotos = [
  { id: 1, fallbackSrc: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80", caption: "Ánh mắt trao nhau" },
  { id: 2, fallbackSrc: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80", caption: "Cùng nhau qua năm tháng" },
  { id: 3, fallbackSrc: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80", caption: "Nụ cười rạng rỡ" },
  { id: 4, fallbackSrc: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80", caption: "Bình yên bên anh" },
  { id: 5, fallbackSrc: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80", caption: "Chạm vào hạnh phúc" },
  { id: 6, fallbackSrc: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80", caption: "Ngày chung đôi" },
  { id: 7, fallbackSrc: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?w=800&auto=format&fit=crop&q=80", caption: "Trọn vẹn lời hứa" },
  { id: 8, fallbackSrc: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80", caption: "Hành trình ngập tràn nắng" },
  { id: 9, fallbackSrc: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=80", caption: "Mãi mãi một tình yêu" },
  { id: 10, fallbackSrc: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80", caption: "Nơi tình yêu bắt đầu" }
]

const getCaption = (id, index) => {
  const fromSheet = imageMap.value[`caption_${id}`] || imageMap.value[`caption${id}`]
  if (fromSheet) return fromSheet

  const existing = initialPhotos.find(p => p.id === id)
  if (existing?.caption) return existing.caption

  const captionIdx = (id > 0 ? id - 1 : index) % defaultCaptions.length
  return defaultCaptions[captionIdx]
}

const photos = computed(() => {
  const mapKeys = Object.keys(imageMap.value || {})
  const numericIds = mapKeys
    .map(k => Number(k))
    .filter(n => !isNaN(n) && n > 0)
    .sort((a, b) => a - b)

  if (numericIds.length > 0) {
    return numericIds.map((id, index) => {
      const existing = initialPhotos.find(p => p.id === id)
      return {
        id,
        fallbackSrc: existing?.fallbackSrc || `https://picsum.photos/800/1000?random=${id}`,
        caption: getCaption(id, index)
      }
    })
  }

  return initialPhotos
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)
let autoplayTimer = null

const formatNumber = (num) => String(num).padStart(2, '0')

const getOffset = (index) => {
  const n = photos.value.length || 1
  let diff = (index - currentIndex.value) % n
  if (diff < -Math.floor(n / 2)) diff += n
  if (diff > Math.floor(n / 2)) diff -= n
  return diff
}

const getCardClass = (index) => {
  const offset = getOffset(index)
  if (offset === 0) return 'card-center'
  if (offset === -1) return 'card-left-1'
  if (offset === 1) return 'card-right-1'
  if (offset === -2) return 'card-left-2'
  if (offset === 2) return 'card-right-2'
  return 'card-hidden'
}

// Tính toán biến đổi 3D chân thực
const get3DTransform = (index) => {
  const offset = getOffset(index)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640

  if (offset === 0) {
    return {
      transform: 'translate3d(0, 0, 70px) scale(1) rotateY(0deg)',
      zIndex: 30,
      opacity: 1,
      filter: 'brightness(1)',
      pointerEvents: 'auto'
    }
  }

  const sign = offset > 0 ? 1 : -1
  const absOffset = Math.abs(offset)

  if (absOffset === 1) {
    const translateX = sign * (isMobile ? 95 : 175)
    const translateZ = isMobile ? -45 : -70
    const rotateY = -sign * (isMobile ? 28 : 34)
    const scale = isMobile ? 0.84 : 0.86

    return {
      transform: `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: 20,
      opacity: 0.82,
      filter: 'brightness(0.85)',
      pointerEvents: 'auto'
    }
  }

  if (absOffset === 2) {
    const translateX = sign * (isMobile ? 155 : 300)
    const translateZ = isMobile ? -95 : -150
    const rotateY = -sign * (isMobile ? 38 : 45)
    const scale = isMobile ? 0.7 : 0.72

    return {
      transform: `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: 10,
      opacity: 0.45,
      filter: 'brightness(0.65)',
      pointerEvents: 'auto'
    }
  }

  // Các thẻ xa hơn ẩn đi
  return {
    transform: `translate3d(${sign * 450}px, 0, -250px) scale(0.55) rotateY(${-sign * 55}deg)`,
    zIndex: 1,
    opacity: 0,
    pointerEvents: 'none'
  }
}

const goToSlide = (idx) => {
  currentIndex.value = idx
}

const nextPhoto = () => {
  const len = photos.value.length || 1
  currentIndex.value = (currentIndex.value + 1) % len
}

const prevPhoto = () => {
  const len = photos.value.length || 1
  currentIndex.value = (currentIndex.value - 1 + len) % len
}

const handleCardClick = (index) => {
  const offset = getOffset(index)
  if (offset === 0) {
    // Click vào ảnh chính trực diện -> mở Lightbox
    openLightbox(index)
  } else {
    // Click vào ảnh nghiêng bên cạnh -> chuyển focus về ảnh đó
    currentIndex.value = index
  }
}

// Xử lý cử chỉ vuốt chạm (Touch) và Kéo chuột (Mouse Drag)
let startX = 0
let currentX = 0
let isDragging = false

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX
  pauseAutoplay()
}

const handleTouchMove = (e) => {
  currentX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!startX || !currentX) return
  const diffX = currentX - startX
  const threshold = 40 // Ngưỡng vuốt tối thiểu

  if (diffX > threshold) {
    // Vuốt sang phải -> Chuyển về ảnh trước
    prevPhoto()
  } else if (diffX < -threshold) {
    // Vuốt sang trái -> Chuyển sang ảnh tiếp theo
    nextPhoto()
  }

  startX = 0
  currentX = 0
  startAutoplay()
}

const handleMouseDown = (e) => {
  isDragging = true
  startX = e.clientX
  pauseAutoplay()
}

const handleMouseMove = (e) => {
  if (!isDragging) return
  currentX = e.clientX
}

const handleMouseUp = () => {
  if (!isDragging) return
  isDragging = false

  if (startX && currentX) {
    const diffX = currentX - startX
    const threshold = 45
    if (diffX > threshold) {
      prevPhoto()
    } else if (diffX < -threshold) {
      nextPhoto()
    }
  }

  startX = 0
  currentX = 0
  startAutoplay()
}

// Lightbox
const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
  pauseAutoplay()
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
  startAutoplay()
}

// Autoplay
const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = setInterval(() => {
    if (!lightboxOpen.value) {
      nextPhoto()
    }
  }, 4800)
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') nextPhoto()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'Escape' && lightboxOpen.value) closeLightbox()
}

onMounted(() => {
  fetchImages()
  startAutoplay()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  pauseAutoplay()
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.gallery-section {
  padding: 70px 16px 65px;
  position: relative;
  background: radial-gradient(circle at 50% 30%, rgba(200, 165, 92, 0.07) 0%, rgba(252, 249, 244, 0.6) 70%, transparent 100%);
  overflow: hidden;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14px;
  margin-top: 8px;
  font-style: italic;
}

/* 3D COVERFLOW WRAPPER - GỌN GÀNG & THANH LỊCH */
.coverflow-wrapper {
  position: relative;
  width: 100%;
  height: 380px;
  margin: 25px auto 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: grab;
}

.coverflow-wrapper:active {
  cursor: grabbing;
}

/* Sân khấu phối cảnh 3D */
.coverflow-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
}

/* Thẻ 3D Coverflow nhỏ gọn */
.coverflow-card {
  position: absolute;
  width: 210px;
  height: 295px;
  cursor: pointer;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), 
              opacity 0.65s ease, 
              filter 0.65s ease;
  will-change: transform, opacity, filter;
}

.card-inner {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 14px;
  padding: 7px 7px 10px;
  box-shadow: 0 14px 35px rgba(74, 59, 47, 0.14), 0 3px 10px rgba(200, 165, 92, 0.12);
  border: 1px solid rgba(200, 165, 92, 0.35);
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* Hiệu ứng nổi bật cho thẻ ở giữa */
.card-center .card-inner {
  border: 1.5px solid #c8a55c;
  box-shadow: 0 18px 45px rgba(143, 46, 54, 0.18), 0 0 25px rgba(200, 165, 92, 0.3);
}

.card-center:hover .card-inner {
  transform: translateY(-4px);
  box-shadow: 0 22px 50px rgba(143, 46, 54, 0.24), 0 0 32px rgba(200, 165, 92, 0.4);
}

.photo-box {
  width: 100%;
  flex: 1;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  background: #f5efe6;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-center:hover .photo-img {
  transform: scale(1.05);
}

/* Ánh sáng vàng viền nhẹ */
.gold-border-glow {
  position: absolute;
  inset: 0;
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

/* Nút phóng to ở trung tâm */
.center-photo-overlay {
  position: absolute;
  inset: 0;
  background: rgba(143, 46, 54, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-center:hover .center-photo-overlay {
  opacity: 1;
}

.zoom-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 6px 14px;
  border-radius: 30px;
  color: var(--wine-red);
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  border: 1px solid var(--primary-gold);
  transform: translateY(8px);
  transition: transform 0.3s ease;
}

.card-center:hover .zoom-pill {
  transform: translateY(0);
}

.zoom-icon-svg {
  width: 14px;
  height: 14px;
}

/* Caption bên dưới ảnh */
.card-caption {
  text-align: center;
  padding-top: 8px;
}

.caption-title {
  font-family: var(--font-serif);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--wine-red);
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.caption-couple {
  font-family: var(--font-script);
  font-size: 14.5px;
  color: var(--primary-gold-dark);
  display: block;
  margin-top: 1px;
}

/* NÚT ĐIỀU HƯỚNG PREV / NEXT */
.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid var(--primary-gold);
  color: var(--wine-red);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 40;
  box-shadow: 0 4px 15px rgba(74, 59, 47, 0.12);
  transition: all 0.3s ease;
}

.carousel-nav-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
}

.carousel-nav-btn:hover {
  background: var(--wine-red);
  border-color: var(--wine-red);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.35);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: 15px;
}

.next-btn {
  right: 15px;
}

.prev-btn:hover svg {
  transform: translateX(-2px);
}

.next-btn:hover svg {
  transform: translateX(2px);
}

/* GALLERY CONTROLS & THUMBNAILS */
.gallery-controls {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.active-photo-info {
  text-align: center;
}

.counter-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--primary-gold-dark);
  background: rgba(200, 165, 92, 0.12);
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid rgba(200, 165, 92, 0.3);
  margin-bottom: 4px;
}

.current-caption {
  font-family: var(--font-serif);
  font-size: 17px;
  color: var(--wine-red);
  font-weight: 600;
  margin: 0;
}

/* Pagination Dots */
.pagination-dots {
  display: flex;
  align-items: center;
  gap: 7px;
}

.dot-btn {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(200, 165, 92, 0.35);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dot-btn.active {
  width: 22px;
  border-radius: 8px;
  background: var(--wine-red);
  box-shadow: 0 2px 8px rgba(143, 46, 54, 0.35);
}

/* Dải Thumbnail xem nhanh */
.thumbnails-strip {
  display: flex;
  gap: 8px;
  max-width: 90%;
  overflow-x: auto;
  padding: 6px 4px;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-gold) transparent;
}

.thumbnails-strip::-webkit-scrollbar {
  height: 3px;
}

.thumbnails-strip::-webkit-scrollbar-thumb {
  background: var(--primary-gold);
  border-radius: 4px;
}

.thumb-item {
  width: 44px;
  height: 44px;
  border-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  border: 1.5px solid transparent;
  opacity: 0.55;
  transition: all 0.3s ease;
}

.thumb-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-item.active {
  border-color: var(--primary-gold);
  opacity: 1;
  transform: scale(1.1);
  box-shadow: 0 3px 10px rgba(200, 165, 92, 0.35);
}

.thumb-item:hover {
  opacity: 0.9;
}

/* LIGHTBOX MODAL */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 12, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid #c8a55c;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
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
  width: 38px;
  height: 38px;
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 26px;
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

.lightbox-nav.prev { left: -60px; }
.lightbox-nav.next { right: -60px; }

.lightbox-info {
  margin-top: 14px;
  text-align: center;
  color: #fff;
}

.lightbox-title {
  font-family: var(--font-serif);
  font-size: 19px;
  color: #ffd778;
  margin: 0;
}

.lightbox-counter {
  font-size: 12.5px;
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

/* RESPONSIVE */
@media (max-width: 992px) {
  .coverflow-wrapper {
    height: 340px;
  }

  .coverflow-card {
    width: 180px;
    height: 255px;
  }

  .prev-btn { left: 8px; }
  .next-btn { right: 8px; }

  .lightbox-nav.prev { left: 10px; }
  .lightbox-nav.next { right: 10px; }
}

@media (max-width: 640px) {
  .gallery-section {
    padding: 55px 12px 50px;
  }

  .coverflow-wrapper {
    height: 290px;
    margin: 18px auto 5px;
  }

  .coverflow-stage {
    perspective: 700px;
  }

  .coverflow-card {
    width: 145px;
    height: 205px;
  }

  .card-inner {
    padding: 5px 5px 8px;
    border-radius: 11px;
  }

  .caption-title {
    font-size: 11.5px;
  }

  .caption-couple {
    font-size: 12.5px;
  }

  .carousel-nav-btn {
    width: 32px;
    height: 32px;
  }

  .carousel-nav-btn svg {
    width: 15px;
    height: 15px;
  }

  .prev-btn { left: 4px; }
  .next-btn { right: 4px; }

  .current-caption {
    font-size: 15px;
  }

  .thumbnails-strip {
    display: none;
  }
}
</style>