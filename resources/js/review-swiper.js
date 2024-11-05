var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});