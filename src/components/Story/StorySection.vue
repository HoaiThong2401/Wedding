<template>
  <section class="story-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">OUR STORY</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Chuyện Tình Yêu</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="timeline">
        <div class="story-item left">
          <div class="story-dot">✦</div>
          <div class="story-box">
            <div class="story-image">
              <img src="https://placehold.co/500x650" alt="Lần đầu gặp gỡ">
            </div>
            <div class="story-content">
              <span class="story-date">20.10.2021</span>
              <h3>Lần đầu gặp gỡ</h3>
              <p>
                Đó là một ngày đặc biệt khi hai chúng mình lần đầu biết đến nhau. 
                Một cuộc gặp gỡ tình cờ nhưng lại là khởi đầu của một hành trình dài.
              </p>
            </div>
          </div>
        </div>

        <div class="story-item right">
          <div class="story-dot">✦</div>
          <div class="story-box">
            <div class="story-image">
              <img src="https://placehold.co/500x650" alt="Chính thức hẹn hò">
            </div>
            <div class="story-content">
              <span class="story-date">15.05.2022</span>
              <h3>Chính thức hẹn hò</h3>
              <p>
                Sau nhiều lần trò chuyện và đồng hành, chúng mình quyết định 
                bước vào một mối quan hệ nghiêm túc và trao nhau trọn vẹn niềm tin.
              </p>
            </div>
          </div>
        </div>

        <div class="story-item left">
          <div class="story-dot">✦</div>
          <div class="story-box">
            <div class="story-image">
              <img src="https://placehold.co/500x650" alt="Lời cầu hôn">
            </div>
            <div class="story-content">
              <span class="story-date">10.01.2026</span>
              <h3>Lời cầu hôn</h3>
              <p>
                Một khoảnh khắc không thể nào quên khi lời cầu hôn được cất lên 
                và cả hai cùng đồng ý dắt tay nhau viết tiếp chương hạnh phúc mới.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 80px 16px;
  overflow: hidden;
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

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(179, 139, 77, 0.4) 10%, rgba(179, 139, 77, 0.4) 90%, transparent);
  transform: translateX(-50%);
}

.story-item {
  position: relative;
  width: 50%;
  margin-bottom: 60px;
  box-sizing: border-box;
}

.story-item.left {
  padding-right: 50px;
  margin-right: auto;
  text-align: right;
}

.story-item.right {
  padding-left: 50px;
  margin-left: auto;
  text-align: left;
}

.story-item.left .story-box {
  align-items: flex-end;
}

.story-item.right .story-box {
  align-items: flex-start;
}

.story-dot {
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border: 1px solid #b38b4d;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b38b4d;
  font-size: 10px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(74, 59, 47, 0.1);
}

.story-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.story-image {
  width: 100%;
  max-width: 340px;
  border: 1px solid rgba(179, 139, 77, 0.25);
  border-radius: 160px 160px 0 0;
  padding: 6px;
  box-shadow: 0 10px 30px rgba(74, 59, 47, 0.04);
  box-sizing: border-box;
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.story-image img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 154px 154px 0 0;
  display: block;
}

.story-content {
  margin-top: 24px;
  max-width: 400px;
}

.story-date {
  font-size: 13px;
  color: #b38b4d;
  font-weight: 600;
  letter-spacing: 2px;
  display: block;
}

.story-content h3 {
  font-family: serif;
  margin: 6px 0 12px 0;
  font-size: 24px;
  color: #a23946;
  font-weight: 600;
}

.story-content p {
  color: #7a6b5c;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}

.story-item:hover .story-image {
  transform: translateY(-4px);
  border-color: rgba(162, 57, 70, 0.3);
}

@media (max-width: 768px) {
  .story-section {
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

  .timeline::before {
    left: 16px;
    transform: none;
  }

  .story-item {
    width: 100%;
    margin-bottom: 40px;
    padding-left: 45px !important;
    padding-right: 0 !important;
    text-align: left !important;
  }

  .story-item.left .story-box,
  .story-item.right .story-box {
    align-items: flex-start;
  }

  .story-dot {
    left: 16px;
    top: 20px;
  }

  .story-image {
    max-width: 240px;
    border-radius: 120px 120px 0 0;
    padding: 5px;
  }

  .story-image img {
    border-radius: 115px 115px 0 0;
  }

  .story-content {
    margin-top: 16px;
  }

  .story-content h3 {
    font-size: 20px;
    margin: 4px 0 8px 0;
  }

  .story-content p {
    font-size: 13px;
    line-height: 1.6;
  }
}
</style>