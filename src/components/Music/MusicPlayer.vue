<template>
    <button
        class="music-btn"
        :class="{ 'is-playing': playing }"
        @click="toggleMusic">
        
        <div class="music-waves">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
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
import { ref, onMounted } from 'vue'

const playing = ref(false)
const audio = ref(null)

const toggleMusic = () => {
    if (!audio.value) return
    if (playing.value) {
        audio.value.pause()
    } else {
        audio.value.play().catch(err => console.log("Playback prevented:", err))
    }
    playing.value = !playing.value
}

onMounted(() => {
    if (audio.value) {
        audio.value.play()
            .then(() => {
                playing.value = true
            })
            .catch(() => {
                const autoPlayFallback = () => {
                    audio.value.play().then(() => {
                        playing.value = true
                        window.removeEventListener('click', autoPlayFallback)
                    })
                }
                window.addEventListener('click', autoPlayFallback)
            })
    }
})
</script>

<style scoped>
.music-btn {
    position: fixed;
    right: 25px;
    bottom: 25px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: #222;
    color: white;
    font-size: 20px;
    z-index: 999;
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.music-btn:hover {
    transform: scale(1.05);
}

.music-waves {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.music-waves span {
    width: 3px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
    animation: bounce 0.5s ease-in-out infinite alternate;
    transform-origin: bottom;
}

.music-waves span:nth-child(2) { animation-delay: 0.1s; animation-duration: 0.4s; }
.music-waves span:nth-child(3) { animation-delay: 0.3s; animation-duration: 0.6s; }
.music-waves span:nth-child(4) { animation-delay: 0.2s; animation-duration: 0.5s; }

.music-btn.is-playing .bi {
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease;
}

.music-btn.is-playing .music-waves {
    opacity: 1;
}

.music-btn:not(.is-playing) .bi {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
}

@keyframes bounce {
    0% { transform: scaleY(0.3); }
    100% { transform: scaleY(1.8); }
}
</style>