var swiper = new Swiper(".swiper__main", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
},
);

var swiper = new Swiper(".swiper__container", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
