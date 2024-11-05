$(".el-collapse-item__wrap").on("click", function () {
    const $wrapCon = $(".el-collapse-item__wrap-con");

    if ($wrapCon.hasClass("active")) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $wrapCon.slideUp().removeClass("active");
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $wrapCon.slideDown().addClass("active");
    }
});


$(document).ready(function () {
    $('.product-cont__lst a').on('click', function (e) {
        e.preventDefault(); // 기본 앵커 클릭 동작을 방지

        // 모든 <li> 요소에서 'active' 클래스 제거
        $('.product-cont__lst li').removeClass('active');

        // 클릭한 <a> 태그의 부모 <li>에 'active' 클래스 추가
        $(this).parent('li').addClass('active');

        // 대상 섹션으로 부드럽게 스크롤
        const targetId = $(this).attr('href');
        const targetPosition = $(targetId).offset().top;

        $('html, body').animate({ scrollTop: targetPosition }, 500);
    });
});