<template>
  <section class="hero">

    <div class="card" :class="{ open: isOpen }" @click="openLetter">

      <div class="cover">
        <div class="cover-card">

          <p class="cover-title">WEDDING INVITATION</p>

          <div class="divider"></div>

          <div class="cover-preview">
            <p>Lê Hoàng Thiện</p>
            💍
            <p>Phan Linh</p>
          </div>

          <div class="divider"></div>

          <p class="hint" v-if="!isOpen">Click để mở thiệp</p>

        </div>
      </div>

      <!-- BOOK -->
      <div class="book">
        <div class="invitation-book">

          <div class="page left">

            <div class="top-layout">

              <div class="left-section">
                <div class="section">
                  <p class="title">NHÀ TRAI</p>
                  <p>ÔNG: LÊ XUYÊN TRUYỀN</p>
                  <p>BÀ: LÊ THỊ THANH NỮ</p>
                  <p class="addr">Xã Trung An, TP.Mỹ Tho, Tiền Giang</p>

                  <p class="title">NHÀ GÁI</p>
                  <p>ÔNG:</p>
                  <p>BÀ:</p>
                  <p class="addr">TP.Đà Lạt</p>
                </div>
              </div>

              <div class="right-section">
                <img src="/images/flower.png" alt="flower" />
              </div>

            </div>

            <div class="announce">
              TRÂN TRỌNG BÁO TIN LỄ TÂN QUY CỦA HAI CON CHÚNG TÔI
            </div>

            <div class="names">

              <div class="groom">
                <h2>Lê Hoàng Thiện</h2>
                <h4>Trưởng Nam</h4>
              </div>

              <div class="row-love">
                <img src="/images/rowlove.png" alt="love" />
              </div>

              <div class="bride">
                <h2>Phan Linh</h2>
                <h4>Thứ Nữ</h4>
              </div>

            </div>

            <div class="event">
              HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA
            </div>

            <div class="time">
              VÀO LÚC 11H00 - THỨ NĂM - 07.01.2027
              <br />
              Nhằm ngày 30 tháng 11 năm Bính Ngọ
            </div>

          </div>

          <div class="page right">
            <img src="/images/rightpage.png" class="bg-right" />
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const openLetter = () => {
  if (isOpen.value) return
  isOpen.value = true
}
</script>

<style scoped>
.hero {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f1ea;
  padding: 16px;
}

.card {
  width: 900px;
  max-width: 100%;
  min-height: 600px;
  position: relative;

  border-radius: 16px;
  overflow: hidden;
  background: #fff;

  box-shadow: 0 30px 80px rgba(0,0,0,0.15);
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


.card.open .cover {
  opacity: 0;
  transform: rotateY(-120deg);
  pointer-events: none;
}

.book {
  position: absolute;
  inset: 0;

  opacity: 0;
  transform: scale(0.98);
  transition: 1s ease;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.book::-webkit-scrollbar {
  display: none;
}

.card.open .book {
  opacity: 1;
  transform: scale(1);
}

.invitation-book {
  width: 100%;
  max-width: 900px;
  display: flex;
}

.page {
  flex: 1;
  min-width: 0;
}

.page.left {
  padding: 40px;
  background: #fffaf3;
  color: #4a3b2f;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page.right {
  display: flex;
}

.bg-right {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-layout {
  display: flex;
  gap: 16px;
  align-items: center;
}

.left-section {
  flex: 1;
  min-width: 0;
}

.right-section {
  flex: 0 0 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-section img {
  width: 100%;
  max-width: 140px;
  object-fit: contain;
}

.title {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
}

.section p {
  font-size: 13px;
  margin: 2px 0;
}

.addr {
  font-size: 12px;
  opacity: 0.7;
}

.announce {
  font-size: 13px;
  margin-top: 20px;
  letter-spacing: 1px;
}

.names {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.groom, .bride {
  flex: 1;
}

.groom { text-align: left; }
.bride { text-align: right; }

.row-love {
  width: 80px;
}

.row-love img {
  width: 100%;
  object-fit: contain;
}

.event {
  font-size: 13px;
  margin-top: 10px;
  border-bottom: 1px solid #000;
  display: inline-block;
}

.time {
  font-size: 12px;
  opacity: 0.8;
}

@media (max-width: 768px) {

  .page.left {
    padding: 20px 16px;
  }

  .invitation-book {
    flex-direction: column;
  }

  .right-section {
    flex: 0 0 80px;
  }

  .right-section img {
    max-width: 70px;
  }

  .top-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
  }

  .names {
    flex-direction: column;
    text-align: center;
  }

  .groom, .bride {
    text-align: center;
  }
}
</style>