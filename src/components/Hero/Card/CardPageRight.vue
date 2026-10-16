<template>
  <div class="book-page page-right">
    <div class="page-ornament-border">
      <div class="right-page-body">
        <div class="parents-section">
          <div class="parent-side groom-side">
            <span class="family-badge">NHÀ TRAI</span>
            <p class="parent-name">Ông: <strong>Lê Xuyên Truyền</strong></p>
            <p class="parent-name">Bà: <strong>Lê Thị Thanh Nữ</strong></p>
            <span class="hometown">Phường Trung An, Tỉnh Đồng Tháp</span>
          </div>

          <div class="family-divider">
            <span class="div-line"></span>
            <span class="div-symbol">囍</span>
            <span class="div-line"></span>
          </div>

          <div class="parent-side bride-side">
            <span class="family-badge">NHÀ GÁI</span>
            <p class="parent-name empty-placeholder">&nbsp;</p>
            <p class="parent-name">Bà: <strong>Đỗ Thị Vinh</strong></p>
            <span class="hometown">Sao Mai, Quảng Lập, Lâm Đồng</span>
          </div>
        </div>

        <div class="wedding-announcement">
          <span>TRÂN TRỌNG BÁO TIN LỄ TÂN HÔN CỦA HAI CON</span>
        </div>

        <!-- Chibi Couple Illustration -->
        <div class="right-chibi-wrap">
          <div class="chibi-halo-right"></div>
          <img
            src="/images/anh_icon.png"
            alt="Cô dâu chú rể Hoàng Thiện & Phan Linh"
            class="right-chibi-img"
          />
        </div>

        <div class="couple-highlight-box">
          <div class="couple-person">
            <h3 class="name-display">Lê Hoàng Thiện</h3>
            <span class="rank-title">Trưởng Nam</span>
          </div>

          <div class="rings-union">
            <div class="ring-gold ring-left">
              <div class="diamond-sparkle"></div>
            </div>
            <div class="ring-gold ring-right">
              <div class="diamond-sparkle"></div>
            </div>
          </div>

          <div class="couple-person">
            <h3 class="name-display">Phan Thị Linh</h3>
            <span class="rank-title">Út Nữ</span>
          </div>
        </div>

        <div class="ceremony-schedule-card">
          <h4 class="ceremony-title">HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA NHÀ TRAI</h4>
          <div class="gold-separator"></div>

          <div class="schedule-content-layout">
            <div class="schedule-info">
              <div class="solar-time">
                VÀO LÚC <strong>11:00 — THỨ TƯ</strong>
                <div class="date-large">06 . 01 . 2027</div>
              </div>

              <div class="lunar-time">
                (Nhằm ngày 29 tháng 11 năm Bính Ngọ)
              </div>

              <div class="venue-address">
                <span class="pin-icon">📍</span>
                Phường Trung An, Tỉnh Đồng Tháp
              </div>
            </div>

            <div class="schedule-direction-wrap">
              <a
                href="https://maps.app.goo.gl/yAcU4wFFd8jT2qM46"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-mini-direction"
                title="Chỉ dẫn đường đi trên Google Maps"
                @click.stop
              >
                <span class="direction-compass">🧭</span>
                <span class="direction-text">Chỉ Đường</span>
                <span class="direction-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.book-page {
  flex: 1;
  position: relative;
  background: radial-gradient(circle at center, #ffffff 0%, #faf4ea 100%);
  padding: 12px;
  box-sizing: border-box;
}

.page-right {
  border-left: 1px solid rgba(200, 165, 92, 0.3);
}

.page-ornament-border {
  width: 100%;
  height: 100%;
  border: 1.5px solid #c8a55c;
  padding: 16px 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-ornament-border::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid rgba(200, 165, 92, 0.4);
  pointer-events: none;
}

.right-page-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.parents-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.parent-side {
  flex: 1;
}

.family-badge {
  display: inline-block;
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #8f2e36;
  margin-bottom: 4px;
  border-bottom: 1px solid #c8a55c;
  padding-bottom: 2px;
}

.parent-name {
  font-size: 12.5px;
  color: #4e4337;
  margin: 2px 0;
}

.parent-name strong {
  font-weight: 600;
}

.parent-name.empty-placeholder {
  visibility: hidden;
}

.hometown {
  display: block;
  font-size: 11.5px;
  color: #847460;
  margin-top: 2px;
}

.family-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 20px;
}

.div-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, #c8a55c, transparent);
}

.div-symbol {
  font-family: var(--font-serif);
  color: #c8a55c;
  font-size: 15px;
  margin: 3px 0;
}

