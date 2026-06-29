<template>
    <section class="rsvp-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    BEST WISHES
                </span>

                <h2>Gửi Lời Chúc</h2>

            </div>

            <div class="row justify-content-center">

                <div class="col-lg-8">

                    <div class="wish-form">

                        <div class="mb-3">

                            <input
                                type="text"
                                class="form-control"
                                placeholder="Họ và tên">

                        </div>

                        <div class="mb-3">

                            <textarea
                                rows="5"
                                class="form-control"
                                placeholder="Viết lời chúc...">
                            </textarea>

                        </div>

                        <button class="btn btn-dark w-100">
                            Gửi lời chúc
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.rsvp-section{
    padding:120px 0;
    background:#faf8f5;
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

.wish-form{

    padding:40px;

    border-radius:20px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.form-control{

    border-radius:12px;

    padding:14px 18px;

}

.btn{

    border-radius:12px;

    padding:14px;

}

</style>