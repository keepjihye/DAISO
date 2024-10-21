var swiperMain = new Swiper(".swiper__main", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> | <span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            swiperCon.slideTo(swiperMain.activeIndex, true);
        }
    }
});

var swiperCon = new Swiper(".swiper__container", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            swiperMain.slideTo(swiperCon.activeIndex, true);
        }
    }
});

// 연결
swiperMain.controller.control = swiperCon;
swiperCon.controller.control = swiperMain;

// 사용자 정의 슬라이드 이동 기능
const nextButton = document.querySelector(".swiper-button-next");
const prevButton = document.querySelector(".swiper-button-prev");

nextButton.addEventListener("click", function () {
    swiperCon.slideNext();
});

prevButton.addEventListener("click", function () {
    swiperCon.slidePrev();
});