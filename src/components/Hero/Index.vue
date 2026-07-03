<template>
  <section
    ref="heroRef"
    class="hero"
    @click="closeLetter">

    <div
      class="card"
      :class="{ open: isOpen }">

      <div
        class="cover"
        @click.stop="onCoverClick">

        <div class="cover-border">

          <div class="cover-card">

            <p class="cover-subtitle">
              THE WEDDING OF
            </p>

            <div class="divider-diamond">
              ✦
            </div>

            <div class="cover-preview">

              <p class="name-highlight">
                Lê Hoàng Thiện
              </p>

              <div class="ring-icon">

                <span class="line"></span>

                <span class="heart">
                  ❤
                </span>

                <span class="line"></span>

              </div>

              <p class="name-highlight">
                Phan Linh
              </p>

            </div>

            <div class="divider-diamond">
              ✦
            </div>

            <p class="cover-footer">
              SAVE THE DATE
            </p>

            <p
              v-if="!isOpen"
              class="hint">

              Chạm để mở thiệp

            </p>

          </div>

        </div>

      </div>

      <div class="book">

        <div class="book-content">

          <div class="page left-page">

            <div class="page-border">

              <div class="corner-flower flower-bottom-left">
                <img
                  src="/images/flower.png"
                  alt="">
              </div>

              <div class="left-content">

                <h2>
                  TRÂN TRỌNG KÍNH MỜI
                </h2>

                <h3>
                  Quý Vị và Các Bạn
                </h3>

                <p>
                  Đến tham dự buổi tiệc mừng
                </p>

                <p class="strong">
                  VÀ CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
                </p>

                <div class="paragraph">

                  <p>
                    Chúng tôi rất vinh dự được đón tiếp Quý vị
                  </p>

                  <p>
                    trong ngày trọng đại nhất của cuộc đời mình.
                  </p>

                </div>

                <div class="paragraph">

                  <p>
                    Sự hiện diện của Quý vị
                  </p>

                  <p>
                    là niềm vinh hạnh to lớn cho chúng tôi.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div class="page right-page">

            <div class="page-border">

              <div class="corner-flower flower-top-left">
                <img
                  src="/images/floral-branch.png"
                  alt="">
              </div>

              <div class="corner-flower flower-top-right">
                <img
                  src="/images/flower.png"
                  alt="">
              </div>

              <div class="family-section">

                <div class="family">

                  <h4>
                    NHÀ TRAI
                  </h4>

                  <p>
                    ÔNG: LÊ XUYÊN TRUYỀN
                  </p>

                  <p>
                    BÀ: LÊ THỊ THANH NỮ
                  </p>

                  <span>
                    Xã Trung An, TP. Mỹ Tho, Tiền Giang
                  </span>

                </div>

                <div class="family">

                  <h4>
                    NHÀ GÁI
                  </h4>

                  <p>
                    ÔNG: [Họ tên Bố]
                  </p>

                  <p>
                    BÀ: [Họ tên Mẹ]
                  </p>

                  <span>
                    TP. Đà Lạt, Lâm Đồng
                  </span>

                </div>

              </div>

              <p class="announce">

                TRÂN TRỌNG BÁO TIN LỄ TÂN QUY CỦA HAI CON CHÚNG TÔI

              </p>

              <div class="couple">

                <h1 class="groom">
                  Lê Hoàng Thiện
                </h1>

                <span class="role">
                  Trưởng Nam
                </span>

                <div class="love-divider">

                  <span></span>

                  <div class="heart-group">

                    ❤

                    ❤

                  </div>

                  <span></span>

                </div>

                <h1 class="bride">
                  Phan Linh
                </h1>

                <span class="role">
                  Thứ Nữ
                </span>

              </div>

              <div class="event-section">

                <h5>

                  HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA

                </h5>

                <div class="gold-line"></div>

                <p class="solar">

                  VÀO LÚC 11H00 - THỨ NĂM - 07.01.2027

                </p>

                <p class="lunar">

                  (Nhằm ngày 30 tháng 11 năm Bính Ngọ)

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref(null)
const isOpen = ref(false)

let observer = null

const playMusic = () => {
  window.dispatchEvent(new Event('user-interact'))
}

const emit = defineEmits(['opened'])

