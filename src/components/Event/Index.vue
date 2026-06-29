<template>
  <section class="event-section">

    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">WEDDING EVENT</span>
        <h2>Thông Tin Lễ Cưới</h2>
      </div>

      <div class="row g-4">

        <div class="col-lg-6">
          <Ceremony />
        </div>

        <div class="col-lg-6">
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
.event-section{
  padding-bottom:80px;
}

.section-title{
  margin-bottom:70px;
}

.sub-title{
  display:block;
  letter-spacing:4px;
  color:#999;
  margin-bottom:10px;
}

.section-title h2{
  font-size:42px;
}
</style>