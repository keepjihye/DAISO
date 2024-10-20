var swiperTopNum = $('.swiper__main').find('.swiper-slide');
var swiperSubNum = $('.swiper__container').find('.swiper__container');

var swiperMain = new Swiper(".swiper__main", {
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

var swiperCon = new Swiper(".swiper__container", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slideToClickedSlide: true,
});

swiperMain.controller.control = swiperCon;
swiperCon.controller.control = swiperMain;
