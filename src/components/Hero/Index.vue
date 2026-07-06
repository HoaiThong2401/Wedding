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

            <div class="wedding-double-happiness">
              囍
            </div>

            <div class="cover-preview">

              <p class="cover-name">
                Lê Hoàng Thiện
              </p>

              <div class="ring-icon">

                <span class="line"></span>

                <span class="heart">
                  ❤
                </span>

                <span class="line"></span>

              </div>

              <p class="cover-name">
                Phan Linh
              </p>

            </div>

            <div class="cover-divider-bottom">
              ✿
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

                <div class="quote-section">
                  <p class="quote-text">
                    "Yêu không chỉ là một danh từ, đó là một hành trình dài của sự thấu hiểu và cùng nhau già đi."
                  </p>
                  <div class="gold-dot">✦</div>
                </div>

                <h2>
                  TRÂN TRỌNG KÍNH MỜI
                </h2>

                <h3>
                  Quý Vị và Các Bạn
                </h3>

                <div class="story-paragraph">
                  <p>
                    Sau những năm tháng cùng nhau đi qua giông bão và bình yên,
                  </p>
                  <p>
                    chúng con hiểu rằng mình đã tìm thấy một nửa trọn vẹn của cuộc đời.
                  </p>
                </div>

                <p class="strong">
                  ĐẾN THAM DỰ TIỆC MỪNG & CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
                </p>

                <div class="paragraph">
                  <p>
                    Sự hiện diện, những nụ cười và lời chúc phúc của Quý vị
                  </p>
                  <p>
                    chính là viên gạch đầu tiên xây nên tổ ấm vững chắc của hai con.
                  </p>
                </div>

                <div class="paragraph">
                  <p>
                    Sự đón tiếp nồng hậu trong ngày chung đôi này
                  </p>
                  <p>
                    là niềm vinh hạnh và hạnh phúc lớn lao nhất của gia đình.
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div class="page right-page">

            <div class="page-border">

              <div class="family-section">

                <div class="family">

                  <h4>NHÀ TRAI</h4>

                  <p class="parent-row">
                    ÔNG: LÊ XUYÊN TRUYỀN
                  </p>

                  <p class="parent-row">
                    BÀ: LÊ THỊ THANH NỮ
                  </p>

                  <span>
                    Mỹ Tho, Tiền Giang
                  </span>

                </div>

                <div class="family-center-divider">
                  <span class="line-top"></span>
                  <span class="wedding-icon">囍</span>
                  <span class="line-bottom"></span>
                </div>

                <div class="family">

                  <h4>NHÀ GÁI</h4>

                  <p class="parent-row empty">
                    &nbsp;
                  </p>

                  <p class="parent-row">
                    BÀ: [Họ tên Mẹ]
                  </p>

                  <span>
                    Đà Lạt, Lâm Đồng
                  </span>

                </div>

              </div>

              <p class="announce">

                TRÂN TRỌNG BÁO TIN LỄ TÂN HÔN CỦA HAI CON CHÚNG TÔI

              </p>

              <div class="couple">
                <div class="couple-grid">
                  
                  <div class="couple-cell">
                    <h1 class="person-name">Lê Hoàng Thiện</h1>
                  </div>
                  
                  <div class="couple-cell cell-center row-span-3">
                    <div class="interlocking-rings">
                      <div class="ring-shadow"></div>

                      <div class="ring groom-ring">
                        <div class="diamond-crown"></div>
                      </div>

                      <div class="ring bride-ring">
                        <div class="diamond-crown"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="couple-cell">
                    <h1 class="person-name">Phan Linh</h1>
                  </div>

                  <div class="couple-cell">
                    <span class="role">Trưởng Nam</span>
                  </div>
                  <div class="couple-cell">
                    <span class="role">Út Nữ</span>
                  </div>

                  <div class="couple-cell">
                    <span class="birthday">26.06.2000</span>
                  </div>
                  <div class="couple-cell">
                    <span class="birthday">26.06.2000</span>
                  </div>

                </div>
              </div>

              <div class="event-section">

                <h5>

                  HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA NHÀ TRAI

                </h5>

                <div class="gold-line"></div>

                <p class="solar">

                  VÀO LÚC 11h00 - THỨ NĂM - 07.01.2027

                </p>

                <p class="lunar">
                  (Nhằm ngày 30 tháng 11 năm Bính Ngọ)

                </p>

                <p class="lunar">
                  Tại: Ấp 3, Xã Trung An, Thành phố Mỹ Tho, Tỉnh Tiền Giang
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

