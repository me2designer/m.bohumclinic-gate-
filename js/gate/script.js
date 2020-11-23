var $mainWrap = $('#wrap');
var $visual = $('#secVisual');
var $info = $('#banner_info');
var $loding= $('#loding');
var $footer = $('#footer');


$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* SVG invert - 참고 : https://tinyurl.com/y68wczgc */
    svgImport = function (callback){
        $('img.svg').each(function(){

            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

                if(callback) callback();

            }, 'xml');
        });
    }
    svgImport();



})();/*
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

    // HOME 아이콘 추가
    var $paging = $visual.find('.swiper-pagination');                

    $paging.find('.swiper-pagination-bullet:eq(1)').prepend('<img class="svg" src="/img/gate_2020/ico_home.svg">');
    svgImport();

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
    // swiper.on('slideChange',function(){
    //     if (this.activeIndex !== 1){
    //         $info.stop().animate({ opacity : 0 }, 100).addClass('antiTouch');
    //     } else {
    //         $info.stop().animate({
    //             opacity : 1
    //         }, 100, function(){
    //             $info.removeAttr('style');
    //         }).removeClass('antiTouch');
    //     }
    // });

    


   
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