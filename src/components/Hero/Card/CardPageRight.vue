<template>
  <div class="book-page page-right">
    <!-- Khung viền ngoài màu đỏ đô đồng bộ 100% kích thước với bìa trái -->
    <div class="page-outer-red-frame">
      <!-- Nền bên trong giữ nguyên màu trà sữa ban đầu -->
      <div class="page-inner-milktea-card">

        <!-- Các góc hồi văn triện góc đồng bộ 100% như bên trái -->
        <div class="fret-corner tl">
          <svg viewBox="0 0 45 45" fill="none" stroke="#c8a55c">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.2" />
          </svg>
        </div>
        <div class="fret-corner tr">
          <svg viewBox="0 0 45 45" fill="none" stroke="#c8a55c">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.2" />
          </svg>
        </div>
        <div class="fret-corner bl">
          <svg viewBox="0 0 45 45" fill="none" stroke="#c8a55c">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.2" />
          </svg>
        </div>
        <div class="fret-corner br">
          <svg viewBox="0 0 45 45" fill="none" stroke="#c8a55c">
            <path d="M 0,45 L 0,0 L 45,0" stroke-width="2" />
            <path d="M 5,38 L 5,5 L 38,5 L 38,18 L 18,18 L 18,11 L 11,11 L 11,26 L 26,26 L 26,38 L 5,38" stroke-width="1.2" />
          </svg>
        </div>

        <!-- Cành hoa đào trang trí góc trên bên phải -->
        <img
          src="/images/cherry-blossom-branch.png"
          alt="Hoa đào"
          class="cherry-branch-tr"
        />

        <!-- Khối nội dung chính bên phải -->
        <div class="right-page-content">
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
              <h3 class="name-display">Hoàng Thiện</h3>
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
              <h3 class="name-display">Phan Linh</h3>
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
  </div>
</template>

<script setup>
</script>

<style scoped>
.book-page.page-right {
  flex: 1;
  position: relative;
  background: #7a1219;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.page-outer-red-frame {
  width: 100%;
  height: 100%;
  background: #7a1219;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
}

/* Nền bên trong màu trà sữa ban đầu - Kích thước & padding đồng bộ 100% với bìa trái */
.page-inner-milktea-card {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ffffff 0%, #fdf8f0 60%, #faf4ea 100%);
  border: 1px solid rgba(200, 165, 92, 0.7);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0 0 35px rgba(200, 165, 92, 0.08);
  border-radius: 7px;
}

/* Hồi văn triện góc đồng bộ như bên trái */
.fret-corner {
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
  z-index: 4;
}

.fret-corner.tl { top: 8px; left: 8px; }
.fret-corner.tr { top: 8px; right: 8px; transform: scaleX(-1); }
.fret-corner.bl { bottom: 8px; left: 8px; transform: scaleY(-1); }
.fret-corner.br { bottom: 8px; right: 8px; transform: scale(-1); }

/* Cành hoa đào trang trí góc trên bên phải */
.cherry-branch-tr {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 130px;
  height: 130px;
  object-fit: contain;
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: multiply;
  opacity: 0.82;
}

/* Khối nội dung chính bên phải */
.right-page-content {
  position: relative;
  z-index: 5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 4px 6px;
}

.parents-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.parent-side {
  flex: 1;
}

.parent-side.bride-side {
  position: relative;
  z-index: 3;
}

.parent-side.bride-side .parent-name,
.parent-side.bride-side .hometown {
  text-shadow: 0 0 3px rgba(253, 248, 240, 0.9);
}

.family-badge {
  display: inline-block;
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #8f2e36;
  margin-bottom: 3px;
  border-bottom: 1px solid #c8a55c;
  padding-bottom: 2px;
}

.parent-name {
  font-size: 12px;
  color: #4e4337;
  margin: 1px 0;
  line-height: 1.35;
  min-height: 1.35em;
}

.parent-name strong {
  font-weight: 600;
  color: #2e261f;
}

.parent-name.empty-placeholder {
  visibility: hidden;
  min-height: 1.35em;
}

.hometown {
  display: block;
  font-size: 11px;
  color: #847460;
  margin-top: 1px;
}

.family-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 44px;
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
  font-size: 14px;
  margin: 2px 0;
}

.wedding-announcement {
  font-size: 10px;
  letter-spacing: 1.2px;
  color: #806a50;
  font-weight: 600;
  text-transform: uppercase;
  margin: 3px 0;
}

.right-chibi-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0 4px;
}

.chibi-halo-right {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(223, 186, 115, 0.3) 0%, rgba(223, 186, 115, 0.08) 55%, transparent 75%);
  pointer-events: none;
  animation: chibiGlowRight 4s ease-in-out infinite alternate;
}

.right-chibi-img {
  height: 95px;
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
  background: rgba(200, 165, 92, 0.08);
  border: 1px dashed rgba(200, 165, 92, 0.45);
  border-radius: 8px;
  padding: 6px 12px;
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
  font-size: 10.5px;
  color: #8a7862;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.rings-union {
  display: flex;
  align-items: center;
  position: relative;
  width: 36px;
  height: 22px;
}

.ring-gold {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2.2px solid #dfba73;
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
  background: #ffffff;
  border: 1.5px solid rgba(200, 165, 92, 0.45);
  border-radius: 10px;
  padding: 10px 14px;
  margin-top: 4px;
  box-shadow: 0 4px 15px rgba(74, 59, 47, 0.08);
}

.ceremony-title {
  font-family: var(--font-serif);
  font-size: 13px;
  letter-spacing: 1px;
  color: #8f2e36;
  margin: 0 0 4px;
  font-weight: 700;
}

