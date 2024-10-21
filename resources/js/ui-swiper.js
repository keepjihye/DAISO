// swiper
// swiper main, container 연동하기
var swiperTopNum = $('.swiper__main').find('.swiper-slide');
var swiperSubNum = $('.swiper__container').find('.swiper__container');

var swiperMain = new Swiper(".swiper__main", {
    spaceBetween: 30,
    centeredSlides: true,
    observer: true,  // DOM 변화를 감지
    observeParents: true,  // 부모 요소의 변화를 감지
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
    on: {
        slideChange: function () {
            setTimeout(function () {
                if (swiperMain.activeIndex !== swiperCon.activeIndex) {
                    swiperCon.slideTo(swiperMain.activeIndex, true); // 애니메이션 활성화
                }
            }, 50); // 살짝의 딜레이 추가
        }
    }


},
);

var swiperCon = new Swiper(".swiper__container", {
    slidesPerView: 5,
    spaceBetween: 8,
    slidesPerGroup: 1,
    observer: true,  // DOM 변화를 감지
    observeParents: true,  // 부모 요소의 변화를 감지
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slideToClickedSlide: true,
    on: {
        slideChange: function () {
            setTimeout(function () {
                if (swiperCon.activeIndex !== swiperMain.activeIndex) {
                    swiperMain.slideTo(swiperCon.activeIndex, true); // 애니메이션 활성화
                }
            }, 50); // 살짝의 딜레이 추가
        }
    }


});

// swiper main, container 연동하기
swiperMain.controller.control = swiperCon;
swiperCon.controller.control = swiperMain;

