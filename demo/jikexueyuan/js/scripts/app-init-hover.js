define(['jquery'],
    function () {
        //搜索框热搜控制
        $('#kw').focus(function () {
            $('.trending-search').hide();
        });
        $('#kw').focusout(function () {
            $('.trending-search').show();
        });
        //头部菜单HOVER
        $('.nav-header>li').each(function () {
            var dataAttr = $(this).data('related') || 0;
            $(this).hover(function () {
                $('.menu-contents').show();
                if (dataAttr) {
                    $('.menu-contents .menu-' + dataAttr).addClass('hoverstate');
                }
            }, function () {
                $('.menu-contents').hide();
                if (dataAttr) {
                    $('.menu-contents .menu-' + dataAttr).removeClass('hoverstate');
                }
            });
        });
        //    内容HOVER
        $('.menu-contents').mouseenter(function () {
            $(this).show();
        });
        $('.menu-contents').mouseleave(function () {
            $(this).hide();
        });
        //    课程菜单
        $('.courses-list>li').each(function () {
            var dataAttr = $(this).data('related') || '0';
            $(this).hover(function () {
                if (dataAttr) {
                    $('.detail-menu-' + dataAttr).show();
                }
            }, function () {
                if (dataAttr) {
                    $('.detail-menu-' + dataAttr).hide();
                }
            })
        });
    }
);