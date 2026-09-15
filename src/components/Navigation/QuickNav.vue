<template>
  <div>
    <!-- THANH ĐIỀU HƯỚNG BÊN TRÁI (DESKTOP) -->
    <nav class="desktop-dots-nav">
      <div
        v-for="section in sections"
        :key="section.id"
        :class="['dot-item', { active: currentSection === section.id }]"
        @click="scrollTo(section.id)"
      >
        <span class="dot-circle">✦</span>
        <span class="dot-label">{{ section.label }}</span>
      </div>
    </nav>

    <!-- NÚT MENU MOBILE -->
    <button
      class="mobile-nav-toggle"
      @click.stop="isOpen = !isOpen"
      title="Menu điều hướng"
    >
      <svg
        v-if="!isOpen"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- MENU POPUP MOBILE -->
    <Transition name="mobile-menu">
      <nav
        v-if="isOpen"
        class="mobile-top-nav"
      >
        <div
          v-for="section in sections"
          :key="section.id"
          :class="['mobile-item', { active: currentSection === section.id }]"
          @click="
            scrollTo(section.id);
            isOpen = false;
          "
        >
          <svg
            class="mobile-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              :d="section.iconPath"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="mobile-label">
            {{ section.labelShort }}
          </span>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  {
    id: 'countdown',
    label: 'Save The Date',
    labelShort: 'Countdown',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'couple',
    label: 'Bride & Groom',
    labelShort: 'Couple',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 'story',
    label: 'Our Love Story',
    labelShort: 'Story',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    id: 'gallery',
    label: 'Wedding Gallery',
    labelShort: 'Gallery',
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  }
]

const currentSection = ref('countdown')
const isOpen = ref(false)

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  isOpen.value = false
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (!el) continue

    const top = el.offsetTop
    const bottom = top + el.offsetHeight

    if (scrollPosition >= top && scrollPosition < bottom) {
      currentSection.value = section.id
      break
    }
  }
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    isOpen.value = false
  }
}

const handleClickOutside = (e) => {
  if (window.innerWidth > 768) return

  if (
    !e.target.closest('.mobile-top-nav') &&
    !e.target.closest('.mobile-nav-toggle')
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.desktop-dots-nav {
  position: fixed;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.dot-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.dot-circle {
  width: 24px;
  text-align: center;
  font-size: 12px;
  color: #c8a55c;
  opacity: 0.4;
  transition: all 0.35s ease;
}

.dot-label {
  position: absolute;
  left: 32px;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  font-size: 13px;
  font-family: var(--font-body);
  font-weight: 500;
  color: #4a3b2f;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(200, 165, 92, 0.35);
  border-radius: 20px;
  padding: 5px 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  transform: translateX(-10px);
}

.dot-item:hover .dot-label {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.dot-item:hover .dot-circle,
.dot-item.active .dot-circle {
  color: #8f2e36;
  opacity: 1;
}

.dot-item.active .dot-circle {
  transform: scale(1.4) rotate(45deg);
}

.mobile-nav-toggle,
.mobile-top-nav {
  display: none;
}

@media (max-width: 768px) {
  .desktop-dots-nav {
    display: none;
  }

  .mobile-nav-toggle {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    color: var(--wine-red);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    z-index: 1001;
    transition: transform 0.3s ease;
    border: 1px solid rgba(200, 165, 92, 0.3);
  }

  .mobile-nav-toggle:hover {
    transform: scale(1.06);
  }

  .mobile-nav-toggle svg {
    width: 20px;
    height: 20px;
  }

  .mobile-top-nav {
    position: fixed;
    top: 68px;
    right: 16px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(200, 165, 92, 0.35);
    z-index: 1000;
  }

  .mobile-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 10px;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .mobile-item:hover {
    background: #fbf6ef;
    color: var(--wine-red);
  }

  .mobile-item.active {
    background: rgba(143, 46, 54, 0.1);
    color: var(--wine-red);
    font-weight: 600;
  }

  .mobile-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    stroke: currentColor;
  }

  .mobile-label {
    font-size: 13px;
    font-family: var(--font-body);
  }

  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.25s ease;
  }

  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
}
</style>