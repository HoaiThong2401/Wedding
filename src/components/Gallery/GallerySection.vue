<template>
    <section class="gallery-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">OUR GALLERY</span>
                <h2>Album Ảnh</h2>

            </div>

            <div class="polaroid-grid">

                <div
                    v-for="i in 9"
                    :key="i"
                    class="polaroid"
                    :style="getStyle(i)">

                    <div class="photo">
                        <img
                            :src="`https://picsum.photos/600/800?random=${i}`"
                            alt="">
                    </div>

                    <div class="caption">
                        Our Memory {{ i }}
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
const rotations = [-3, -2, -1, 1, 2, 3];

const getStyle = (i) => {
    const rotate = rotations[i % rotations.length];
    const translateY = (i % 3) * 4;

    return {
        '--r': `${rotate}deg`,
        '--y': `${translateY}px`
    };
};
</script>

<style scoped>

.gallery-section {
    padding: 120px 0;
    background: #faf8f5;
}

.section-title {
    margin-bottom: 60px;
}

.sub-title {
    display: block;
    color: #999;
    letter-spacing: 4px;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.section-title h2 {
    font-size: clamp(26px, 4vw, 42px);
}

.polaroid-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-items: center;
}

.polaroid {
    width: 100%;
    max-width: 280px;
    background: #fff;
    padding: 12px 12px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    cursor: pointer;
    transition: all 0.3s ease;

    /* ⭐ QUAN TRỌNG: chỉ dùng 1 transform duy nhất */
    transform: rotate(var(--r)) translateY(var(--y));
}

/* IMAGE */
.photo {
    width: 100%;
    height: 320px;
    overflow: hidden;
    border-radius: 8px;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
}

/* CAPTION */
.caption {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #666;
}

/* HOVER DESKTOP */
.polaroid:hover {
    transform: rotate(0deg) scale(1.05) !important;
    z-index: 10;
}

.polaroid:hover img {
    transform: scale(1.08);
}

@media (max-width: 992px) {

    .polaroid-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    .polaroid {
        max-width: 150px;
        padding: 8px 8px 12px;

        transform: rotate(var(--r)) translateY(var(--y)) !important;
    }

    .photo {
        height: 150px;
    }

    .caption {
        font-size: 11px;
    }
}

@media (max-width: 576px) {

    .polaroid-grid {
        gap: 10px;
    }

    .polaroid {
        max-width: 130px;
        padding: 6px 6px 10px;
    }

    .photo {
        height: 130px;
    }

    .caption {
        font-size: 10px;
    }
}

</style>