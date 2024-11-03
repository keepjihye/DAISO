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