<template>
    <section class="couple-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    Bride & Groom
                </span>

                <h2>Cô Dâu & Chú Rể</h2>

            </div>

            <div class="row align-items-center gy-3">

                <div class="col-6">
                    <div class="person">
                        <div class="avatar">
                            <img src="/images/avatar_nam.jpg" alt="Groom">
                        </div>

                        <span class="role">Chú rể</span>
                        <h3 class="name">Hoàng Thiện</h3>

                        <p class="description">
                            Con ông Lê Xuyên Truyền<br>
                            Con bà Lê Thị Thanh Nữ
                        </p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="person">
                        <div class="avatar">
                            <img src="/images/avatar_nu.jpg" alt="Bride">
                        </div>

                        <span class="role">Cô dâu</span>
                        <h3 class="name">Phan Linh</h3>

                        <p class="description">
                            Con ông...<br>
                            Con bà...
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.couple-section{
    padding:120px 0;
}

.section-title{
    margin-bottom:70px;
}

.sub-title{
    display:block;
    letter-spacing:4px;
    color:#9a9a9a;
    text-transform:uppercase;
    margin-bottom:12px;
}

.section-title h2{
    font-size:42px;
    font-weight:600;
}

.person{
    text-align:center;
}

.avatar {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 3 / 4;
  margin: auto;

  overflow: hidden;
  border-radius: 220px 220px 0 0;

  position: relative;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.role{
    display:block;
    margin-top:30px;
    color:#777;
    font-size:18px;
}

.name{
    margin-top:10px;
    font-size:40px;
    color:#4b5320;
    font-weight:500;
}

.description{
    margin-top:18px;
    color:#666;
    line-height:1.8;
}

@media (max-width: 768px) {

    .role {
        font-size: 14px;
        margin-top: 10px;
    }

    .name {
        font-size: 18px;
    }

    .description {
        font-size: 12px;
        line-height: 1.5;
    }

    .avatar {
        width: 100%;
        max-width: 160px;
    }

}

</style>