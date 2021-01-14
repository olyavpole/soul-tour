$(function () {

    // шапка сайта

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass('active');
        }
        else {
            $('header').removeClass('active');
        }
    });

    //анимация чисел

    var currentNumber = $('.achievements__item-number').text();
    let show = true;

    $(window).on('scroll', function () {

        if (!show) return false;

        let windowTop = $(window).scrollTop();
        let elementTop = $('.achievements').offset().top;

        if (windowTop + 300 >= elementTop) {

            $({ numberValue: currentNumber }).animate({ numberValue: 1870 }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $('.achievements__item-number--red').text(Math.ceil(this.numberValue));
                }
            });

            $({ numberValue: currentNumber }).animate({ numberValue: 1267 }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $('.achievements__item-number--yellow').text(Math.ceil(this.numberValue));
                }
            });

            $({ numberValue: currentNumber }).animate({ numberValue: 10 }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $('.achievements__item-number--green').text(Math.ceil(this.numberValue));
                }
            });

            $({ numberValue: currentNumber }).animate({ numberValue: 190 }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $('.achievements__item-number--blue').text(Math.ceil(this.numberValue));
                }
            });

            show = false;
        }
    });

    // слайдер с направлениями

    $('.our-destinations__slider').slick({
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    arrows: false,
                    adaptiveHeight: true
                }
            },
        ]
    });

    // слайдер для страницы с одним направлением

    $('.single-destination__slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.single-destination__slider-small',
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
        ]
    });

    $('.single-destination__slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single-destination__slider-main',
        focusOnSelect: true,
        arrows: false,
        variableWidth: true
    });

    // микситап

    if ($('div').is('.mix')) {
        var mixer = mixitup('.all-tours__wrapper');
    };

    // слайдер с отзывами

    $('.feedback__slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    arrows: false
                }
            },
        ]
    });

    // дропдауны в меню

    $('.dropdown').hover(function () {
        $(this).prev('.header__menu-link--dropdown').toggleClass('active1')
    });

    // клик на бургер меню

    $('.header__burger').click(function () {
        $('.header__menu-list').toggleClass('active');
    });

    $('.header__menu-link--dropdown').click(function () {
        $(this).toggleClass('active');
        $(this).next('.header__menu-dropdown').toggleClass('active');
    });

    $('.header__menu-link').click(function () {
        $('.header__menu-list').removeClass('active');
    });

    $('.header__menu-link--dropdown').click(function () {
        $('.header__menu-list').addClass('active');
    });

    $('.dropdown__link').click(function () {
        $('.header__menu-list').removeClass('active');
        $('.header__menu-dropdown').removeClass('active');
        $('.header__menu-link--dropdown').removeClass('active');
    });

    // табы

    $('.tabs__top-item').click(function(e) {

        // стили навигации табов

        $('.tabs__top-item').removeClass('active');
        $(this).addClass('active')

        // переход по табам

        e.preventDefault();
        $('.tabs__item').removeClass('active');
        $($(this).attr('href')).addClass('active')
    });

    $('.tabs__top-item:first').click();

});
