define(
    ['jquery',
        'flickerplate',
        'scrollbox',
        'modernizr',
        'finger'],
    function () {
        //    启动图片轮播
        $(document).ready(function () {
            $('.picture-slider').flicker({
                arrows: true,
                arrows_constraint: false,
                auto_flick: true,
                auto_flick_delay: 10,
                block_text: true,
                dot_navigation: true,
                dot_alignment: 'center',
                flick_animation: 'transition-slide',
                flick_position: 1,
                inner_width: false,
                theme: 'light'
            });
            //    小图轮播
            $('.scroll-box').scrollbox({delay: 1000,direction: 'h'});
        })
    }
);