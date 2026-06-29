<template>
  <section class="countdown-section" id="countdown">
    <div class="container">
      
      <div class="text-center mb-5">
        <p class="sub-title">CHÚNG MÌNH SẮP VỀ CHUNG MỘT NHÀ</p>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2 class="title">Đếm ngược đến ngày cưới</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-6 col-md-3">
          <div class="time-box">
            <div class="box-inner">
              <h1>{{ days }}</h1>
              <span>Ngày</span>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-3">
          <div class="time-box">
            <div class="box-inner">
              <h1>{{ hours }}</h1>
              <span>Giờ</span>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-3">
          <div class="time-box">
            <div class="box-inner">
              <h1>{{ minutes }}</h1>
              <span>Phút</span>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-3">
          <div class="time-box">
            <div class="box-inner">
              <h1>{{ seconds }}</h1>
              <span>Giây</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDate = new Date('2027-01-07T11:00:00')

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

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.countdown-section {
  padding: 80px 16px;
}

.title-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
}

.decorator-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(to right, transparent, #b38b4d, transparent);
}

.title {
  font-family: serif;
  font-size: 34px;
  font-weight: 600;
  color: #a23946;
  margin: 0;
  letter-spacing: 0.5px;
}

.sub-title {
  color: #b38b4d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  margin: 0;
}

.time-box {
  border: 1px solid rgba(179, 139, 77, 0.2);
  border-radius: 16px;
  padding: 6px;
  box-sizing: border-box;
  box-shadow: 0 15px 45px rgba(74, 59, 47, 0.04);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.box-inner {
  border: 1px dashed rgba(179, 139, 77, 0.4);
  border-radius: 12px;
  padding: 30px 15px;
  text-align: center;
}

.time-box h1 {
  font-family: serif;
  font-size: 52px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #a23946;
  line-height: 1.1;
}

.time-box span {
  font-size: 13px;
  color: #7a6b5c;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
}

.time-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 60px rgba(162, 57, 70, 0.08);
  border-color: rgba(162, 57, 70, 0.3);
}

@media (max-width: 768px) {
  .countdown-section {
    padding: 60px 16px;
  }

  .title {
    font-size: 26px;
  }

  .title-group {
    gap: 12px;
  }

  .decorator-line {
    width: 30px;
  }

  .sub-title {
    letter-spacing: 2px;
    font-size: 11px;
  }

  .box-inner {
    padding: 20px 10px;
  }

  .time-box h1 {
    font-size: 38px;
  }

  .time-box span {
    font-size: 11px;
    letter-spacing: 1px;
  }
}
</style>