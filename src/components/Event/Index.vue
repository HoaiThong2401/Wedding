<template>
  <section class="event-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">WEDDING EVENT</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Thông Tin Lễ Cưới</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="row g-4 layout-grid">
        <div class="col-lg-6 event-column">
          <Ceremony />
        </div>

        <div class="col-lg-6 event-column">
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
  padding: 80px 16px;
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

.layout-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.event-column {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .event-section {
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
}
</style>