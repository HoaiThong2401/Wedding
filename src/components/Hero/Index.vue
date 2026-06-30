<template>
  <section ref="heroRef" class="hero" @click="closeLetter">
    <div class="card" :class="{ open: isOpen }">
      
      <div class="cover" @click.stop="onCoverClick">
        <div class="cover-border">
          <div class="cover-card">
            <p class="cover-subtitle">THE WEDDING OF</p>
            <div class="divider-diamond">✦</div>
            <div class="cover-preview">
              <p class="name-highlight">Lê Hoàng Thiện</p>
              <div class="ring-icon">
                <span class="line"></span>
                <span class="heart">❤</span>
                <span class="line"></span>
              </div>
              <p class="name-highlight">Phan Linh</p>
            </div>
            <div class="divider-diamond">✦</div>
            <p class="cover-footer">SAVE THE DATE</p>
            <p class="hint" v-if="!isOpen">Chạm để mở thiệp</p>
          </div>
        </div>
      </div>

      <div class="book">
        <div class="invitation-content">
          <div class="page-image">
            <img src="/images/rightpage.png" class="bg-image" alt="Wedding" />
          </div>

          <div class="page-info">
            <div class="top-layout">
              <div class="family-section">
                <div class="parent-block">
                  <p class="title">NHÀ TRAI</p>
                  <p class="parent-name">ÔNG: LÊ XUYÊN TRUYỀN</p>
                  <p class="parent-name">BÀ: LÊ THỊ THANH NỮ</p>
                  <p class="addr">Xã Trung An, TP.Mỹ Tho, Tiền Giang</p>
                </div>
                <div class="parent-block">
                  <p class="title">NHÀ GÁI</p>
                  <p class="parent-name">ÔNG: [Họ tên Bố]</p>
                  <p class="parent-name">BÀ: [Họ tên Mẹ]</p>
                  <p class="addr">TP.Đà Lạt, Lâm Đồng</p>
                </div>
              </div>
              <div class="flower-icon">
                <img src="/images/flower.png" alt="flower" />
              </div>
            </div>

            <div class="announce">
              TRÂN TRỌNG BÁO TIN LỄ TÂN QUY CỦA HAI CON CHÚNG TÔI
            </div>

            <div class="names">
              <div class="couple-name groom">
                <h2>Lê Hoàng Thiện</h2>
                <h4>Trưởng Nam</h4>
              </div>
              <div class="row-love">
                <img src="/images/rowlove.png" alt="love" />
              </div>
              <div class="couple-name bride">
                <h2>Phan Linh</h2>
                <h4>Thứ Nữ</h4>
              </div>
            </div>

            <div class="event">HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA</div>

            <div class="time">
              <p class="solar-date">VÀO LÚC 11H00 - THỨ NĂM - 07.01.2027</p>
              <p class="lunar-date">(Nhằm ngày 30 tháng 11 năm Bính Ngọ)</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const heroRef = ref(null)
let observer = null

const playMusic = () => {
  window.dispatchEvent(new Event('user-interact'))
}

const onCoverClick = () => {
  if (!isOpen.value) {
    isOpen.value = true
  }
  playMusic()
}

const closeLetter = () => {
  if (!isOpen.value) return
  isOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        closeLetter()
      }
    },
    { threshold: 0.1 }
  )

  if (heroRef.value) {
    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  if (observer && heroRef.value) {
    observer.unobserve(heroRef.value)
  }
})
</script>

<style scoped>
.hero {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3ebe1;
  padding: 16px;
  perspective: 2000px;
  cursor: pointer;
  overflow: hidden;
}

.card {
  width: 900px;
  max-width: 100%;
  height: 600px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(74, 59, 47, 0.15), 0 5px 15px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;
  transform: rotateX(5deg) rotateY(-2deg);
  transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 1s ease;
  cursor: default;
}

.card.open {
  transform: rotateX(10deg) rotateY(0deg) translateZ(-20px);
  box-shadow: 0 40px 80px rgba(74, 59, 47, 0.25), 0 10px 25px rgba(0, 0, 0, 0.1);
}

.cover {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfaf6;
  border-radius: 12px;
  padding: 24px;
  transform-origin: top center;
  backface-visibility: hidden; 
  pointer-events: auto;
  transition: transform 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity 0.8s ease, box-shadow 1.2s ease;
  box-shadow: inset 0 0 50px rgba(179, 139, 77, 0.08), 0 10px 30px rgba(0,0,0,0.08);
}

.card.open .cover {
  transform: rotateX(-160deg); 
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 -20px 40px rgba(0,0,0,0);
}

