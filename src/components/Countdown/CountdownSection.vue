<template>
  <section class="countdown-section" id="countdown">
    <div class="container">

      <div class="section-header">
        <span class="section-sub">COUNTING DOWN</span>
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Save The Date</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Cùng đếm từng khoảnh khắc đến ngày chúng mình chính thức về chung một nhà</p>
      </div>

      <div class="countdown-grid">
        <div class="time-card">
          <div class="card-glass">
            <span class="number-val">{{ days }}</span>
            <span class="label-text">NGÀY</span>
          </div>
        </div>

        <div class="time-card">
          <div class="card-glass">
            <span class="number-val">{{ hours }}</span>
            <span class="label-text">GIỜ</span>
          </div>
        </div>

        <div class="time-card">
          <div class="card-glass">
            <span class="number-val">{{ minutes }}</span>
            <span class="label-text">PHÚT</span>
          </div>
        </div>

        <div class="time-card">
          <div class="card-glass">
            <span class="number-val">{{ seconds }}</span>
            <span class="label-text">GIÂY</span>
          </div>
        </div>
      </div>

      <div class="wedding-calendar-card">
        <div class="calendar-card-inner">
          <div class="calendar-header">
            <span class="cal-ornament">✦</span>
            <div class="cal-title-wrap">
              <span class="cal-month-sub">JANUARY 2027</span>
              <h3 class="cal-month-title">Tháng 01 — 2027</h3>
            </div>
            <span class="cal-ornament">✦</span>
          </div>

          <div class="calendar-weekdays">
            <span v-for="day in weekdays" :key="day" class="weekday-name">{{ day }}</span>
          </div>

          <div class="calendar-days-grid">
            <div
              v-for="(day, idx) in calendarDays"
              :key="idx"
              :class="[
                'calendar-day-cell',
                {
                  'empty-day': !day,
                  'wedding-day': day === specialDay
                }
              ]"
            >
              <template v-if="day">
                <span v-if="day === specialDay" class="wedding-heart-badge">♥</span>
                <span class="day-number">{{ day }}</span>
              </template>
            </div>
          </div>

          <div class="calendar-footer-note">
            <span class="cal-pin-dot">✦</span>
            <span class="cal-note-text">Hôn lễ cử hành vào <strong>Thứ Năm, ngày 07/01/2027</strong> (30/11 Âm lịch)</span>
            <span class="cal-pin-dot">✦</span>
          </div>

          <!-- NÚT LƯU LỊCH TÍCH HỢP TRỰC TIẾP TRONG BẢNG LỊCH -->
          <div class="calendar-action-inline">
            <a
              :href="googleCalendarUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-calendar-inline"
              title="Lưu ngày cưới vào Google Calendar"
            >
              <span class="btn-icon">📅</span>
              <span class="btn-text">Lưu Ngày Cưới</span>
              <span class="btn-sparkle">✦</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const weddingDate = new Date('2027-01-07T11:00:00')

// Dữ liệu bảng lịch Tháng 1 / 2027
// Ngày 01/01/2027 rơi vào Thứ Sáu (index 4 nếu tuần bắt đầu từ T2)
const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
const calendarDays = [
  null, null, null, null, // 4 ô trống trước Thứ 6 ngày 1
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]
const specialDay = 7

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let timer = null

const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num.toString()
}

const updateCountdown = () => {
  const now = new Date()
  const distance = weddingDate - now

  if (distance <= 0) {
    days.value = '00'
    hours.value = '00'
    minutes.value = '00'
    seconds.value = '00'
    return
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const m = Math.floor((distance / (1000 * 60)) % 60)
  const s = Math.floor((distance / 1000) % 60)

  days.value = formatNumber(d)
  hours.value = formatNumber(h)
  minutes.value = formatNumber(m)
  seconds.value = formatNumber(s)
}

const googleCalendarUrl = computed(() => {
  const title = encodeURIComponent('💍 Lễ Cưới: Hoàng Thiện & Phan Linh')
  const details = encodeURIComponent('Trân trọng kính mời bạn đến tham dự lễ tân hôn của chúng mình tại Ấp 3, Xã Trung An, TP. Mỹ Tho, Tỉnh Tiền Giang!')
  const location = encodeURIComponent('Ấp 3, Xã Trung An, TP. Mỹ Tho, Tỉnh Tiền Giang')
  const start = '20270107T040000Z' // UTC time
  const end = '20270107T090000Z'
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
})

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.countdown-section {
  padding: 90px 16px;
  position: relative;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

/* ĐẾM NGƯỢC */
.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0 35px;
}

.time-card {
  perspective: 1000px;
}

.card-glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 165, 92, 0.35);
  border-radius: var(--radius-md);
  padding: 28px 12px;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.card-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #dfba73, #8f2e36, #dfba73);
  opacity: 0.7;
}

.time-card:hover .card-glass {
  transform: translateY(-6px);
  box-shadow: var(--shadow-gold);
  border-color: rgba(200, 165, 92, 0.6);
  background: rgba(255, 255, 255, 0.95);
}

