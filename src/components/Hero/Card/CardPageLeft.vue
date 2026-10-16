<template>
  <div class="book-page page-left">
    <div class="page-ornament-border">
      <div class="left-page-body">
        <div class="quote-box">
          <p class="quote-text">
            “Yêu không chỉ là một danh từ, đó là một hành trình dài của sự thấu hiểu, sẻ chia và cùng nhau già đi.”
          </p>
          <span class="quote-diamond">✦ ✦ ✦</span>
        </div>

        <div class="invitation-intro">
          <span class="sub-heading">TRÂN TRỌNG KÍNH MỜI</span>
          <h2 class="guest-title">Quý Vị & Các Bạn</h2>
        </div>

        <div class="invitation-message">
          <p class="msg-para">
            Sau những năm tháng cùng nhau đi qua giông bão và bình yên, chúng con hiểu rằng mình đã tìm thấy một nửa trọn vẹn của cuộc đời.
          </p>

          <div class="event-callout">
            ĐẾN THAM DỰ TIỆC MỪNG & CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
          </div>

          <p class="msg-sub">
            Sự hiện diện, những nụ cười và lời chúc phúc của Quý vị chính là món quà ý nghĩa nhất và là niềm vinh hạnh to lớn cho hai gia đình trong ngày trọng đại này.
          </p>
        </div>

        <div class="bottom-ornament">
          <span>❧</span> ❦ <span>☙</span>
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

.page-left {
  border-right: 1px solid rgba(200, 165, 92, 0.3);
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

.left-page-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
}

.quote-box {
  max-width: 95%;
  margin-bottom: 4px;
}

.quote-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13.5px;
  color: #6e5e4f;
  line-height: 1.5;
  margin: 0;
}

.quote-diamond {
  color: #c8a55c;
  font-size: 9px;
  margin-top: 3px;
  display: block;
}

.invitation-intro {
  margin: 2px 0;
}

.sub-heading {
  font-family: var(--font-serif);
  font-size: 13.5px;
  letter-spacing: 2.5px;
  color: #b38b4d;
  font-weight: 600;
  display: block;
}

.guest-title {
  font-family: var(--font-script);
  font-size: 42px;
  color: #8f2e36;
  margin: 2px 0 6px;
  font-weight: normal;
}

.invitation-message {
  max-width: 440px;
  margin: 0 auto;
}

.msg-para {
  font-size: 13.5px;
  color: #5f5040;
  line-height: 1.5;
  margin-bottom: 8px;
}

.event-callout {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 700;
  color: #8f2e36;
  letter-spacing: 0.5px;
  line-height: 1.4;
  background: rgba(143, 46, 54, 0.06);
  padding: 6px 10px;
  border-radius: 6px;
  margin: 6px 0;
}

.msg-sub {
  font-size: 12.5px;
  color: #7a6b5c;
  line-height: 1.5;
  margin: 0;
}

.bottom-ornament {
  color: #c8a55c;
  font-size: 13px;
  margin-top: 4px;
}

@media (max-width: 992px) {
  .page-left {
    border-right: none;
    border-bottom: 1px solid rgba(200, 165, 92, 0.3);
  }

  .guest-title {
    font-size: 40px;
  }
}

@media (max-width: 576px) {
  .page-ornament-border {
    padding: 16px 12px;
  }

  .guest-title {
    font-size: 34px;
  }

  .msg-para, .msg-sub {
    font-size: 13px;
  }
}
</style>
