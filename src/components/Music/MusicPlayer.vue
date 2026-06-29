<template>

    <button
        class="music-btn"
        @click="toggleMusic">

        <i
            class="bi"
            :class="playing ? 'bi-pause-fill' : 'bi-play-fill'">
        </i>

    </button>

    <audio
        ref="audio"
        loop>

        <source
            src="/music/GapNguoiDungLuc.mp3"
            type="audio/mpeg">

    </audio>

</template>

<script setup>

import { ref } from 'vue'

const playing = ref(false)

const audio = ref(null)

const toggleMusic = () => {

    if (!audio.value) return

    if (playing.value) {

        audio.value.pause()

    } else {

        audio.value.play()

    }

    playing.value = !playing.value

}

</script>

<style scoped>

.music-btn{

    position:fixed;

    right:25px;

    bottom:25px;

    width:60px;

    height:60px;

    border:none;

    border-radius:50%;

    background:#222;

    color:white;

    font-size:24px;

    z-index:999;

    box-shadow:0 10px 30px rgba(0,0,0,.25);

}

.music-btn:hover{

    transform:scale(1.05);

}

</style>