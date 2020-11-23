cache = '?v='+(new Date).getTime();

var files = [
    '//fonts.peoplelife.co.kr/fonts/SCDream/SCDream.css',
    '//fonts.peoplelife.co.kr/fonts/HGGGothicssi/HGGGothicssi.css',
    '//public.peoplelife.co.kr/lib/swiper/swiper.css',
    //'lib/swiper/swiper-bundle.min.css',
    '//public.peoplelife.co.kr/css/reset.css',
    '//public.peoplelife.co.kr/css/common_mo.css',
    'css/gate_2020/style.css',

    '//public.peoplelife.co.kr/lib/jquery/jquery.js',
    '//public.peoplelife.co.kr/lib/swiper/swiper.js',
    //'lib/swiper/swiper-bundle.min.js',
    'js/gate_2020/script.js',
]

for (var i=0; i<files.length; i++){
    if (files[i].indexOf('.js') != -1){
        var el = document.createElement('script');
        el.async = false;
        el.type = 'text/javascript';
        el.src = files[i]+cache;

        (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(el);
    } else if (files[i].indexOf('.css') != -1) {
        var el = document.createElement('link');
        el.rel = 'stylesheet';
        el.type = 'text/css';
        el.href = files[i]+cache;

        (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(el);
    }
}

// 이미지 캐시제거
var nods = document.getElementsByTagName('img');
for (var i = 0; i < nods.length; i++)
{
    nods[i].attributes['src'].value += "?a=" + cache;
}