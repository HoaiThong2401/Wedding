<template>
    <section class="countdown-section" id="countdown">

        <div class="container">

            <div class="text-center mb-5">

                <p class="sub-title">
                    CHÚNG MÌNH SẮP VỀ CHUNG MỘT NHÀ
                </p>

                <h2 class="title">
                    Đếm ngược đến ngày cưới
                </h2>

            </div>

            <div class="row justify-content-center g-4">

                <div class="col-6 col-md-3">

                    <div class="time-box">

                        <h1>{{ days }}</h1>

                        <span>Ngày</span>

                    </div>

                </div>

                <div class="col-6 col-md-3">

                    <div class="time-box">

                        <h1>{{ hours }}</h1>

                        <span>Giờ</span>

                    </div>

                </div>

                <div class="col-6 col-md-3">

                    <div class="time-box">

                        <h1>{{ minutes }}</h1>

                        <span>Phút</span>

                    </div>

                </div>

                <div class="col-6 col-md-3">

                    <div class="time-box">

                        <h1>{{ seconds }}</h1>

                        <span>Giây</span>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDate = new Date('2026-12-15T10:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer = null

const updateCountdown = () => {

    const now = new Date()

    const distance = weddingDate - now

    if (distance <= 0) return

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))

    hours.value = Math.floor((distance / (1000 * 60 * 60)) % 24)

    minutes.value = Math.floor((distance / (1000 * 60)) % 60)

    seconds.value = Math.floor((distance / 1000) % 60)

}

onMounted(() => {

    updateCountdown()

    timer = setInterval(updateCountdown,1000)

})

onUnmounted(() => {

    clearInterval(timer)

})
</script>

<style scoped>

.countdown-section{
    padding-bottom:80px;
}

.title{

    font-size:42px;

    font-family:serif;

}

.sub-title{

    color:#999;

    letter-spacing:3px;

}

.time-box{

    padding:35px;

    border-radius:20px;

    background:white;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.time-box h1{

    font-size:55px;

    margin-bottom:10px;

    color:#d89b6b;

}

.time-box span{

    color:#777;

}

</style>