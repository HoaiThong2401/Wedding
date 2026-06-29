<template>
    <section class="gallery-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    OUR GALLERY
                </span>

                <h2>Album Ảnh</h2>

            </div>

            <div class="row g-4">

                <div
                    v-for="i in 6"
                    :key="i"
                    class="col-lg-4 col-md-6">

                    <div class="gallery-item">

                        <img
                            :src="`https://picsum.photos/600/800?random=${i}`"
                            class="img-fluid">

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.gallery-section{
    padding:120px 0;
}

.section-title{
    margin-bottom:60px;
}

.sub-title{
    display:block;
    color:#999;
    letter-spacing:4px;
    margin-bottom:10px;
}

.section-title h2{
    font-size:42px;
}

.gallery-item{
    overflow:hidden;
    border-radius:18px;
    cursor:pointer;
}

.gallery-item img{
    width:100%;
    height:420px;
    object-fit:cover;
    transition:.4s;
}

.gallery-item:hover img{
    transform:scale(1.08);
}

</style>