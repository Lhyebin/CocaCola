$(function () {
    //@media : header 메뉴바
    $('.mopen').on('click', function () {
        $('.top_bar').toggleClass('on')
    })

    $('.top_bar>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.sub').slideUp();
        // -> 마지막줄 반응형에서 다른 서브메뉴 클릭했을때 이전 서브메뉴 들어가게하기
    })








    // 메인비쥬얼 다음페이지
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 다음페이지 화살표
    $('.main_visual .tab_arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .tab_arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })





    /* <음료 카테고리 다음페이지> */

    $('.product').on('init afterChange', function (e, s, c) {
        $('.product_wrap .dots li')
            .eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.product').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.product_wrap .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.product').slick('slickGoTo', idx);
    });




});