.cover-border {
  width: 100%;
  height: 100%;
  border: 1px solid #b38b4d;
  border-radius: 8px;
  padding: 6px;
  box-sizing: border-box;
}

.cover-card {
  width: 100%;
  height: 100%;
  border: 2px solid #b38b4d;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-shadow: inset 0 0 20px rgba(179, 139, 77, 0.05);
}

.cover-subtitle {
  font-size: 13px;
  letter-spacing: 5px;
  color: #b38b4d;
  font-weight: 500;
}

.divider-diamond {
  color: #b38b4d;
  font-size: 12px;
  margin: 20px 0;
  opacity: 0.7;
}

.cover-preview {
  width: 100%;
  text-align: center;
}

.name-highlight {
  font-family: serif;
  font-size: 32px;
  font-weight: 600;
  color: #a23946; 
  margin: 10px 0;
  letter-spacing: 1px;
  text-align: center;
}

.ring-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;
  width: 100%;
}

.ring-icon .line {
  width: 60px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.ring-icon .heart {
  color: #a23946;
  font-size: 16px;
}

.cover-footer {
  font-size: 14px;
  letter-spacing: 4px;
  color: #7a6b5c;
  font-weight: 500;
  margin-top: 10px;
}

.hint {
  font-size: 12px;
  color: #b38b4d;
  font-style: italic;
  margin-top: 30px;
  letter-spacing: 1px;
  animation: elegantPulse 2.5s infinite ease-in-out;
}

.book {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  transform: scale(0.93) translateZ(-30px);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  overflow-y: auto;
  border-radius: 12px;
  pointer-events: none;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.05);
}

.card.open .book {
  opacity: 1;
  transform: scale(1) translateZ(0);
  pointer-events: auto;
  transition-delay: 0.1s;
}

.invitation-content {
  display: flex;
  width: 100%;
  height: 100%;
}

.page-image {
  flex: 1;
  height: 100%;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-info {
  flex: 1.2;
  padding: 40px;
  color: #4a3b2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fffaf3;
}

.top-layout {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.family-section {
  display: flex;
  gap: 32px;
}

.title {
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #8c2f39;
  margin-bottom: 6px;
}

.parent-name {
  font-size: 13px;
  margin: 3px 0;
}

.addr {
  font-size: 11px;
  opacity: 0.7;
  max-width: 180px;
  line-height: 1.4;
}

.flower-icon img {
  width: 70px;
  object-fit: contain;
}

.announce {
  font-size: 13px;
  letter-spacing: 1px;
  text-align: center;
  margin: 20px 0;
  font-weight: 500;
}

.names {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  margin: 10px 0;
}

.couple-name h2 {
  font-size: 24px;
  color: #8c2f39;
  margin-bottom: 4px;
}

.couple-name h4 {
  font-size: 13px;
  font-weight: 400;
  opacity: 0.8;
}

.groom { text-align: center; }
.bride { text-align: center; }

.row-love {
  width: 100px;
}
.row-love img {
  width: 100%;
}

.event {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(74, 59, 47, 0.3);
  padding-bottom: 6px;
  align-self: center;
}

.time {
  text-align: center;
  line-height: 1.6;
}

.solar-date {
  font-size: 13px;
  font-weight: 600;
}

.lunar-date {
  font-size: 12px;
  opacity: 0.8;
  font-style: italic;
}

@keyframes elegantPulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1.03);
  }
}

@media (max-width: 768px) {
  .card {
    height: 85dvh; 
    max-height: 640px;
    transform: rotateX(3deg) rotateY(-1deg);
  }

  .card.open {
    transform: rotateX(5deg) rotateY(0deg) translateZ(-10px);
  }

  .card.open .cover {
    transform: rotateX(-165deg); 
  }

  .cover {
    padding: 12px;
  }

  .cover-card {
    padding: 20px 10px;
  }

  .name-highlight {
    font-size: 24px;
  }

  .ring-icon .line {
    width: 40px;
  }

  .invitation-content {
    flex-direction: column; 
  }

  .page-image {
    flex: 0 0 140px;
    width: 100%;
  }

  .page-info {
    flex: 1;
    padding: 20px 16px;
    justify-content: flex-start;
    gap: 12px;
  }

  .top-layout {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .family-section {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .parent-block .addr {
    max-width: 100%;
  }

  .flower-icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .flower-icon img {
    width: 45px;
  }

  .announce {
    margin: 4px 0;
    font-size: 11px;
  }

  .names {
    flex-direction: column;
    gap: 4px;
  }

  .couple-name h2 {
    font-size: 20px;
  }

  .row-love {
    width: 100px;
  }
  .row-love img {
    width: 100%;
  }
}
</style>