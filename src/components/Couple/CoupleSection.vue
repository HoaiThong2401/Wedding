<template>
  <section class="couple-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">Bride & Groom</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Cô Dâu & Chú Rể</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="row align-items-stretch gy-5">
        <div class="col-6">
          <div class="person-card">
            <div class="avatar-wrapper">
              <div class="avatar">
                <img src="/images/avatar_nam.jpg" alt="Groom">
              </div>
            </div>
            <span class="role">CHÚ RỂ</span>
            <h3 class="name">Hoàng Thiện</h3>
            <div class="parent-info">
              <p>Con ông: <span>Lê Xuyên Truyền</span></p>
              <p>Con bà: <span>Lê Thị Thanh Nữ</span></p>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="person-card">
            <div class="avatar-wrapper">
              <div class="avatar">
                <img src="/images/avatar_nu.jpg" alt="Bride">
              </div>
            </div>
            <span class="role">CÔ DÂU</span>
            <h3 class="name">Phan Linh</h3>
            <div class="parent-info">
              <p>Con ông: <span>[Họ tên Bố]</span></p>
              <p>Con bà: <span>[Họ tên Mẹ]</span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.couple-section {
  padding: 80px 16px;
}

.section-title {
  margin-bottom: 60px;
}

.sub-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #b38b4d;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.title-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.decorator-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.section-title h2 {
  font-family: serif;
  font-size: 34px;
  font-weight: 600;
  color: #a23946;
  margin: 0;
  letter-spacing: 0.5px;
}

.person-card {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  border: 1px solid rgba(179, 139, 77, 0.3);
  border-radius: 200px 200px 0 0;
  padding: 8px;
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
  box-shadow: 0 15px 40px rgba(74, 59, 47, 0.04);
  transition: all 0.4s ease;
}

.avatar {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 190px 190px 0 0;
  border: 1px solid #b38b4d;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.role {
  display: block;
  margin-top: 24px;
  color: #b38b4d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
}

.name {
  font-family: serif;
  margin-top: 6px;
  font-size: 32px;
  color: #a23946;
  font-weight: 600;
}

.parent-info {
  margin-top: 14px;
  color: #7a6b5c;
  font-size: 14px;
  line-height: 1.8;
}

.parent-info p {
  margin: 0;
}

.parent-info span {
  font-weight: 500;
  color: #4a3b2f;
}

.person-card:hover .avatar-wrapper {
  transform: translateY(-4px);
  border-color: rgba(162, 57, 70, 0.4);
  box-shadow: 0 20px 45px rgba(162, 57, 70, 0.08);
}

.person-card:hover .avatar img {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .couple-section {
    padding: 60px 16px;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .section-title h2 {
    font-size: 26px;
  }

  .title-group {
    gap: 12px;
  }

  .decorator-line {
    width: 30px;
  }

  .avatar-wrapper {
    max-width: 165px;
    padding: 5px;
  }

  .role {
    font-size: 11px;
    letter-spacing: 2px;
    margin-top: 16px;
  }

  .name {
    font-size: 22px;
  }

  .parent-info {
    font-size: 12px;
    margin-top: 10px;
    line-height: 1.6;
  }
}
</style>