.wedding-double-happiness {
  margin: 15px 0 10px;
  color: #a22939;
  font-size: 46px;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-weight: bold;
  line-height: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
}

.cover-divider-bottom {
  margin: 15px 0;
  color: #b78b43;
  font-size: 14px;
  opacity: 0.7;
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
  border-left: solid 1px rgba(188,162,104,.35);
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
  pointer-events: none;
}

.corner-flower img {
  display: block;
  width: 170px;
}

.flower-bottom-left {
  left: -25px;
  bottom: -25px;
}

.flower-bottom-left img {
  width: 95px;
}

.left-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 35px;
  text-align: center;
}

.quote-section {
  margin-bottom: 8px;
  max-width: 90%;
}

.quote-text {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 16px;
  color: #7c6853;
  line-height: 1.5;
  margin: 0;
}

.gold-dot {
  color: #b48b46;
  font-size: 11px;
  margin-top: 4px;
}

.left-content h2 {
  font-family: "Cormorant Garamond", serif;
  color: #b48b46;
  font-size: 40px;
  letter-spacing: 3px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.left-content h3 {
  font-family: "Great Vibes", cursive;
  font-size: 56px;
  color: #8d2d36;
  margin-bottom: 20px;
  font-weight: normal;
}

.cover-name {
  font-family: "Great Vibes", cursive;
  font-size: 56px;
  color: #8d2d36;
  margin-bottom: 20px;
  font-weight: normal;
}
.story-paragraph {
  margin-bottom: 15px;
}

.story-paragraph p {
  color: #6e5e4f;
  font-style: italic;
  font-size: 15px;
  line-height: 1.6;
  margin: 4px 0;
}

.left-content p {
  color: #5f5040;
  font-size: 16px;
  line-height: 1.7;
}

.left-content .strong {
  margin: 15px 0;
  color: #8f2f39;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 15px;
  width: 100%;
  max-width: 460px;
  word-break: break-word;
  line-height: 1.5;
}

.paragraph {
  margin-top: 14px;
}

.paragraph p {
  margin: 4px 0;
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
  gap: 15px;
  margin-top: 20px;
  padding: 0 10px;
}

.family {
  flex: 1;
  text-align: center;
}

.family-center-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 30px;
}

.family-center-divider .line-top,
.family-center-divider .line-bottom {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, #c8a55c, transparent);
}

.family-center-divider .wedding-icon {
  color: #b48b46;
  font-size: 18px;
  margin: 8px 0;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.85;
}

.parent-row {
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 0;
}

.parent-row.empty {
  visibility: hidden;
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
  margin: 20px 0 15px;
  text-align: center;
  font-size: 13px;
  color: #806a50;
  letter-spacing: 2px;
  line-height: 1.6;
  text-transform: uppercase;
}

.couple {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  box-sizing: border-box;
}

.couple-grid {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: center;
  row-gap: 4px;
}

.couple-cell {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cell-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-span-3 {
  grid-row: span 3;
}

.role {
  display: block;
  color: #8a7862;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
}

.interlocking-rings {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 54px;
  height: 40px;
}

.ring-shadow {
  position: absolute;
  bottom: 0px;
  left: 4px;
  width: 44px;
  height: 6px;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, transparent 70%);
  z-index: 0;
  filter: blur(1px);
}

.ring {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  background: transparent;
  box-sizing: border-box;
}

