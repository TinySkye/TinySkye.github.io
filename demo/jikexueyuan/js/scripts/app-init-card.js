define(['jquery'],
    function () {
        $('.courses-tabs .tabs > ul > li:nth-child(1)').addClass('tab-active');
        var $blocks = $('.courses-tabs .container').find('.content-block');
        $($blocks[0]).show();
        //    课程选项卡事件绑定
        $('.courses-tabs .tabs > ul > li').each(function () {
            $(this).hover(function () {
                var $allBlock = $('.courses-tabs .container').find('.content-block');
                for (var i = 0; i < $allBlock.length; i++) {
                    $($allBlock[i]).hide();
                }
                $('.block-' + $(this).data('related')).show();

                var $allTabs = $('.courses-tabs .tabs >ul ').find('li');
                for (var j = 0; j < $allTabs.length; j++) {
                    $($($allTabs[j])).removeClass('tab-active');
                }
                $('.courses-tabs .tabs >ul >li:nth-child(' + $(this).data('related') + ')').addClass('tab-active');
            })
        });
        //    课程卡HOVER事件绑定
        $('.course-card').each(function () {
            $(this).hover(function () {
                $('.card-image .hover-play', $(this)).fadeIn('fast');
                $('.card-info .desc', $(this)).fadeIn('fast');
            }, function () {
                $('.card-image .hover-play', $(this)).fadeOut('fast');
                $('.card-info .desc', $(this)).fadeOut('fast');
            });
        });
    }
);