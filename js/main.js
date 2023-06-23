$(function () {

    // 메인비쥬얼 다음페이지
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
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
        $('.product_wrap .dots li').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.product').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 1000,
        arrows: false,
        centerMode: true,
    });

    $('.product_wrap .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.product').slick('slickGoTo', idx);
    });




});