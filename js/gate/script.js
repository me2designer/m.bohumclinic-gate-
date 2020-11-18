var $mainWrap = $('#wrap');
var $visual = $('#secVisual');
var $info = $('#banner_info');
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


    var swiperSpeed = 600;

    swiper = new Swiper('.swiper-container', {
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


    swiper.slideTo($visual.find('.swiper-slide:eq(1)').index(), 0, false);

    // SHOP 이동버튼
    $visual.find('.btn_sign').on('click', function () {
        var $this = $(this);

        if ($this.hasClass('btn_shop')){
            swiper.slideTo($visual.find('.swiper-slide:eq(0)').index(), swiperSpeed, false);
        } else {
            swiper.slideTo($visual.find('.swiper-slide:eq(2)').index(), swiperSpeed, false);
        }
    });


})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* FOOTER */
    $footer.find('.btn_close').on('click', function() {
        $footer.removeClass('active');
        $info.addClass('active');
    });

    $info.on('click', function() {
        $footer.addClass('active');
        $info.removeClass('active');
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...