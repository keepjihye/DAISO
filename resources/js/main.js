$('.el-collapse-item__wrap-1').on('click', function () {
    const $wrapCon = $('.el-collapse-item__wrap-con-1');

    if ($wrapCon.hasClass('active')) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $wrapCon.slideUp().removeClass('active');
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $wrapCon.slideDown().addClass('active');
    }
});

$('.el-collapse-item__wrap-2').on('click', function () {
    const $wrapCon = $('.el-collapse-item__wrap-con-2');

    if ($wrapCon.hasClass('active')) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $wrapCon.slideUp().removeClass('active');
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $wrapCon.slideDown().addClass('active');
    }
});

const radioButtons = document.querySelectorAll('.el-radio-button__orig-radio');

radioButtons.forEach((radio) => {
    radio.addEventListener('click', () => {
        // 모든 라디오 버튼의 부모 요소에서 active 클래스 제거
        radioButtons.forEach((btn) => {
            btn.parentElement.classList.remove('active');
            // 부모의 부모 요소 배경색 제거
            btn.parentElement.parentElement.style.border = '';
        });

        // 클릭된 라디오 버튼의 부모 요소에 active 클래스 추가
        radio.parentElement.classList.add('active');

        // 부모 요소에 active 클래스가 있는 경우 그 부모의 부모 요소 배경색 설정
        if (radio.parentElement.classList.contains('active')) {
            radio.parentElement.parentElement.style.border = '2px solid #067dfd';
        }
    });
});

$('.el-radio-group__2').on('click', function () {
    const $pickupbtn = $('.el-button__pickup');

    if ($pickupbtn.hasClass('active')) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $pickupbtn.removeClass('active');
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $pickupbtn.addClass('active');
    }
});
