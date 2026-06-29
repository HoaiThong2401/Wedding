<template>
  <section class="gallery-section">
    <div class="container">

      <div class="section-title text-center">
        <span class="sub-title">OUR GALLERY</span>
        <div class="title-group">
          <div class="decorator-line"></div>
          <h2>Album Ảnh</h2>
          <div class="decorator-line"></div>
        </div>
      </div>

      <div class="polaroid-grid">
        <div
          v-for="i in 9"
          :key="i"
          class="polaroid"
          :style="getStyle(i)">
          
          <div class="polaroid-inner">
            <div class="photo">
              <img
                :src="`https://picsum.photos/600/800?random=${i}`"
                alt="Wedding Memory">
            </div>
            <div class="caption">
              Our Memory — {{ i }}
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const rotations = [-2.5, 1.8, -1.2, 2.2, -2, 1.5];

const getStyle = (i) => {
  const rotate = rotations[i % rotations.length];
  const translateY = (i % 3) * 3;

  return {
    '--r': `${rotate}deg`,
    '--y': `${translateY}px`
  };
};
</script>

<style scoped>
.gallery-section {
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

.polaroid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.polaroid {
  width: 100%;
  max-width: 290px;
  border: 1px solid rgba(179, 139, 77, 0.18);
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 12px 35px rgba(74, 59, 47, 0.06);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  box-sizing: border-box;
  transform: rotate(var(--r)) translateY(var(--y));
}

.polaroid-inner {
  border: 1px solid rgba(179, 139, 77, 0.1);
  background: #ffffff;
  padding: 10px 10px 16px 10px;
}

.photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(5%) contrast(1.02);
  transition: transform 0.5s ease;
}

.caption {
  text-align: center;
  margin-top: 14px;
  font-family: serif;
  font-style: italic;
  font-size: 15px;
  color: #7a6b5c;
  letter-spacing: 0.5px;
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.04) translateY(-5px) !important;
  z-index: 10;
  border-color: rgba(162, 57, 70, 0.25);
  box-shadow: 0 25px 55px rgba(162, 57, 70, 0.12);
}

.polaroid:hover img {
  transform: scale(1.04);
}

@media (max-width: 992px) {
  .gallery-section {
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

  .polaroid-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }

  .polaroid {
    max-width: 220px;
    padding: 6px;
    transform: rotate(var(--r)) translateY(var(--y)) !important;
  }

  .polaroid-inner {
    padding: 8px 8px 12px 8px;
  }

  .caption {
    font-size: 13px;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .polaroid-grid {
    gap: 16px 10px;
  }

  .polaroid {
    max-width: 170px;
    padding: 5px;
  }

  .polaroid-inner {
    padding: 6px 6px 10px 6px;
  }

  .caption {
    font-size: 11px;
    margin-top: 8px;
  }
}
</style>