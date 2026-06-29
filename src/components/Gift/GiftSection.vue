<template>
    <section class="gift-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    WEDDING GIFT
                </span>

                <h2>Mừng Cưới</h2>

                <p>
                    Sự hiện diện của bạn là món quà quý giá nhất.
                    Nếu muốn gửi lời chúc bằng một món quà nhỏ,
                    bạn có thể quét mã QR bên dưới.
                </p>

            </div>

            <div class="row g-4 justify-content-center">

                <!-- Groom -->

                <div class="col-lg-5">

                    <div class="gift-card">

                        <div class="qr">

                            <img
                                src="https://placehold.co/260x260"
                                alt="QR Groom">

                        </div>

                        <h4>Chú Rể</h4>

                        <h5>Đăng Quang</h5>

                        <div class="bank">

                            <p>Vietcombank</p>

                            <span>0123456789</span>

                        </div>

                    </div>

                </div>

                <!-- Bride -->

                <div class="col-lg-5">

                    <div class="gift-card">

                        <div class="qr">

                            <img
                                src="https://placehold.co/260x260"
                                alt="QR Bride">

                        </div>

                        <h4>Cô Dâu</h4>

                        <h5>Thuý An</h5>

                        <div class="bank">

                            <p>MB Bank</p>

                            <span>987654321</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.gift-section{
    padding:120px 0;
}

.section-title{
    margin-bottom:60px;
}

.sub-title{
    display:block;
    letter-spacing:4px;
    color:#999;
    margin-bottom:10px;
}

.section-title h2{
    font-size:42px;
    margin-bottom:20px;
}

.section-title p{
    color:#666;
    max-width:650px;
    margin:auto;
    line-height:1.8;
}

.gift-card{

    border-radius:24px;

    padding:45px;

    text-align:center;

    box-shadow:0 12px 30px rgba(0,0,0,.08);

    height:100%;

}

.qr{

    margin-bottom:25px;

}

.qr img{

    width:220px;

    border-radius:12px;

}

.gift-card h4{

    color:#777;

    margin-bottom:8px;

}

.gift-card h5{

    font-size:28px;

    margin-bottom:25px;

}

.bank{

    border-top:1px solid #eee;

    padding-top:20px;

}

.bank p{

    font-weight:600;

    margin-bottom:6px;

}

.bank span{

    color:#666;

}

</style>