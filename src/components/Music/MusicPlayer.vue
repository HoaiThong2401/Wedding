<template>
  <div class="music-player-wrapper">
    <button
      class="music-btn"
      :class="{ 'is-playing': playing }"
      @click="toggleMusic"
      :title="playing ? 'Tạm dừng nhạc' : 'Phát nhạc nền'"
    >
      <div class="cd-vinyl">
        <div class="cd-center-hole"></div>
      </div>

      <!-- Sóng nhạc lượn sóng -->
      <div class="music-waves">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span v-if="!playing" class="play-icon">▶</span>
    </button>

    <audio
      ref="audio"
      loop
      preload="auto"
      playsinline
      muted
    >
      <source src="/music/GapNguoiDungLuc.mp3" type="audio/mpeg">
    </audio>
  </div>
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
    removeGlobalListeners()
  } catch (err) {
    console.log("Autoplay cần tương tác:", err)
  }

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

const addGlobalListeners = () => {
  window.addEventListener('pointerdown', handleGlobalPointer, { passive: true })
  window.addEventListener('touchstart', handleGlobalPointer, { passive: true })
  window.addEventListener('click', handleGlobalPointer, { passive: true })
  window.addEventListener('user-interact', handleGlobalPointer)
}

const removeGlobalListeners = () => {
  window.removeEventListener('pointerdown', handleGlobalPointer)
  window.removeEventListener('touchstart', handleGlobalPointer)
  window.removeEventListener('click', handleGlobalPointer)
  window.removeEventListener('user-interact', handleGlobalPointer)
}

onMounted(() => {
  if (!audio.value) return

  audio.value.addEventListener('play', syncState)
  audio.value.addEventListener('pause', syncState)

  syncState()
  audio.value.muted = true
  addGlobalListeners()
})

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.removeEventListener('play', syncState)
    audio.value.removeEventListener('pause', syncState)
  }
  removeGlobalListeners()
})
</script>

<style scoped>
.music-player-wrapper {
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 9999;
}

.music-btn {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #dfba73;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 35%, #2a2521, #0f0a08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(200, 165, 92, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.music-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(143, 46, 54, 0.4), 0 0 20px rgba(223, 186, 115, 0.5);
}

.cd-vinyl {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at 50% 50%,
    #1a120c 0px,
    #1a120c 2px,
    #2b1e16 3px,
    #2b1e16 4px
  );
  border: 1px solid rgba(255, 215, 0, 0.25);
}

.music-btn.is-playing .cd-vinyl {
  animation: spinCd 3.5s linear infinite;
}

.cd-center-hole {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #c8a55c;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

.play-icon {
  position: relative;
  z-index: 5;
  color: #ffffff;
  font-size: 14px;
  margin-left: 2px;
}

.music-waves {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 4;
}

.music-btn.is-playing .music-waves {
  opacity: 0.9;
}

.music-waves span {
  width: 2.5px;
  height: 14px;
  border-radius: 2px;
  background: #ffd778;
  animation: waveBar 0.8s infinite ease-in-out;
}

.music-waves span:nth-child(1) { animation-delay: 0s; }
.music-waves span:nth-child(2) { animation-delay: 0.15s; }
.music-waves span:nth-child(3) { animation-delay: 0.3s; }
.music-waves span:nth-child(4) { animation-delay: 0.45s; }
.music-waves span:nth-child(5) { animation-delay: 0.6s; }

@keyframes spinCd {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes waveBar {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1.8); }
}

@media (max-width: 768px) {
  .music-player-wrapper {
    right: 16px;
    bottom: 16px;
  }
  .music-btn {
    width: 50px;
    height: 50px;
  }
}
</style>