.gold-separator {
  width: 36px;
  height: 1px;
  background: #c8a55c;
  margin: 0 auto 5px;
}

.solar-time {
  font-size: 12.5px;
  color: #4a3b2f;
  line-height: 1.3;
}

.date-large {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: #8f2e36;
  letter-spacing: 1.5px;
  margin: 2px 0;
}

.lunar-time {
  font-size: 11px;
  color: #7a6b5c;
  font-style: italic;
  margin-bottom: 3px;
}

.venue-address {
  font-size: 12px;
  color: #4a3b2f;
  font-weight: 500;
  line-height: 1.35;
}

.pin-icon {
  color: #a23946;
}

.schedule-content-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
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
  padding: 4px 11px;
  background: linear-gradient(135deg, #ffffff 0%, #faf3e6 100%);
  border: 1.5px solid #c8a55c;
  border-radius: 50px;
  color: #8f2e36;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(200, 165, 92, 0.2);
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
  font-size: 13px;
  line-height: 1;
  transition: transform 0.4s ease;
}

.btn-mini-direction:hover .direction-compass {
  transform: rotate(45deg) scale(1.15);
}

.direction-text {
  font-family: var(--font-serif);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1;
}

.direction-arrow {
  font-size: 10px;
  font-weight: bold;
  color: #c8a55c;
  transition: all 0.3s ease;
}

.btn-mini-direction:hover .direction-arrow {
  color: #ffd778;
  transform: translate(2px, -2px);
}

/* Responsive: Mobile & Tablet */
@media (max-width: 992px) {
  .book-page.page-right {
    padding: 6px;
    height: 100%;
  }

  .page-outer-red-frame {
    padding: 4px;
    border-radius: 4px;
  }

  .page-inner-milktea-card {
    padding: 12px 14px;
    height: 100%;
    border-radius: 7px;
  }

  .cherry-branch-tr {
    width: 105px;
    height: 105px;
    top: -8px;
    right: -8px;
    opacity: 0.78;
  }

  .right-chibi-img {
    height: 85px;
  }
}

@media (max-width: 576px) {
  .book-page.page-right {
    padding: 4px;
    height: 100%;
  }

  .page-outer-red-frame {
    padding: 4px;
  }

  .page-inner-milktea-card {
    padding: 8px 8px;
    height: 100%;
    border-radius: 7px;
  }

  .cherry-branch-tr {
    width: 72px;
    height: 72px;
    top: -5px;
    right: -5px;
    opacity: 0.72;
  }

  .fret-corner {
    width: 24px;
    height: 24px;
  }

  .fret-corner.tl { top: 5px; left: 5px; }
  .fret-corner.tr { top: 5px; right: 5px; }
  .fret-corner.bl { bottom: 5px; left: 5px; }
  .fret-corner.br { bottom: 5px; right: 5px; }

  .right-page-content {
    height: 100%;
    justify-content: space-evenly;
    padding: 2px 2px;
  }

  .parents-section {
    flex-direction: row;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 2px;
  }

  .family-badge {
    font-size: 11.5px;
    letter-spacing: 1px;
    margin-bottom: 2px;
    padding-bottom: 1px;
  }

  .parent-name {
    font-size: 11px;
    line-height: 1.25;
    min-height: 1.25em;
    margin: 1px 0;
  }

  .parent-name.empty-placeholder {
    visibility: hidden;
    min-height: 1.25em;
  }

  .hometown {
    font-size: 10px;
    margin-top: 1px;
  }

  .family-divider {
    height: 40px;
    width: 16px;
  }

  .div-symbol {
    font-size: 13px;
    margin: 1px 0;
  }

  .wedding-announcement {
    font-size: 9.5px;
    letter-spacing: 1px;
    margin: 2px 0 2px;
  }

  .right-chibi-wrap {
    margin: 2px 0;
  }

  .right-chibi-img {
    height: 75px;
  }

  .chibi-halo-right {
    width: 84px;
    height: 84px;
  }

  .couple-highlight-box {
    flex-direction: row;
    padding: 5px 8px;
    gap: 8px;
    margin: 2px 0;
  }

  .name-display {
    font-size: 24px;
    line-height: 1.15;
  }

  .rank-title {
    font-size: 10px;
  }

  .rings-union {
    width: 32px;
    height: 20px;
  }

  .ring-gold {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }

  .ceremony-schedule-card {
    padding: 8px 10px;
    margin-top: 2px;
    border: 1.5px solid rgba(200, 165, 92, 0.45);
    border-radius: 8px;
    box-shadow: 0 3px 12px rgba(74, 59, 47, 0.08);
  }

  .ceremony-title {
    font-size: 12px;
    letter-spacing: 0.8px;
    margin: 0 0 3px;
    line-height: 1.25;
    font-weight: 700;
  }

  .gold-separator {
    width: 32px;
    height: 1px;
    margin: 0 auto 4px;
  }

  .schedule-content-layout {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .schedule-info {
    text-align: center;
    flex: 1;
  }

  .solar-time {
    font-size: 11.5px;
    line-height: 1.25;
  }

  .date-large {
    font-size: 18px;
    letter-spacing: 1px;
    margin: 1.5px 0;
  }

  .lunar-time {
    font-size: 10.5px;
    margin-bottom: 2px;
  }

  .venue-address {
    font-size: 11px;
    line-height: 1.3;
    font-weight: 500;
  }

  .schedule-direction-wrap {
    flex-shrink: 0;
  }

  .btn-mini-direction {
    padding: 5px 10px;
    gap: 4px;
  }

  .direction-text {
    font-size: 11px;
    font-weight: 700;
  }

  .direction-compass {
    font-size: 13px;
  }

  .direction-arrow {
    font-size: 10px;
  }
}
</style>
