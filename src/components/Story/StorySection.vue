<template>
  <section class="story-section" id="story">
    <div class="container">

      <div class="section-header">
        <span class="section-sub">ROMANTIC CHAPTERS</span>
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Our Love Story</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Từng bước ngoặt ngọt ngào trên hành trình gắn kết hai tâm hồn</p>
      </div>

      <div class="timeline-container">
        <!-- MỐC 1 -->
        <div class="timeline-item left-item">
          <div class="timeline-node">
            <div class="node-ring">
              <span class="node-number">I</span>
            </div>
          </div>
          <div class="story-card">
            <div class="story-card-inner">
              <div class="story-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80"
                  alt="First Met"
                  class="story-img"
                  loading="lazy"
                />
                <span class="story-date-badge">20 . 10 . 2021</span>
              </div>
              <div class="story-content">
                <span class="chapter-label">CHƯƠNG I • KHOẢNH KHẮC ĐẦU TIÊN</span>
                <h3 class="story-title">First Met</h3>
                <p class="story-text">
                  Đó là một buổi chiều thu tình cờ tại quán cà phê quen thuộc. Một ánh nhìn lướt qua nhưng đã mở đầu cho cuốn tiểu thuyết tình yêu đẹp đẽ nhất của hai đứa mình.
                </p>
                <div class="story-highlight">
                  <span class="highlight-quote">“Duyên phận bắt đầu từ một cái chạm mắt tình cờ...”</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MỐC 2 -->
        <div class="timeline-item right-item">
          <div class="timeline-node">
            <div class="node-ring">
              <span class="node-number">II</span>
            </div>
          </div>
          <div class="story-card">
            <div class="story-card-inner">
              <div class="story-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80"
                  alt="Falling In Love"
                  class="story-img"
                  loading="lazy"
                />
                <span class="story-date-badge">15 . 05 . 2022</span>
              </div>
              <div class="story-content">
                <span class="chapter-label">CHƯƠNG II • LỜI HẸN ƯỚC</span>
                <h3 class="story-title">Falling In Love</h3>
                <p class="story-text">
                  Sau những tháng ngày cùng sẻ chia buồn vui, chúng mình quyết định nắm chặt tay nhau, cùng nhau vượt qua mọi thử thách của cuộc sống và trao trọn niềm tin.
                </p>
                <div class="story-highlight">
                  <span class="highlight-quote">“Bàn tay nắm lấy bàn tay, cùng đi qua giông bão...”</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MỐC 3 -->
        <div class="timeline-item left-item">
          <div class="timeline-node">
            <div class="node-ring node-ring-special">
              <span class="node-icon">💍</span>
            </div>
          </div>
          <div class="story-card story-card-special">
            <div class="story-card-inner">
              <div class="story-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80"
                  alt="The Proposal"
                  class="story-img"
                  loading="lazy"
                />
                <span class="story-date-badge special-date">10 . 01 . 2026</span>
              </div>
              <div class="story-content">
                <span class="chapter-label special-label">CHƯƠNG III • MÃI MÃI BÊN NHAU</span>
                <h3 class="story-title">The Proposal</h3>
                <p class="story-text">
                  Dưới ánh hoàng hôn lãng mạn, chiếc nhẫn được trao đi cùng câu nói "Em đồng ý!". Và hôm nay, chúng mình sẵn sàng bước sang một trang mới: Về chung một nhà.
                </p>
                <div class="story-highlight">
                  <span class="highlight-quote">“Yes, I do — Hành trình trọn đời bắt đầu!”</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TIMELINE END BADGE -->
        <div class="timeline-end-wrap">
          <div class="end-heart-badge">
            <span class="end-heart-icon">❦</span>
            <span class="end-text">To Be Continued Forever</span>
            <span class="end-heart-icon">❦</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 85px 16px;
  position: relative;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

.timeline-container {
  position: relative;
  margin: 50px auto 0;
  padding: 10px 0 20px;
}

.timeline-container::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 10px;
  bottom: 60px;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #c8a55c 10%, #c8a55c 90%, transparent);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  margin-bottom: 60px;
  box-sizing: border-box;
}

.timeline-item.left-item {
  padding-right: 48px;
  margin-right: auto;
  text-align: right;
}

.timeline-item.right-item {
  padding-left: 48px;
  margin-left: auto;
  text-align: left;
}

/* NODE TRÒN ĐIỂM NHẤN TRÊN TIMELINE */
.timeline-node {
  position: absolute;
  top: 20px;
  z-index: 5;
}

.left-item .timeline-node {
  right: -22px;
}

.right-item .timeline-node {
  left: -22px;
}

.node-ring {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #c8a55c;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(200, 165, 92, 0.4);
  transition: all 0.3s ease;
}

.timeline-item:hover .node-ring {
  transform: scale(1.12);
  border-color: #8f2e36;
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.35);
}

.node-number {
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 700;
  color: var(--wine-red);
}

