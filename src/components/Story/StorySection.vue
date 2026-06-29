<template>
    <section class="story-section">

        <div class="container">

            <div class="section-title text-center">

                <span class="sub-title">
                    OUR STORY
                </span>

                <h2>
                    Chuyện Tình Yêu
                </h2>

            </div>

            <div class="timeline">

                <!-- ITEM 1 -->
                <div class="story-item left">

                    <div class="story-image">
                        <img src="https://placehold.co/500x350" alt="">
                    </div>

                    <div class="story-content">

                        <span class="story-date">20.10.2021</span>

                        <h3>Lần đầu gặp gỡ</h3>

                        <p>
                            Đó là một ngày đặc biệt khi hai chúng mình lần đầu
                            biết đến nhau. Một cuộc gặp gỡ tình cờ nhưng lại là
                            khởi đầu của một hành trình dài.
                        </p>

                    </div>

                </div>

                <div class="story-item right">

                    <div class="story-image">
                        <img src="https://placehold.co/500x350" alt="">
                    </div>

                    <div class="story-content">

                        <span class="story-date">15.05.2022</span>

                        <h3>Chính thức hẹn hò</h3>

                        <p>
                            Sau nhiều lần trò chuyện và đồng hành, chúng mình
                            quyết định bước vào một mối quan hệ nghiêm túc.
                        </p>

                    </div>

                </div>

                <div class="story-item left">

                    <div class="story-image">
                        <img src="https://placehold.co/500x350" alt="">
                    </div>

                    <div class="story-content">

                        <span class="story-date">10.01.2026</span>

                        <h3>Lời cầu hôn</h3>

                        <p>
                            Một khoảnh khắc không thể nào quên khi lời cầu hôn
                            được cất lên và cả hai cùng đồng ý viết tiếp câu
                            chuyện tình yêu.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

.story-section {
    padding-bottom:80px;
}

.section-title {
    margin-bottom: 70px;
}

.sub-title {
    display: block;
    letter-spacing: 4px;
    color: #999;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.section-title h2 {
    font-size: 42px;
    font-weight: 600;
}

.timeline {
    position: relative;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #d9d9d9;
    transform: translateX(-50%);
}

.story-item {
    width: 45%;
    margin-bottom: 70px;
}

.story-item.left {
    margin-right: auto;
}

.story-item.right {
    margin-left: auto;
}

.story-image img {
    width: 100%;
    border-radius: 16px;
    display: block;
}

.story-content {
    margin-top: 20px;
}

.story-date {
    color: #b48a64;
    font-weight: 600;
}

.story-content h3 {
    margin: 10px 0;
    font-size: 28px;
}

.story-content p {
    color: #666;
    line-height: 1.8;
}

@media (max-width: 992px) {

    .story-item {
        width: 48%;
        margin-bottom: 35px;
        transition: transform 0.3s ease;
    }

    .story-item.left {
        transform: translateX(-5px);
    }

    .story-item.right {
        transform: translateX(5px);
    }

    .story-image img {
        width: 100%;
        border-radius: 14px;
    }

    .story-content h3 {
        font-size: 18px;
    }

    .story-content p {
        font-size: 13px;
        line-height: 1.5;
    }

    .timeline::before {
        width: 1px;
        opacity: 0.5;
    }
}

</style>