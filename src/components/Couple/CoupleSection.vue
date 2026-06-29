<template>
    <section class="couple-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    Bride & Groom
                </span>

                <h2>Cô Dâu & Chú Rể</h2>

            </div>

            <div class="row align-items-center gy-5">

                <!-- Groom -->
                <div class="col-lg-6">

                    <div class="person">

                        <div class="avatar">

                            <img
                                src="https://placehold.co/450x600"
                                alt="Groom">

                        </div>

                        <span class="role">
                            Chú rể
                        </span>

                        <h3 class="name">
                            Đăng Quang
                        </h3>

                        <p class="description">
                            Con ông...
                            <br>
                            Con bà...
                        </p>

                    </div>

                </div>

                <!-- Bride -->
                <div class="col-lg-6">

                    <div class="person">

                        <div class="avatar">

                            <img
                                src="https://placehold.co/450x600"
                                alt="Bride">

                        </div>

                        <span class="role">
                            Cô dâu
                        </span>

                        <h3 class="name">
                            Thuý An
                        </h3>

                        <p class="description">
                            Con ông...
                            <br>
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

.avatar{
    width:340px;
    margin:auto;
    overflow:hidden;
}

.avatar img{
    width:100%;
    display:block;
    border-radius:220px 220px 0 0;
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

@media(max-width:992px){

    .avatar{

        width:260px;

    }

    .name{

        font-size:32px;

    }

}

</style>