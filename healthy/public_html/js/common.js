$(document).ready(function () {

    $(".main-slider .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: true,
        cssEase: 'ease',
        speed: 700
    });

    $(".review-bottom > .wrapper").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: true,
        speed: 700
    });

    var lastScrollTop = 0;

    if ($(window).width() > 992) {
        scrollOffset = 78;
    } else if ($(window).width() > 768) {
        scrollOffset = 139;
    } else {
        scrollOffset = 84;
    }

    $('.scroll-nav').bind('click', function (e) {
        e.preventDefault();

        var $anchor = $(this);
        // $anchor.parents().eq(1).find('a').removeClass('current');
        // $anchor.addClass('current');

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - scrollOffset)
        }, 1000, 'swing');
    });

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 150) {
            $(".scrollToTop").fadeIn();
        } else {
            $(".scrollToTop").fadeOut();
        }

        if (st > 15) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
        }

        if (st > lastScrollTop) {
            $('header').fadeOut(150);
        } else {
            $('header').fadeIn(150);
        }
        lastScrollTop = st;
    });


    $(window).on('scroll', function () {
        var sections = $('#home, #shop, #about, #blog');
        var nav = $('.main-nav');
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - scrollOffset;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li a').removeClass('current');
                $(this).addClass('current');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
            }
        });
    });


    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 700);
        return false;
    });

    $(".organic .tabs > .wrapper .button").on('click', function (e) {
        $('.organic .tabs > .wrapper .button').removeClass('current-tab');
        $('.organic .organic-slider').removeClass('organic-slider--active');
        $(this).addClass('current-tab');

        $('.organic .organic-slider:eq( ' + $(this).index() + ' ) ').addClass('organic-slider--active');
    });

    $('.organic-slider .item .expand').on('click', function () {
        $(this).parents().eq(2).find('a.img').trigger('click');
    });
    $('.discount-list .item .expand').on('click', function () {
        $(this).parents().eq(1).find('.right-col a').trigger('click');
    });

    $('.catalog-wrapper .item').click(function () {
        let href = $(this).find('.item-title a').attr('href');
        window.location.href = href;
    });

    $(".review-form input").on("blur focus", function (e) {
        var $this = $(this);
        var $parent = $this.parent().find("label");
        if (e.type == "focus") {
            if ($this.val() !== "") {
                $parent.addClass("label-active");
            } else {
                $parent.toggleClass("label-active");
            }
        } else if (e.type == "blur") {
            if ($this.val() == "") {
                $parent.removeClass("label-active");
            } else {
                $parent.addClass("label-active");
            }
        }
    });

});