.wedding-announcement {
  font-size: 10.5px;
  letter-spacing: 1.5px;
  color: #806a50;
  font-weight: 600;
  text-transform: uppercase;
  margin: 5px 0;
}

.right-chibi-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0 6px;
}

.chibi-halo-right {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(223, 186, 115, 0.3) 0%, rgba(223, 186, 115, 0.08) 55%, transparent 75%);
  pointer-events: none;
  animation: chibiGlowRight 4s ease-in-out infinite alternate;
}

.right-chibi-img {
  height: 110px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 6px 14px rgba(74, 59, 47, 0.22));
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.right-chibi-img:hover {
  transform: scale(1.05);
}

@keyframes chibiGlowRight {
  0% { transform: scale(0.95); opacity: 0.6; }
  100% { transform: scale(1.05); opacity: 1; }
}

.couple-highlight-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(200, 165, 92, 0.07);
  border: 1px dashed rgba(200, 165, 92, 0.4);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 2px 0;
}

.couple-person {
  flex: 1;
}

.name-display {
  font-family: var(--font-script);
  font-size: 28px;
  color: #8f2e36;
  margin: 0;
  line-height: 1.15;
}

.rank-title {
  display: block;
  font-size: 11px;
  color: #8a7862;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.rings-union {
  display: flex;
  align-items: center;
  position: relative;
  width: 38px;
  height: 24px;
}

.ring-gold {
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 2.5px solid #dfba73;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.ring-left { left: 2px; }
.ring-right { right: 2px; }

.diamond-sparkle {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 4px #fff, 0 0 8px #dfba73;
}

.ceremony-schedule-card {
  background: #fff;
  border: 1px solid rgba(200, 165, 92, 0.3);
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 4px;
}

.ceremony-title {
  font-family: var(--font-serif);
  font-size: 12px;
  letter-spacing: 1px;
  color: #8f2e36;
  margin: 0 0 4px;
  font-weight: 700;
}

.gold-separator {
  width: 36px;
  height: 1px;
  background: #c8a55c;
  margin: 0 auto 6px;
}

.solar-time {
  font-size: 12.5px;
  color: #4a3b2f;
}

.date-large {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 700;
  color: #8f2e36;
  letter-spacing: 1.5px;
  margin: 1px 0;
}

.lunar-time {
  font-size: 11px;
  color: #7a6b5c;
  font-style: italic;
  margin-bottom: 3px;
}

.venue-address {
  font-size: 11.5px;
  color: #4a3b2f;
  font-weight: 500;
}

.pin-icon {
  color: #a23946;
}

.schedule-content-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.schedule-info {
  flex: 1;
  text-align: center;
}

.schedule-direction-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-mini-direction {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: linear-gradient(135deg, #ffffff 0%, #faf3e6 100%);
  border: 1.5px solid #c8a55c;
  border-radius: 50px;
  color: #8f2e36;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(200, 165, 92, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  white-space: nowrap;
}

.btn-mini-direction:hover {
  background: linear-gradient(135deg, #8f2e36 0%, #a23946 100%);
  border-color: #8f2e36;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(143, 46, 54, 0.35);
}

.direction-compass {
  font-size: 14px;
  line-height: 1;
  transition: transform 0.4s ease;
}

.btn-mini-direction:hover .direction-compass {
  transform: rotate(45deg) scale(1.15);
}

.direction-text {
  font-family: var(--font-serif);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1;
}

.direction-arrow {
  font-size: 11px;
  font-weight: bold;
  color: #c8a55c;
  transition: all 0.3s ease;
}

.btn-mini-direction:hover .direction-arrow {
  color: #ffd778;
  transform: translate(2px, -2px);
}

@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.08); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}

@media (max-width: 992px) {
  .page-right {
    border-left: none;
  }

  .right-chibi-img {
    height: 100px;
  }
}

@media (max-width: 576px) {
  .page-ornament-border {
    padding: 16px 12px;
  }

  .right-chibi-wrap {
    margin: 2px 0 4px;
  }

  .right-chibi-img {
    height: 88px;
  }

  .chibi-halo-right {
    width: 92px;
    height: 92px;
  }

  .parents-section {
    flex-direction: column;
    gap: 12px;
  }

  .family-divider {
    height: 20px;
    flex-direction: row;
    width: 60px;
  }

  .div-line {
    height: 1px;
    width: auto;
  }

  .couple-highlight-box {
    flex-direction: column;
    gap: 8px;
  }

  .name-display {
    font-size: 26px;
  }

  .schedule-content-layout {
    flex-direction: column;
    gap: 10px;
  }

  .schedule-direction-wrap {
    width: 100%;
  }

  .btn-mini-direction {
    width: 100%;
    justify-content: center;
    padding: 9px 14px;
  }
}
</style>
