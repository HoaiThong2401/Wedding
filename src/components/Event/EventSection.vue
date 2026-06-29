<template>
    <section class="event-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    WEDDING EVENT
                </span>

                <h2>
                    Thông Tin Lễ Cưới
                </h2>

            </div>

            <div class="row g-4">

                <!-- Nhà trai -->
                <div class="col-lg-6">

                    <div class="event-card">

                        <h3>💙 Lễ Thành Hôn</h3>

                        <div class="event-info">

                            <p><strong>Thời gian</strong></p>

                            <span>09:00 - Chủ Nhật</span>

                            <span>15.12.2026</span>

                        </div>

                        <div class="event-info">

                            <p><strong>Địa điểm</strong></p>

                            <span>
                                Trung tâm Hội nghị ABC,
                                Quận 1, TP.HCM
                            </span>

                        </div>

                        <button class="btn btn-outline-dark mt-4">
                            <i class="bi bi-geo-alt-fill me-2"></i>
                            Xem bản đồ
                        </button>

                    </div>

                </div>

                <!-- Nhà gái -->
                <div class="col-lg-6">

                    <div class="event-card">

                        <h3>💗 Tiệc Cưới</h3>

                        <div class="event-info">

                            <p><strong>Thời gian</strong></p>

                            <span>18:00 - Chủ Nhật</span>

                            <span>15.12.2026</span>

                        </div>

                        <div class="event-info">

                            <p><strong>Địa điểm</strong></p>

                            <span>
                                White Palace,
                                TP.HCM
                            </span>

                        </div>

                        <button class="btn btn-outline-dark mt-4">
                            <i class="bi bi-geo-alt-fill me-2"></i>
                            Xem bản đồ
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.event-section{
    padding:120px 0;
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

.event-card{

    border-radius:20px;

    padding:45px;

    box-shadow:0 15px 40px rgba(0,0,0,.08);

    height:100%;

}

.event-card h3{

    margin-bottom:35px;

    text-align:center;

}

.event-info{

    margin-bottom:25px;

}

.event-info p{

    margin-bottom:8px;

    color:#555;

}

.event-info span{

    display:block;

    color:#777;

    line-height:1.8;

}

.btn{

    border-radius:30px;

    padding:10px 24px;

}

</style>