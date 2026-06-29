<template>
  <div class="event-card">

    <h3>💙 Lễ Thành Hôn</h3>

    <div class="event-content">

      <div class="event-left">

        <div class="event-info">
          <p><strong>Thời gian</strong></p>
          <span>09:00 - Thứ Năm</span>
          <span>07.01.2027</span>
        </div>

        <div class="event-info">
          <p><strong>Địa điểm</strong></p>
          <span>Tổ 4, Ấp 3, Xã Trung An, TP.Mỹ Tho, Tiền Giang</span>
        </div>

      </div>

      <a
        class="map-wrapper"
        href="https://www.google.com/maps?q=10.371986,106.324576"
        target="_blank"
      >
        <iframe
          src="https://www.google.com/maps?q=10.371986,106.324576&z=15&output=embed"
          loading="lazy"
        ></iframe>

        <div class="map-overlay">
          📍 Mở bản đồ
        </div>
      </a>

    </div>

  </div>
</template>

<style scoped>
.event-card{
  border-radius:20px;
  padding:45px;
  box-shadow:0 15px 40px rgba(0,0,0,.08);
}

.event-card h3{
  margin-bottom:30px;
  text-align:center;
}

.event-content{
  display:flex;
  gap:20px;
  align-items:stretch;
}

.event-left{
  flex:1;
}

.event-info{
  margin-bottom:25px;
}

.event-info p{
  margin-bottom:8px;
  color:#555;
}

.event-info span{
  display:block;
  color:#777;
  line-height:1.8;
}

.map-wrapper{
  flex:0 0 180px;
  aspect-ratio: 4 / 3;   

  position:relative;
  border-radius:14px;
  overflow:hidden;

  box-shadow:0 8px 20px rgba(0,0,0,.10);
  cursor:pointer;
  text-decoration:none;
}

.map-wrapper iframe{
  width:100%;
  height:100%;
  border:0;

  filter:grayscale(10%) contrast(1.05);
  transition:transform .3s ease;
}

.map-overlay{
  position:absolute;
  inset:0;

  display:flex;
  align-items:center;
  justify-content:center;

  background:rgba(0,0,0,.25);
  color:#fff;
  font-size:12px;

  opacity:0;
  transition:.25s;
}

.map-wrapper:hover iframe{
  transform:scale(1.05);
}

.map-wrapper:hover .map-overlay{
  opacity:1;
}
</style>