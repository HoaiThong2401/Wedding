<template>
  <div class="event-card">
    <div class="card-title-group">
      <div class="mini-line"></div>
      <h3>💙 Lễ Thành Hôn</h3>
      <div class="mini-line"></div>
    </div>

    <div class="event-content">
      <div class="event-grid">
        <div class="event-info">
          <p class="info-label">THỜI GIAN</p>
          <div class="info-detail highlight-text">09:00 — Thứ Năm</div>
          <div class="info-sub">Ngày 07 tháng 01 năm 2027</div>
        </div>

        <div class="event-info">
          <p class="info-label">ĐỊA ĐIỂM</p>
          <div class="info-detail">Tổ 4, Ấp 3, Xã Trung An</div>
          <div class="info-sub">TP.Mỹ Tho, Tỉnh Tiền Giang</div>
        </div>
      </div>

      <a
        class="map-wrapper"
        href="https://www.google.com/maps?q=10.371986,106.324576"
        target="_blank"
      >
        <div class="map-border-inner">
          <iframe
            src="https://www.google.com/maps?q=10.371986,106.324576&z=15&output=embed"
            loading="lazy"
          ></iframe>
          <div class="map-overlay">
            <span class="map-btn">
              <span class="icon">📍</span> Chỉ đường trên Google Maps
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  border: 1px solid rgba(179, 139, 77, 0.2);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(74, 59, 47, 0.05);
  max-width: 650px;
  margin: 0 auto;
}

.card-title-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 35px;
}

.card-title-group .mini-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.event-card h3 {
  font-family: serif;
  font-size: 22px;
  font-weight: 600;
  color: #a23946;
  margin: 0;
  letter-spacing: 0.5px;
}

.event-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.event-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.event-info {
  text-align: center;
  padding: 0 10px;
}

.event-info:first-child {
  border-right: 1px solid rgba(179, 139, 77, 0.15);
}

.info-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #b38b4d;
  margin: 0 0 10px 0;
}

.info-detail {
  font-size: 15px;
  font-weight: 500;
  color: #4a3b2f;
  line-height: 1.4;
  margin-bottom: 4px;
}

.highlight-text {
  color: #a23946;
  font-weight: 600;
}

.info-sub {
  font-size: 13px;
  color: #7a6b5c;
  opacity: 0.85;
}

.map-wrapper {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 7;
  position: relative;
  border: 1px solid #b38b4d;
  border-radius: 12px;
  padding: 4px;
  box-sizing: border-box;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(74, 59, 47, 0.06);
}

.map-border-inner {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  filter: sepia(10%) contrast(0.95);
  transition: transform 0.4s ease;
}

.map-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 59, 47, 0.15);
  backdrop-filter: blur(1px);
  transition: all 0.3s ease;
}

.map-btn {
  border: 1px solid #b38b4d;
  color: #a23946;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.map-wrapper:hover iframe {
  transform: scale(1.03);
}

.map-wrapper:hover .map-overlay {
  background: rgba(74, 59, 47, 0.25);
  backdrop-filter: blur(0px);
}

.map-wrapper:hover .map-btn {
  background: #a23946;
  border-color: #a23946;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(162, 57, 70, 0.25);
}

@media (max-width: 600px) {
  .event-card {
    padding: 30px 20px;
  }

  .event-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .event-info:first-child {
    border-right: none;
    border-bottom: 1px solid rgba(179, 139, 77, 0.15);
    padding-bottom: 20px;
  }

  .map-wrapper {
    aspect-ratio: 4 / 3;
  }
  
  .map-btn {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>