const onCoverClick = () => {
  if (isOpen.value) return

  isOpen.value = true

  emit('opened')

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
    {
      threshold: 0.15
    }
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
  padding: 24px;
  overflow: hidden;
  perspective: 2200px;
  background-color: #f5efe6;
}

.card {
  position: relative;
  width: 1200px;
  max-width: 100%;
  height: 760px;
  transform-style: preserve-3d;
  transition: all .9s ease;
}

.cover {
  position: absolute;
  inset: 0;
  z-index: 20;
  transform-origin: left center;
  transition: transform 1.2s cubic-bezier(.65,.05,.36,1);
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg,#fffdf8,#f7efe4);
  box-shadow:
    0 25px 60px rgba(0,0,0,.18),
    inset 0 0 0 1px rgba(196,162,84,.35);
  backface-visibility: hidden;
}

.card.open .cover {
  transform: rotateY(-170deg);
}

.cover-border {
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 2px solid #c8a55c;
}

.cover-card {
  width: 100%;
  height: 100%;
  border: 1px solid #c8a55c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle,#fffefb,#f8f1e7);
  padding: 20px;
}

.cover-subtitle {
  letter-spacing: 6px;
  font-size: 14px;
  color: #b78b43;
  text-align: center;
}

.divider-diamond {
  margin: 22px 0;
  color: #b78b43;
  font-size: 15px;
}

.cover-preview {
  text-align: center;
}

.name-highlight {
  font-family: "Cormorant Garamond", serif;
  color: #8f2e36;
  font-size: 48px;
  font-weight: 600;
  margin: 12px 0;
}

.ring-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 20px 0;
}

.ring-icon .line {
  width: 90px;
  height: 1px;
  background: #c9a85c;
}

.ring-icon .heart {
  color: #a22939;
  font-size: 18px;
}

.cover-footer {
  margin-top: 20px;
  letter-spacing: 5px;
  color: #8f7a60;
  text-align: center;
}

.hint {
  margin-top: 40px;
  color: #b78b43;
  font-style: italic;
  text-align: center;
}

.book {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  overflow: hidden;
  background: #fdfbf8;
  box-shadow: 0 30px 70px rgba(0,0,0,.15);
  opacity: 0;
  transform: scale(.94);
  pointer-events: none;
  transition: opacity .8s ease, transform .8s ease;
}

