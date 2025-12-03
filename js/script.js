$(function () {

    $('.gnb_left a, .gnb_right a').on('click', function (e) {
        e.preventDefault();

        let target = $(this).attr('href');
        let offsetTop = $(target).offset().top;

        $('html, body').stop().animate(
            { scrollTop: offsetTop },
            600
        );
    });

});


//#visual visualSwiper 시작, 메인 배너 부분
var swiper = new Swiper(".visualSwiper", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 0, // 슬라이드 사이 여백
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    speed: 1500, // fade 효과의 전환 시간을 1000ms(1.5초)로 설정
    loop: true, // 슬라이드 반복 여부
    navigation: false, // 화살표 버튼 제거
    pagination: {
        el: "#visual .swiper-pagination",
        clickable: true,  // 불렛 버튼 클릭 여부
    }
});

//aside top 버튼 
$(function () {
    //맨 위 부드럽게 이동
    $(".aside button").click(function () {
        $("html,body").animate({
            // 세로위치 0
            scrollTop: '0'
            //1초동안
        }, 1000);
    });

    //일정 구간부터 버튼 나타나게 하기
    $(".aside button").hide();
    // 스크롤하면,
    $(window).scroll(function () {
        // 100보다 크면 보이고, 100보다 작으면 사라진다.
        if ($(this).scrollTop() > 100) {
            $(".aside button").fadeIn()
        } else {
            $(".aside botton").fadeOut()
        }
    });
});

