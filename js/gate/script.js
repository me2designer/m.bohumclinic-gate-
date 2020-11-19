var $mainWrap = $('#wrap');
var $visual = $('#secVisual');
var $info = $('#banner_info');
var $loding= $('#loding');
var $footer = $('#footer');


$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* start */
    $mainWrap.addClass('active').css({
        visibility: 'visible',
        opacity : 1
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* '100vh' 반응형 적용 - 참고 : https://tinyurl.com/y6ynp935 */
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    /* parallax-bg 값(정렬) */
    var winW = window.innerWidth;
    var bgW = $visual.find('.parallax-bg').width();
    var bgX = (bgW - winW) * -1;

    $visual.find('.parallax-bg').attr('data-swiper-parallax',bgX);



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){


    /* swiper */
    var swiperSpeed = 600;

    var swiper = new Swiper('.swiper-container', {
        speed: swiperSpeed,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });

    // 시작 위치 설정
    swiper.slideTo($visual.find('.swiper-slide:eq(1)').index(), 0, false);

    // SHOP, FA 이동버튼
    $visual.find('.btn_sign').on('click', function () {
        var $this = $(this);

        if ($this.hasClass('btn_shop')){
            swiper.slideTo($visual.find('.swiper-slide:eq(0)').index(), swiperSpeed, false);
        } else {
            swiper.slideTo($visual.find('.swiper-slide:eq(2)').index(), swiperSpeed, false);
        }
    });

    // $info - fadeIn & fadeOut
    swiper.on('slideChange',function(){
        if (this.activeIndex !== 1){
            $info.stop().animate({ opacity : 0 }, 100).addClass('antiTouch');
        } else {
            $info.stop().animate({
                opacity : 1
            }, 100, function(){
                $info.removeAttr('style');
            }).removeClass('antiTouch');
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 페이지 이동 */
    $visual.find('.link_shop, .link_fa').on('click', function() {
        var $this = $(this);

        if ($this.hasClass('link_shop')){
            $mainWrap.removeClass('locationFa').addClass('locationShop');
            $loding.show();
            setTimeout(function(){
                location.href = "//m.bohumclinic.com/shop"
            }, 500);
        } else {
            $mainWrap.removeClass('locationShop').addClass('locationFa');
            $loding.show();
            setTimeout(function(){
                location.href = "//m.bohumclinic.com/visit"
            }, 1000);
        }

        $loding.on('click', function() {
            $loding.hide();
        });
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* FOOTER */
    $footer.find('.btn_close').on('click', function() {
        $footer.removeClass('active');
        $info.addClass('active');
    });

    $info.find('.btn_info').on('click', function() {
        $footer.addClass('active');
        $info.removeClass('active');
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...