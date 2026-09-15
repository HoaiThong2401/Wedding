<template>
  <section class="couple-section" id="couple">
    <div class="container">

      <div class="section-header">
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Bride & Groom</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Hai con người — Một câu chuyện tình yêu trọn vẹn</p>
      </div>

      <div class="duo-couple-card">
        <div class="duo-card-inner">
          
          <div class="corner-ornament tl">✦</div>
          <div class="corner-ornament tr">✦</div>
          <div class="corner-ornament bl">✦</div>
          <div class="corner-ornament br">✦</div>

          <!-- Huy hiệu chữ Hỷ ở giữa trên -->
          <div class="top-seal-wrap">
            <span class="seal-line"></span>
            <div class="top-seal-badge">
              <span>囍</span>
            </div>
            <span class="seal-line"></span>
          </div>

          <div class="duo-content-grid">
            <!-- PHẦN CHÚ RỂ -->
            <div class="couple-side groom-side">
              <div class="avatar-halo-wrap">
                <div class="avatar-ring">
                  <img src="/images/avatar_nam.jpg" alt="Chú rể Lê Hoàng Thiện" class="couple-avatar" />
                </div>
                <div class="role-ribbon groom-ribbon">CHÚ RỂ</div>
              </div>

              <h3 class="couple-name">Lê Hoàng Thiện</h3>
            

              <div class="quote-bubble">
                <span class="quote-icon">“</span>
                <p>Cảm ơn em vì đã đến và trở thành điều tuyệt vời nhất trong cuộc đời anh.</p>
                <span class="quote-icon">”</span>
              </div>
            </div>

            <div class="center-union">
              <div class="union-line top"></div>
              <div class="union-rings">
                <span class="ring ring-gold ring-1"></span>
                <span class="ring ring-gold ring-2"></span>
                <span class="union-heart">♥</span>
              </div>
              <div class="union-line bottom"></div>
            </div>

            <!-- PHẦN CÔ DÂU -->
            <div class="couple-side bride-side">
              <div class="avatar-halo-wrap">
                <div class="avatar-ring">
                  <img src="/images/avatar_nu.jpg" alt="Cô dâu Phan Linh" class="couple-avatar" />
                </div>
                <div class="role-ribbon bride-ribbon">CÔ DÂU</div>
              </div>

              <h3 class="couple-name">Phan Linh</h3>
            

              <div class="quote-bubble">
                <span class="quote-icon">“</span>
                <p>Hạnh phúc giản đơn là mỗi sớm mai thức dậy luôn có anh kề bên đồng hành.</p>
                <span class="quote-icon">”</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.couple-section {
  padding: 85px 16px;
  position: relative;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

/* KHUNG THIỆP ĐÔI HOÀNG GIA */
.duo-couple-card {
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(200, 165, 92, 0.45);
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 20px 50px rgba(74, 59, 47, 0.08);
}

.duo-card-inner {
  border: 1px dashed rgba(200, 165, 92, 0.4);
  border-radius: 14px;
  padding: 30px 24px 34px;
  background: radial-gradient(circle at center, #ffffff 0%, #faf5ec 100%);
  position: relative;
}

/* HOA VĂN 4 GÓC */
.corner-ornament {
  position: absolute;
  color: #c8a55c;
  font-size: 14px;
  opacity: 0.75;
}
.corner-ornament.tl { top: 10px; left: 10px; }
.corner-ornament.tr { top: 10px; right: 10px; }
.corner-ornament.bl { bottom: 10px; left: 10px; }
.corner-ornament.br { bottom: 10px; right: 10px; }

/* SEAL TRÊN CÙNG */
.top-seal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 25px;
}

.seal-line {
  flex: 1;
  max-width: 140px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a55c, transparent);
}

.top-seal-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffd778 0%, #c8a55c 80%, #916c27 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(143, 46, 54, 0.2);
  border: 2px solid #ffffff;
}

.top-seal-badge span {
  font-family: var(--font-serif);
  font-size: 20px;
  color: #802833;
  font-weight: bold;
}

/* GRID BỐ CỤC ĐÔI */
.duo-content-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  align-items: start;
}

.couple-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* AVATAR TRÒN HOÀNG GIA */
.avatar-halo-wrap {
  position: relative;
  margin-bottom: 16px;
}

.avatar-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 4px;
  border: 2px solid #c8a55c;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(200, 165, 92, 0.3);
  position: relative;
}

.couple-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.duo-couple-card:hover .couple-avatar {
  transform: scale(1.04);
}

.role-ribbon {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 3px 14px;
  border-radius: 20px;
  color: #ffffff;
  border: 1px solid #ffd778;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.groom-ribbon {
  background: linear-gradient(135deg, #8f2e36 0%, #a23946 100%);
}

.bride-ribbon {
  background: linear-gradient(135deg, #a23946 0%, #c24d5b 100%);
}

/* TÊN & PHỤ MẪU */
.couple-name {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 700;
  color: var(--wine-red);
  margin: 0 0 8px;
}

.parents-box {
  background: rgba(200, 165, 92, 0.08);
  border-radius: 8px;
  padding: 6px 14px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 260px;
}

.parent-text {
  font-size: 12.5px;
  color: #635343;
  margin: 2px 0;
  line-height: 1.35;
}

.parent-text strong {
  color: #2b2118;
  font-weight: 600;
}

/* QUOTE */
.quote-bubble {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 12.5px;
  color: #7a6b5c;
  line-height: 1.5;
  max-width: 280px;
  margin: 0;
  position: relative;
  padding: 0 6px;
}

.quote-icon {
  color: #c8a55c;
  font-size: 14px;
  font-weight: bold;
}

/* TRỤC KẾT NỐI */
.center-union {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 200px;
  padding: 0 6px;
}

.union-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, #c8a55c, transparent);
}

.union-rings {
  position: relative;
  width: 36px;
  height: 36px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2.5px solid #dfba73;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.ring-1 { left: 2px; top: 6px; }
.ring-2 { right: 2px; bottom: 6px; }

.union-heart {
  position: absolute;
  color: #8f2e36;
  font-size: 11px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: heartPulse 1.8s infinite ease-in-out;
}

@keyframes heartPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(0.9); }
  50% { transform: translate(-50%, -50%) scale(1.25); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .couple-section {
    padding: 60px 10px;
  }

  .duo-card-inner {
    padding: 22px 10px 24px;
  }

  .duo-content-grid {
    gap: 8px;
  }

  .avatar-ring {
    width: 86px;
    height: 86px;
    padding: 3px;
  }

  .role-ribbon {
    font-size: 8.5px;
    letter-spacing: 1px;
    padding: 2px 8px;
    bottom: -4px;
  }

  .couple-name {
    font-size: 17px;
    margin-bottom: 6px;
  }

  .parents-box {
    padding: 4px 6px;
    margin-bottom: 8px;
  }

  .parent-text {
    font-size: 11px;
  }

  .quote-bubble {
    font-size: 11px;
    line-height: 1.35;
    padding: 0;
  }

  .union-rings {
    width: 28px;
    height: 28px;
  }

  .ring {
    width: 15px;
    height: 15px;
    border-width: 2px;
  }
}
</style>