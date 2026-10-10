<template>
  <footer class="footer-section" id="footer">
    <div class="container">
      <div class="footer-card">
        
        <span class="footer-sub">FROM THE BOTTOM OF OUR HEARTS</span>
        <h2 class="thank-you-title">Thank You</h2>
        
        <p class="footer-desc">
          Sự hiện diện và lời chúc phúc của Quý vị là niềm hạnh phúc vô bờ bến đối với hai chúng mình và gia đình.
        </p>

        <div class="footer-monogram-wrap">
          <div class="monogram-box">
            <span class="monogram-letter">T</span>
            <span class="monogram-heart">❦</span>
            <span class="monogram-letter">L</span>
          </div>
          <span class="couple-sub-names">Hoàng Thiện & Phan Linh</span>
        </div>

        <div class="wedding-date-seal">
          <span>06 . 01 . 2027</span>
        </div>

        <div class="made-with-love">
          <span>Trọn vẹn yêu thương — Hạnh phúc đong đầy</span>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  padding: 80px 16px 100px;
  position: relative;
}

.container {
  max-width: 750px;
  margin: 0 auto;
}

.footer-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(200, 165, 92, 0.4);
  border-radius: var(--radius-md);
  padding: 50px 30px;
  text-align: center;
  box-shadow: var(--shadow-md);
  position: relative;
}

.footer-card::before {
  content: "";
  position: absolute;
  inset: 8px;
  border: 1px dashed rgba(200, 165, 92, 0.35);
  border-radius: 10px;
  pointer-events: none;
}

.footer-sub {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 4px;
  color: var(--primary-gold-dark);
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

.thank-you-title {
  font-family: var(--font-script);
  font-size: 64px;
  color: var(--wine-red);
  margin: 0 0 16px;
  font-weight: 400;
  line-height: 1.1;
}

.footer-desc {
  max-width: 500px;
  margin: 0 auto 30px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.7;
}

.footer-monogram-wrap {
  margin: 25px 0 20px;
}

.monogram-box {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.monogram-letter {
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 700;
  color: var(--wine-red);
}

.monogram-heart {
  color: var(--primary-gold);
  font-size: 24px;
}

.couple-sub-names {
  display: block;
  font-family: var(--font-serif);
  font-size: 16px;
  color: var(--text-main);
  margin-top: 4px;
  letter-spacing: 1px;
}

.wedding-date-seal {
  display: inline-block;
  background: rgba(200, 165, 92, 0.12);
  border: 1px solid rgba(200, 165, 92, 0.4);
  padding: 5px 18px;
  border-radius: 50px;
  font-family: var(--font-serif);
  font-size: 14px;
  letter-spacing: 3px;
  color: var(--primary-gold-dark);
  font-weight: 600;
  margin-bottom: 20px;
}

.made-with-love {
  font-size: 12.5px;
  color: var(--text-light);
  font-style: italic;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 60px 16px 90px;
  }

  .footer-card {
    padding: 35px 16px;
  }

  .thank-you-title {
    font-size: 48px;
  }

  .monogram-letter {
    font-size: 30px;
  }
}
</style>