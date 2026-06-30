<template>
    <button
        class="music-btn"
        :class="{ 'is-playing': playing }"
        @click="toggleMusic">

        <div class="cd"></div>

        <div class="music-waves">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <i class="bi bi-play-fill"></i>
    </button>

    <audio
        ref="audio"
        loop
        preload="auto"
        playsinline
        muted>
        <source src="/music/GapNguoiDungLuc.mp3" type="audio/mpeg">
    </audio>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const audio = ref(null)
const playing = ref(false)

const syncState = () => {
    if (!audio.value) return
    playing.value = !audio.value.paused
}

const playMusic = async (unmute = true) => {
    if (!audio.value) return

    try {
        if (unmute) {
            audio.value.muted = false
        }
        await audio.value.play()
    } catch {}

    syncState()
}

const pauseMusic = () => {
    if (!audio.value) return
    audio.value.pause()
    syncState()
}

const toggleMusic = async (e) => {
    e?.stopPropagation?.()

    if (!audio.value) return

    if (audio.value.paused) {
        await playMusic(true)
    } else {
        pauseMusic()
    }
}

const handleGlobalPointer = async () => {
    if (!audio.value) return

    if (audio.value.paused) {
        await playMusic(true)
    }
}

onMounted(() => {
    if (!audio.value) return

    audio.value.addEventListener('play', syncState)
    audio.value.addEventListener('pause', syncState)

    syncState()
    audio.value.muted = true

    window.addEventListener('pointerdown', handleGlobalPointer, { passive: true })
    window.addEventListener('pointerup', handleGlobalPointer, { passive: true })
    window.addEventListener('touchstart', handleGlobalPointer, { passive: true })
    window.addEventListener('touchend', handleGlobalPointer, { passive: true })
    window.addEventListener('click', handleGlobalPointer, { passive: true })
    window.addEventListener('keydown', handleGlobalPointer)
    window.addEventListener('user-interact', handleGlobalPointer)
})

onBeforeUnmount(() => {
    window.removeEventListener('pointerdown', handleGlobalPointer)
    window.removeEventListener('pointerup', handleGlobalPointer)
    window.removeEventListener('touchstart', handleGlobalPointer)
    window.removeEventListener('touchend', handleGlobalPointer)
    window.removeEventListener('click', handleGlobalPointer)
    window.removeEventListener('keydown', handleGlobalPointer)
    window.removeEventListener('user-interact', handleGlobalPointer)
})
</script>

<style scoped>
.music-btn {
    position: fixed;
    right: 25px;
    bottom: 25px;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    background: radial-gradient(circle at 30% 30%, #1c1c1c, #050505);
    box-shadow: 0 15px 40px rgba(0,0,0,.5);
    transition: transform .25s ease, box-shadow .25s ease;
}

.music-btn:hover {
    transform: scale(1.08);
}

.music-btn.is-playing {
    box-shadow:
        0 0 25px rgba(0, 200, 255, .25),
        0 15px 40px rgba(0,0,0,.5);
}

.cd {
    position: absolute;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #2a2a2a, #000 70%);
    border: 1px solid rgba(255,255,255,.08);
}

.cd::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #111;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.music-btn.is-playing .cd {
    animation: spin 2.8s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.music-waves {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    opacity: 0;
    transition: opacity .3s ease;
}

.music-btn.is-playing .music-waves {
    opacity: 1;
}

.music-waves span {
    width: 3px;
    height: 14px;
    border-radius: 3px;
    animation: wave 0.9s infinite ease-in-out;
}

.music-waves span:nth-child(1) { background: #ff004c; animation-delay: 0s; }
.music-waves span:nth-child(2) { background: #ff8a00; animation-delay: .12s; }
.music-waves span:nth-child(3) { background: #ffe600; animation-delay: .24s; }
.music-waves span:nth-child(4) { background: #00ff9d; animation-delay: .36s; }
.music-waves span:nth-child(5) { background: #00c3ff; animation-delay: .48s; }

@keyframes wave {
    0%, 100% { transform: scaleY(.3); opacity: .4; }
    50% { transform: scaleY(2.2); opacity: 1; }
}

.music-btn i {
    position: relative;
    z-index: 3;
    font-size: 22px;
    color: white;
    transition: opacity .2s ease;
}

.music-btn.is-playing i {
    opacity: 0;
}
</style>