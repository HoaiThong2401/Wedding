<template>
  <section class="event-section" id="event">
    <div class="container">

      <div class="section-header">
        <span class="section-sub">TIME & LOCATION</span>
        <div class="section-title-wrap">
          <div class="line"></div>
          <h2 class="section-main-title">Thông Tin Hôn Lễ</h2>
          <div class="line"></div>
        </div>
        <p class="section-desc">Trân trọng kính mời Quý vị và Các bạn đến chung vui cùng gia đình</p>
      </div>

      <div class="events-grid">
        <div class="event-col">
          <Ceremony />
        </div>

        <div class="event-col">
          <Reception />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import Ceremony from "./components/Ceremony.vue"
import Reception from "./components/Reception.vue"
</script>

<style scoped>
.event-section {
  padding: 90px 16px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  margin-top: 10px;
  font-style: italic;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  margin-top: 50px;
}

.event-col {
  display: flex;
  flex-direction: column;
}

@media (max-width: 992px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 30px;
  }
}
</style>