.card.open .book {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.book-content {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

.book-content::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 2%;
  bottom: 2%;
  width: 18px;
  transform: translateX(-50%);
  background: linear-gradient(to right, rgba(0,0,0,.12), rgba(255,255,255,.8), rgba(0,0,0,.12));
  border-radius: 30px;
  z-index: 5;
}

.page {
  position: relative;
  flex: 1;
  background: radial-gradient(circle at center, #fffefb 0%, #faf4ea 100%);
}

.left-page {
  border-right: 1px solid rgba(188,162,104,.35);
}

.right-page {
  border-left: 1px solid rgba(188,162,104,.35);
}

.page-border {
  position: absolute;
  inset: 18px;
  border: 2px solid #c8a55c;
  padding: 18px;
}

.page-border::before {
  content: "";
  position: absolute;
  inset: 8px;
  border: 1px solid #c8a55c;
  pointer-events: none;
}

.corner-flower {
  position: absolute;
  z-index: 1;
}

.corner-flower img {
  display: block;
  width: 170px;
}

.flower-bottom-left {
  left: -25px;
  bottom: -25px;
}

.flower-top-left {
  top: -15px;
  left: -10px;
}

.flower-top-right {
  top: -10px;
  right: -15px;
}

.left-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
}

.left-content h2 {
  font-family: "Cormorant Garamond", serif;
  color: #b48b46;
  font-size: 44px;
  letter-spacing: 3px;
  margin-bottom: 18px;
}

.left-content h3 {
  font-family: "Great Vibes", cursive;
  font-size: 62px;
  color: #8d2d36;
  margin-bottom: 35px;
  font-weight: normal;
}

.left-content p {
  color: #5f5040;
  font-size: 18px;
  line-height: 1.9;
}

.left-content .strong {
  margin: 22px 0;
  color: #8f2f39;
  font-weight: 700;
  letter-spacing: 2px;
}

.paragraph {
  margin-top: 28px;
}

.right-page {
  display: flex;
}

.right-page .page-border {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.family-section {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 15px;
}

.family {
  flex: 1;
  text-align: center;
}

.family h4 {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  color: #8f2f39;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.family p {
  margin: 6px 0;
  font-size: 15px;
  color: #4e4337;
  font-weight: 600;
}

.family span {
  display: block;
  margin-top: 10px;
  color: #847460;
  font-size: 13px;
  line-height: 1.6;
}

.announce {
  margin: 35px 0 25px;
  text-align: center;
  font-size: 14px;
  color: #806a50;
  letter-spacing: 2px;
  line-height: 1.8;
  text-transform: uppercase;
}

.couple {
  position: relative;
  z-index: 2;
  text-align: center;
}

.groom,
.bride {
  font-family: "Great Vibes", cursive;
  font-size: 62px;
  font-weight: normal;
  color: #8b2735;
  line-height: 1.15;
}

.role {
  display: block;
  margin-top: 8px;
  color: #8a7862;
  font-size: 14px;
  letter-spacing: 1px;
}

.love-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 28px 0;
}

.love-divider span {
  width: 130px;
  height: 1px;
  background: linear-gradient(to right, transparent, #c8a55c, transparent);
}

.heart-group {
  color: #a22839;
  font-size: 22px;
  letter-spacing: 5px;
}

.event-section {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 30px;
}

.event-section h5 {
  font-size: 18px;
  color: #8f2f39;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 600;
}

.gold-line {
  width: 220px;
  height: 2px;
  margin: 0 auto 22px;
  background: linear-gradient(to right, transparent, #c8a55c, transparent);
}

.solar {
  font-size: 18px;
  font-weight: 700;
  color: #504334;
  letter-spacing: 1px;
}

.lunar {
  margin-top: 10px;
  color: #8c7a66;
  font-style: italic;
  font-size: 14px;
}

.book::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(255,255,255,.12), transparent 70%);
}

.page::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, rgba(255,255,255,.18), transparent 12%, transparent 88%, rgba(0,0,0,.05));
}

@media (max-width: 1100px) {
  .hero {
    padding: 16px;
  }

  .card {
    width: 100%;
    max-width: 550px;
    height: 90vh;
    min-height: 750px;
    transform-origin: left center;
  }

  .card.open .cover {
    transform: rotateY(-160deg);
  }

  .book-content {
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .book-content::before {
    display: none;
  }

  .page {
    flex: none;
    min-height: auto;
    padding: 20px 0;
  }

  .left-page {
    border-right: none;
    border-bottom: 1px dashed rgba(200,165,92,.4);
  }

  .right-page {
    border-left: none;
  }

  .page-border {
    position: relative;
    inset: 0 !important;
    margin: 10px;
    padding: 20px 14px;
    height: auto;
  }
  
  .page-border::before {
    inset: 6px;
  }

  .left-content {
    padding: 15px;
    height: auto;
  }

  .family-section {
    flex-direction: row;
    gap: 15px;
  }

  .left-content h2 { font-size: 26px; }
  .left-content h3 { font-size: 42px; margin-bottom: 15px; }
  .left-content p { font-size: 15px; }
  .left-content .strong { font-size: 15px; margin: 12px 0; }
  .paragraph { margin-top: 14px; }
  
  .announce { margin: 20px 0 15px; font-size: 12px; }
  .groom, .bride { font-size: 42px; }
  .love-divider { margin: 15px 0; }
  .love-divider span { width: 60px; }
  .event-section { margin-top: 15px; }
  .event-section h5 { font-size: 15px; margin-bottom: 10px; }
  .solar { font-size: 15px; }
  .lunar { font-size: 12px; }
  .gold-line { margin: 0 auto 12px; width: 160px; }

  .corner-flower img {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 8px;
  }
  
  .card {
    min-height: 680px;
  }

  .cover-card {
    padding: 15px;
  }

  .name-highlight {
    font-size: 32px;
  }

  .ring-icon .line {
    width: 45px;
  }

  .family-section {
    flex-direction: column;
    gap: 15px;
  }
  
  .left-content h3 { font-size: 36px; }
  .groom, .bride { font-size: 36px; }
}
</style>