<template>
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
</template>
<style scoped>
.invitation-book {
  width: min(100%, 900px);
  max-width: 900px;
  aspect-ratio: 3 / 2;
  display: flex;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: visible;
  background: #fff;
  margin: 0 auto;
}

.page {
  flex: 1 1 50%;
  min-width: 0;
}

.page.left {
  padding: 40px;
  background: #fffaf3;
  color: #4a3b2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.page.right {
  position: relative;
  display: flex;
  min-height: 0;
}

.bg-right {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.top-layout {
  display: flex;
  width: 100%;
  gap: 16px;
  min-height: 200px;
  align-items: center;
}

.left-section {
    flex: 1;
    min-width: 0;
}

.right-section {
  flex: 0 1 40%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-section img {
  width: 100%;
  max-width: 140px;
  height: auto;
  object-fit: contain;
  display: block;
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
  letter-spacing: 1px;
  margin-top: 20px;
}

.names {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  min-height: 140px;
  flex-wrap: wrap;
}

.groom,
.bride {
  flex: 1 1 0;
  min-width: 0;
}

.groom {
  text-align: left;
}

.bride {
  text-align: right;
}

.row-love {
  width: min(100px, 20vw);
  aspect-ratio: 5 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.row-love img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.event {
  font-size: 13px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  display: inline-block;
}

.time {
  font-size: 12px;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .invitation-book {
    aspect-ratio: auto;
  }

  .page.left {
    padding: 24px;
  }

  .top-layout {
    min-height: auto;
  }

  .names {
    min-height: auto;
    margin-top: 16px;
  }
}

@media (max-width: 768px) {
  .invitation-book {
    flex-direction: column;
    aspect-ratio: auto;
    overflow: visible;
    min-height: unset;
    height: auto;
  }

.page.left {
  padding: 20px 16px;
}
  .page {
    width: 100%;
    flex-basis: 100%;
  }

  .page.right {
    height: 240px;
    min-height: 240px;
  }

  .bg-right {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .top-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
  }

  .right-section img {
    width: 100%;
    max-width: 70px;
    height: auto;
    object-fit: contain;
  }
  .left-section {
    flex: 1;
    min-width: 0;
  }
  
  .right-section {
    flex: 0 0 70px;
  }
  .names {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .groom,
  .bride {
    text-align: center;
  }

  .row-love {
    width: 60px;
  }

  .event,
  .time {
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .page.left {
    padding: 18px;
  }

  .title {
    font-size: 12px;
  }

  .section p {
    font-size: 12px;
  }

  .announce {
    font-size: 12px;
  }

  .time {
    font-size: 11px;
  }
}
</style>