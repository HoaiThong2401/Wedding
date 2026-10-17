<template>
  <div class="book-page page-left">
    <!-- Outer burgundy margin framing the card as in reference image -->
    <div class="page-outer-red-frame">
      <div class="page-inner-cream-card">
        
        <!-- Corner Fretwork (Hồi văn triện góc truyền thống màu vàng gold) -->
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

        <!-- Delicate Cherry Blossom Watercolor Accent (Hoa đào trắng hồng góc dưới bên trái) -->
        <img
          src="/images/cherry-blossom-cluster.png"
          alt="Hoa đào"
          class="cherry-cluster-deco bl"
        />

        <!-- Inner Content Area -->
        <div class="left-page-content">
          <!-- Red Double Happiness Character (囍) -->
          <div class="symbol-double-happiness-red">
            <span class="symbol-char">囍</span>
          </div>

          <div class="invitation-header-tag">
            <span class="txt-invite-badge">TRÂN TRỌNG KÍNH MỜI</span>
          </div>

          <div class="invitation-core-message">
            <p class="invite-msg-lead">
              ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
            </p>
            <p class="invite-msg-venue-intro">TẠI</p>
            <h2 class="venue-grand-name">Tư Gia Nhà Trai</h2>
            <p class="venue-detailed-address">Ấp 3, Xã Trung An, TP. Mỹ Tho, Tỉnh Tiền Giang (nay: P. Trung An, Tỉnh Đồng Tháp)</p>
          </div>

          <!-- Iconic Date & Time Layout as in Reference Image -->
          <div class="wedding-datetime-box">
            <div class="datetime-lead-text">VÀO LÚC</div>
            <div class="datetime-grid-display">
              <div class="time-col">
                <span class="time-main">11 GIỜ 00</span>
              </div>
              <div class="sep-line"></div>
              <div class="day-col">
                <span class="day-number">06</span>
                <span class="year-label">NĂM 2027</span>
              </div>
              <div class="sep-line"></div>
              <div class="month-col">
                <span class="month-main">THÁNG 01</span>
              </div>
            </div>
            <div class="lunar-date-sub">
              Nhằm ngày 29 tháng 11 năm Bính Ngọ
            </div>
          </div>

          <!-- Closing Courtesies -->
          <div class="invitation-footer-courtesy">
            <p class="courtesy-p1">Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình chúng tôi.</p>
            <p class="courtesy-p2">Rất hân hạnh được đón tiếp!</p>
            <p class="courtesy-sign">Kính mời</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.book-page.page-left {
  position: relative;
  background: #7a1219;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

.page-inner-cream-card {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ffffff 0%, #fefcf7 60%, #fdf5ea 100%);
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

/* Fret Corners */
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

/* Cherry Blossom Watercolor Sprigs */
.cherry-cluster-deco {
  position: absolute;
  pointer-events: none;
  z-index: 3;
  width: 110px;
  height: 110px;
  object-fit: contain;
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.cherry-cluster-deco.bl {
  bottom: -15px;
  left: -15px;
}

/* Content Layout */
.left-page-content {
  position: relative;
  z-index: 5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 4px 6px;
}

/* Red Double Happiness Symbol */
.symbol-double-happiness-red {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 2px;
}

.symbol-char {
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 700;
  line-height: 1;
  color: #8c1822;
  text-shadow: 0 1px 2px rgba(140, 24, 34, 0.15);
}

.invitation-header-tag {
  margin: 2px 0 6px;
}

.txt-invite-badge {
  font-family: var(--font-serif);
  font-size: 13.5px;
  letter-spacing: 2.8px;
  font-weight: 700;
  color: #7a1219;
  text-transform: uppercase;
  border-bottom: 1px solid #d4af37;
  padding-bottom: 3px;
  display: inline-block;
}

/* Core Message */
.invitation-core-message {
  margin: 2px 0;
}

.invite-msg-lead {
  font-family: var(--font-serif);
  font-size: 11.5px;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: #554433;
  margin-bottom: 3px;
  text-transform: uppercase;
  line-height: 1.4;
}

.invite-msg-venue-intro {
  font-size: 11px;
  letter-spacing: 2px;
  color: #8c765c;
  margin-bottom: 2px;
  font-weight: 500;
}

.venue-grand-name {
  font-family: var(--font-script);
  font-size: 40px;
  line-height: 1.1;
  color: #8c1822;
  font-weight: normal;
  margin: 1px 0 3px;
  text-shadow: 0 1px 3px rgba(140, 24, 34, 0.12);
}

.venue-detailed-address {
  font-size: 12px;
  color: #5f5040;
  line-height: 1.45;
  margin: 0 auto;
  max-width: 90%;
}

/* Date and Time Box - Exact recreation of the reference photo */
.wedding-datetime-box {
  background: rgba(200, 165, 92, 0.07);
  border-top: 1px solid rgba(200, 165, 92, 0.5);
  border-bottom: 1px solid rgba(200, 165, 92, 0.5);
  padding: 8px 10px;
  margin: 4px 0;
}

.datetime-lead-text {
  font-family: var(--font-serif);
  font-size: 10.5px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #7a1219;
  margin-bottom: 3px;
}

.datetime-grid-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.time-col, .month-col {
  flex: 1;
  text-align: center;
}

.time-main, .month-main {
  font-family: var(--font-serif);
  font-size: 13.5px;
  font-weight: 700;
  color: #554433;
  letter-spacing: 1px;
}

.sep-line {
  width: 1px;
  height: 38px;
  background: #c8a55c;
}

.day-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}

.day-number {
  font-family: var(--font-serif);
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  color: #8c1822;
  letter-spacing: 1px;
}

.year-label {
  font-family: var(--font-serif);
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #8c765c;
  font-weight: 600;
  margin-top: 2px;
}

.lunar-date-sub {
  font-size: 11px;
  font-style: italic;
  color: #7e6f5f;
  margin-top: 4px;
}

/* Courtesy Footer */
.invitation-footer-courtesy {
  margin-top: 2px;
}

.courtesy-p1 {
  font-size: 11.5px;
  color: #635343;
  line-height: 1.4;
  margin-bottom: 2px;
}

.courtesy-p2 {
  font-size: 11px;
  font-style: italic;
  color: #8c765c;
  margin-bottom: 2px;
}

.courtesy-sign {
  font-family: var(--font-serif);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #8c1822;
}

@media (max-width: 992px) {
  /* When hidden on mobile this won't show anyway, but keep clean fallback */
  .book-page.page-left {
    display: none !important;
  }
}
</style>