.node-ring-special {
  background: linear-gradient(135deg, #8f2e36, #a23946);
  border-color: #ffd778;
}

.node-icon {
  font-size: 18px;
}

/* THẺ NỘI DUNG STORY */
.story-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(200, 165, 92, 0.4);
  border-radius: 18px;
  padding: 8px;
  box-shadow: 0 12px 35px rgba(74, 59, 47, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-block;
  width: 100%;
  max-width: 440px;
  text-align: left;
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 45px rgba(143, 46, 54, 0.15);
  border-color: rgba(200, 165, 92, 0.7);
  background: #ffffff;
}

.story-card-special {
  border-color: rgba(200, 165, 92, 0.6);
  box-shadow: 0 14px 40px rgba(143, 46, 54, 0.14);
}

.story-card-inner {
  border: 1px dashed rgba(200, 165, 92, 0.35);
  border-radius: 12px;
  padding: 14px;
  background: radial-gradient(circle at center, #ffffff 0%, #faf6ee 100%);
}

.story-photo-box {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(200, 165, 92, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.story-card:hover .story-img {
  transform: scale(1.06);
}

.story-date-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(143, 46, 54, 0.92);
  color: #ffd778;
  font-family: var(--font-serif);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 3px 12px;
  border-radius: 20px;
  border: 1px solid #ffd778;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.special-date {
  background: linear-gradient(135deg, #a23946, #781822);
}

.story-content {
  padding: 12px 4px 4px;
}

.chapter-label {
  font-family: var(--font-body);
  font-size: 9.5px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #b38b4d;
  text-transform: uppercase;
  display: block;
  margin-bottom: 3px;
}

.special-label {
  color: #8f2e36;
}

.story-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--wine-red);
  margin: 0 0 6px;
  line-height: 1.2;
}

.story-text {
  font-size: 13px;
  color: #554739;
  line-height: 1.6;
  margin: 0 0 10px;
}

.story-highlight {
  background: rgba(200, 165, 92, 0.09);
  border-left: 2.5px solid #c8a55c;
  border-radius: 0 6px 6px 0;
  padding: 5px 10px;
}

.highlight-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 12px;
  color: #8f2e36;
  font-weight: 500;
  line-height: 1.4;
  display: block;
}

/* FOOTER TIMELINE */
.timeline-end-wrap {
  text-align: center;
  position: relative;
  z-index: 6;
  margin-top: 20px;
}

.end-heart-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 24px;
  background: #ffffff;
  border: 1.5px solid #c8a55c;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(200, 165, 92, 0.25);
}

.end-heart-icon {
  color: #8f2e36;
  font-size: 14px;
}

.end-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13.5px;
  color: var(--wine-red);
  font-weight: 600;
}

@media (max-width: 768px) {
  .story-section {
    padding: 50px 8px;
  }

  .timeline-container {
    margin-top: 30px;
    padding: 10px 0;
  }

  .timeline-container::before {
    left: 50%;
    top: 5px;
    bottom: 45px;
    transform: translateX(-50%);
  }

  .timeline-item {
    width: 50%;
    margin-bottom: 24px;
    box-sizing: border-box;
  }

  .timeline-item.left-item {
    padding-right: 14px !important;
    padding-left: 0 !important;
    margin-right: auto;
    text-align: right !important;
  }

  .timeline-item.right-item {
    padding-left: 14px !important;
    padding-right: 0 !important;
    margin-left: auto;
    text-align: left !important;
  }

  .left-item .timeline-node {
    right: -14px !important;
    left: auto !important;
    top: 10px;
  }

  .right-item .timeline-node {
    left: -14px !important;
    right: auto !important;
    top: 10px;
  }

  .node-ring {
    width: 28px;
    height: 28px;
    box-shadow: 0 2px 8px rgba(200, 165, 92, 0.35);
  }

  .node-number {
    font-size: 10px;
  }

  .node-icon {
    font-size: 11px;
  }

  .story-card {
    max-width: 100%;
    padding: 4px;
    border-radius: 12px;
  }

  .story-card-inner {
    padding: 6px;
    border-radius: 8px;
  }

  .story-photo-box {
    aspect-ratio: 4 / 3;
    border-radius: 6px;
  }

  .story-date-badge {
    font-size: 8px;
    padding: 1px 6px;
    bottom: 3px;
    right: 3px;
    letter-spacing: 0.5px;
  }

  .story-content {
    padding: 6px 2px 2px;
  }

  .chapter-label {
    font-size: 7.5px;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .story-title {
    font-size: 13px;
    margin: 0 0 3px;
  }

  .story-text {
    font-size: 10.5px;
    line-height: 1.35;
    margin-bottom: 5px;
  }

  .story-highlight {
    padding: 3px 6px;
    border-left-width: 2px;
  }

  .highlight-quote {
    font-size: 9.5px;
    line-height: 1.25;
  }

  .timeline-end-wrap {
    margin-top: 15px;
  }

  .end-heart-badge {
    padding: 5px 14px;
    font-size: 11px;
    gap: 6px;
  }

  .end-text {
    font-size: 11px;
  }

  .end-heart-icon {
    font-size: 11px;
  }
}
</style>