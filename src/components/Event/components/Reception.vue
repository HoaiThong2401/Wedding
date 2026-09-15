<template>
  <div class="event-card">
    <div class="event-card-header">
      <div class="header-line"></div>
      <h3 class="event-type-title">
        <span class="ornament">✧</span>
        Tiệc Cưới
        <span class="ornament">✧</span>
      </h3>
      <div class="header-line"></div>
    </div>

    <div class="event-card-body">
      <div class="info-grid">
        <div class="info-cell">
          <div class="cell-icon">🥂</div>
          <span class="cell-label">THỜI GIAN</span>
          <p class="cell-primary">11:00 — Thứ Năm</p>
          <p class="cell-secondary">Ngày 07 / 01 / 2027</p>
          <span class="cell-lunar">(Khai tiệc mừng chung vui)</span>
        </div>

        <div class="info-cell">
          <div class="cell-icon">📍</div>
          <span class="cell-label">ĐỊA ĐIỂM</span>
          <p class="cell-primary">Tư Gia Nhà Trai</p>
          <p class="cell-secondary">Tổ 4, Ấp 3, Xã Trung An</p>
          <span class="cell-lunar">TP. Mỹ Tho, Tỉnh Tiền Giang</span>
        </div>
      </div>

      <!-- Nút dẫn đường -->
      <div class="action-container">
        <a
          class="btn-open-map"
          href="https://www.google.com/maps?q=10.371986,106.324576"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="pin-symbol">🧭</span>
          <span>Mở Chỉ Đường Trên Google Maps</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 165, 92, 0.35);
  border-radius: var(--radius-md);
  padding: 35px 28px;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-gold);
  border-color: rgba(200, 165, 92, 0.6);
  background: #ffffff;
}

.event-card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
}

.header-line {
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a55c, transparent);
}

.event-type-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 600;
  color: var(--wine-red);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ornament {
  color: var(--primary-gold);
  font-size: 14px;
}

.event-card-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: rgba(200, 165, 92, 0.06);
  border-radius: 12px;
  padding: 20px 14px;
  border: 1px dashed rgba(200, 165, 92, 0.3);
}

.info-cell {
  text-align: center;
}

.info-cell:first-child {
  border-right: 1px solid rgba(200, 165, 92, 0.2);
}

.cell-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.cell-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--primary-gold-dark);
  display: block;
  margin-bottom: 6px;
}

.cell-primary {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 700;
  color: var(--wine-red);
  margin: 0 0 2px;
}

.cell-secondary {
  font-size: 13.5px;
  color: var(--text-main);
  margin: 0 0 2px;
  font-weight: 500;
}

.cell-lunar {
  font-size: 12px;
  color: var(--text-muted);
  font-style: italic;
  display: block;
}

.action-container {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.btn-open-map {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: #ffffff;
  border: 1px solid var(--primary-gold);
  color: var(--wine-red);
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.btn-open-map:hover {
  background: var(--wine-red);
  border-color: var(--wine-red);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: var(--shadow-wine);
}

@media (max-width: 576px) {
  .event-card {
    padding: 24px 16px;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-cell:first-child {
    border-right: none;
    border-bottom: 1px solid rgba(200, 165, 92, 0.2);
    padding-bottom: 16px;
  }
}
</style>