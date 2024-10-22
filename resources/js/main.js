const swiper = new Swiper('.goods-thumb-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.goods-thumb-pagination',
        clickable: true,
        bulletClass: 'goods-thumb-pagination-bullet',
        bulletActiveClass: 'goods-thumb-pagination-bullet-active',
    },
    navigation: {
        nextEl: '.goods-thumb-button-next',
        prevEl: '.goods-thumb-button-prev',
    },
});