.number-val {
  font-family: var(--font-serif);
  font-size: 52px;
  font-weight: 700;
  color: var(--wine-red);
  line-height: 1;
  display: block;
  margin-bottom: 6px;
  letter-spacing: -1px;
}

.label-text {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--primary-gold-dark);
  font-weight: 600;
  display: block;
}

/* LỊCH CƯỚI THÁNG 1 / 2027 */
.wedding-calendar-card {
  max-width: 460px;
  margin: 30px auto 0;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(200, 165, 92, 0.45);
  border-radius: var(--radius-md);
  padding: 10px;
  box-shadow: 0 20px 45px rgba(74, 59, 47, 0.09);
  transition: all 0.35s ease;
}

.wedding-calendar-card:hover {
  border-color: rgba(200, 165, 92, 0.7);
  box-shadow: 0 25px 50px rgba(143, 46, 54, 0.12);
}

.calendar-card-inner {
  border: 1px dashed rgba(200, 165, 92, 0.4);
  border-radius: 12px;
  padding: 22px 18px 18px;
  background: radial-gradient(circle at center, #ffffff 0%, #faf5ec 100%);
  position: relative;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
  text-align: center;
}

.cal-ornament {
  color: var(--primary-gold);
  font-size: 14px;
}

.cal-month-sub {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 4px;
  color: var(--primary-gold-dark);
  font-weight: 700;
  display: block;
}

.cal-month-title {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--wine-red);
  margin: 2px 0 0;
  font-weight: 700;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(200, 165, 92, 0.25);
}

.weekday-name {
  font-family: var(--font-body);
  font-size: 11.5px;
  font-weight: 700;
  color: var(--wine-red);
  letter-spacing: 1px;
}

.calendar-days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  text-align: center;
}

.calendar-day-cell {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 600;
  color: #4a3b2f;
  position: relative;
  transition: all 0.25s ease;
}

.calendar-day-cell:not(.empty-day):not(.wedding-day):hover {
  background: rgba(200, 165, 92, 0.15);
  color: var(--wine-red);
  transform: scale(1.05);
}

.calendar-day-cell.wedding-day {
  background: linear-gradient(135deg, #8f2e36 0%, #a23946 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(143, 46, 54, 0.4);
  border: 1.5px solid #dfba73;
  transform: scale(1.12);
  z-index: 2;
  animation: weddingDayGlow 2.5s infinite ease-in-out;
}

.wedding-heart-badge {
  font-size: 9px;
  color: #ffd778;
  line-height: 1;
  position: absolute;
  top: 2px;
  animation: heartBeat 1.5s infinite ease-in-out;
}

.calendar-day-cell.wedding-day .day-number {
  font-weight: 700;
  font-size: 15px;
  margin-top: 5px;
  color: #ffffff;
}

.calendar-footer-note {
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px dashed rgba(200, 165, 92, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12.5px;
  color: #6e5e4f;
  text-align: center;
}

.calendar-footer-note strong {
  color: var(--wine-red);
}

.cal-pin-dot {
  color: var(--primary-gold);
  font-size: 10px;
}

/* NÚT LƯU LỊCH TÍCH HỢP TRONG CARD */
.calendar-action-inline {
  text-align: center;
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.btn-calendar-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 24px;
  border-radius: 50px;
  background: linear-gradient(135deg, #8f2e36 0%, #a23946 100%);
  border: 1.5px solid #ffd778;
  color: #ffd778;
  font-family: var(--font-serif);
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(143, 46, 54, 0.3);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  text-decoration: none;
}

.btn-calendar-inline:hover {
  background: linear-gradient(135deg, #a23946 0%, #c24d5b 100%);
  color: #ffffff;
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(143, 46, 54, 0.45);
}

.btn-icon {
  font-size: 14px;
}

.btn-sparkle {
  font-size: 10px;
  color: #ffd778;
  transition: transform 0.3s ease;
}

.btn-calendar-inline:hover .btn-sparkle {
  color: #ffffff;
  transform: rotate(45deg) scale(1.2);
}

@keyframes weddingDayGlow {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(143, 46, 54, 0.35);
  }
  50% {
    box-shadow: 0 6px 20px rgba(223, 186, 115, 0.55), 0 0 10px rgba(143, 46, 54, 0.35);
  }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

@media (max-width: 768px) {
  .countdown-section {
    padding: 60px 16px;
  }

  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin: 30px 0 25px;
  }

  .card-glass {
    padding: 18px 10px;
  }

  .number-val {
    font-size: 38px;
  }

  .label-text {
    font-size: 11px;
    letter-spacing: 2px;
  }

  .wedding-calendar-card {
    margin: 20px auto 0;
    padding: 6px;
  }

  .calendar-card-inner {
    padding: 16px 10px 14px;
  }

  .cal-month-title {
    font-size: 19px;
  }

  .calendar-days-grid {
    gap: 4px;
  }

  .calendar-day-cell {
    font-size: 13px;
  }

  .calendar-footer-note {
    font-size: 11.5px;
    flex-wrap: wrap;
  }

  .btn-calendar-inline {
    padding: 10px 14px;
    font-size: 12.5px;
  }
}
</style>