.groom-ring {
  left: 0;
  bottom: 4px;
  border: 3.5px solid transparent;
  background: 
    linear-gradient(#fdfbf8, #fdfbf8) padding-box,
    linear-gradient(135deg, #dfba6b 0%, #b48b46 45%, #f7efe4 70%, #9a7432 100%) border-box;
  transform: rotate(-15deg);
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.12);
  z-index: 3;
}

.bride-ring {
  right: 0;
  bottom: 6px;
  border: 3px solid transparent;
  background: 
    linear-gradient(#fdfbf8, #fdfbf8) padding-box,
    linear-gradient(135deg, #dfba6b 0%, #b48b46 45%, #f7efe4 70%, #9a7432 100%) border-box;
  transform: scale(0.88) rotate(15deg);
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.diamond-crown {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  border: 1px solid #b48b46;
  box-shadow: 
    0 0 6px #fff, 
    0 0 2px #b48b46,
    inset 1px 1px 1px rgba(255,255,255,0.8);
}

.event-section {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 20px;
}

.event-section h5 {
  font-size: 18px;
  color: #8f2f39;
  letter-spacing: 2px;
  margin-bottom: 15px;
  font-weight: 600;
}

.gold-line {
  width: 200px;
  height: 2px;
  margin: 0 auto 15px;
  background: linear-gradient(to right, transparent, #c8a55c, transparent);
}

.solar {
  font-size: 17px;
  font-weight: 700;
  color: #504334;
  letter-spacing: 1px;
}

.lunar {
  margin-top: 5px;
  color: #8c7a66;
  font-style: italic;
  font-size: 13px;
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

.person-name {
  font-family: "Great Vibes", serif;
  font-size: 42px;
  font-weight: 600;
  color: #8f2f39;
  line-height: 1.2;
  margin: 0;
  letter-spacing: .5px;
  word-break: break-word;
  text-align: center;
}

.birthday {
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  color: #9b8767;
  letter-spacing: 1px;
  text-align: center;
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
    display: flex;
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
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .left-page {
    border-right: none;
    border-bottom: 1px dashed rgba(200,165,92,.4);
  }

  .right-page {
    border-left: none;
  }

  .page-border {
    position: relative !important;
    inset: auto !important;
    margin: 12px !important;
    padding: 20px 8px !important;
    height: calc(100% - 24px) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    flex: 1;
  }
  
  .page-border::before {
    inset: 5px !important;
  }

  .flower-bottom-left {
    left: -20px;
    bottom: -20px;
  }

  .flower-bottom-left img {
    width: 80px;
  }

  .left-content {
    padding: 15px 5px;
    height: auto;
  }

  .quote-section {
    margin-bottom: 8px;
    max-width: 100%;
  }

  .quote-text {
    font-size: 14px;
  }

  .left-content h2 { 
    font-size: 18px; 
    white-space: nowrap;
    letter-spacing: 1px;
    margin-top: 6px; 
    margin-bottom: 4px; 
  }

  .left-content h3 { 
    font-size: 34px; 
    margin-bottom: 12px; 
  }
  
  .story-paragraph {
    margin-bottom: 10px;
  }
  
  .story-paragraph p {
    font-size: 13px;
  }

  .left-content p {
    font-size: 14px;
  }

  .left-content .strong {
    font-size: 13px;
    letter-spacing: 0px;
    margin: 10px 0;
    line-height: 1.4;
    white-space: normal;
  }

  .paragraph {
    margin-top: 10px;
  }

  .family-section {
    flex-direction: row !important;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    margin-top: 15px;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  .family-center-divider {
    display: flex !important;
    height: 70px;
    width: 16px;
    flex-direction: column !important;
    align-items: center;
  }

  .family-center-divider .line-top,
  .family-center-divider .line-bottom {
    width: 1px;
    height: auto;
    flex: 1;
    background: linear-gradient(to bottom, transparent, #c8a55c, transparent);
  }

  .family-center-divider .wedding-icon {
    margin: 4px 0;
    font-size: 14px;
  }

  .family {
    flex: 1;
    width: calc(50% - 10px);
  }

  .family h4 {
    font-size: 14px;
    white-space: nowrap;
    margin-bottom: 4px;
    letter-spacing: 1px;
  }

  .family p {
    font-size: 11px;
    white-space: nowrap;
    margin: 3px 0;
    letter-spacing: -0.2px;
  }

  .family span {
    font-size: 10px;
    margin-top: 4px;
    line-height: 1.3;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .announce { margin: 20px 0 15px; font-size: 11px; }
  .couple-grid { grid-template-columns: 1fr 45px 1fr; }
  .interlocking-rings { transform: scale(0.8); }
  .role { font-size: 12px; }
  .event-section { margin-top: 15px; }
  .event-section h5 { font-size: 14px; margin-bottom: 10px; }
  .solar { font-size: 14px; }
  .lunar { font-size: 11px; }
  .gold-line { margin: 0 auto 12px; width: 160px; }

  .parent-row {
    min-height: 18px;
    margin: 3px 0;
  }
}

@media (max-width: 480px) {
  .family-section {
    display: flex !important;
    flex-direction: row !important;
    gap: 4px;
    align-items: flex-start;
  }

  .name-highlight {
    font-size: 28px !important;   
    white-space: nowrap !important; 
    margin: 6px 0 !important;         
  }

  .parent-row {
    min-height: 18px;
    margin: 3px 0;
  }

  .person-name{
    font-size:28px;
  }

  .birthday{
    font-size:12px;
    margin-top:4px;
  }
}
</style>