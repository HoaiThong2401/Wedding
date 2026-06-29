<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-border">
        
        <h2 class="thank-you-title">Thank You</h2>
        
        <p class="footer-desc">
          Cảm ơn bạn đã dành thời gian xem thiệp cưới và chung vui cùng chúng mình.
        </p>

        <div class="divider-diamond">✦</div>

        <h3 class="couple-signature">
          Hoàng Thiện
          <span class="ampersand">&</span>
          Phan Linh
        </h3>

        <small class="wedding-date">
          07.01.2027
        </small>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 80px 16px;
  background: #fdfaf6;
  text-align: center;
  border-top: 1px solid rgba(179, 139, 77, 0.15);
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.footer-border {
  border: 1px dashed rgba(179, 139, 77, 0.4);
  border-radius: 12px;
  padding: 60px 30px;
  background: #fffdfa;
  box-shadow: inset 0 0 30px rgba(179, 139, 77, 0.03);
}

.thank-you-title {
  font-family: serif;
  font-style: italic;
  font-size: 54px;
  font-weight: 500;
  color: #b38b4d;
  margin: 0 0 16px 0;
  letter-spacing: 1px;
}

.footer-desc {
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.8;
  color: #7a6b5c;
  font-size: 15px;
}

.divider-diamond {
  color: #b38b4d;
  font-size: 12px;
  margin: 24px 0;
  opacity: 0.6;
}

.couple-signature {
  font-family: serif;
  font-size: 36px;
  font-weight: 600;
  color: #a23946;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;
}

.ampersand {
  font-family: serif;
  font-style: italic;
  color: #b38b4d;
  margin: 0 8px;
  font-weight: 400;
}

.wedding-date {
  display: block;
  font-size: 13px;
  color: #a39689;
  letter-spacing: 3px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 16px;
  }

  .footer-border {
    padding: 40px 20px;
  }

  .thank-you-title {
    font-size: 42px;
  }

  .footer-desc {
    font-size: 13px;
    line-height: 1.6;
  }

  .couple-signature {
    font-size: 26px;
  }

  .wedding-date {
    font-size: 11px;
    letter-spacing: 2px;
  }
}
</style>