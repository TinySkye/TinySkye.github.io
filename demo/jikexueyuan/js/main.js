requirejs.config({
    baseUrl: 'js/scripts',
    paths: {
        jquery: 'plugins/jquery',
        modernizr: 'plugins/modernizr',
        scrollbox: 'plugins/jquery.scrollbox',
        finger: 'plugins/jquery.finger',
        flickerplate: 'plugins/flickerplate'
    },
    //使用了 jquery 插件，需要进行依赖配置
    shim: {
        finger: {
            deps: ['jquery']
        },
        flickerplate: {
            deps: ['jquery', 'modernizr']
        },
        scrollbox: {
            deps: ['jquery']
        }
    }
});

//菜单初始化
require(['app-init-hover'], function () {
});
//课程卡初始化
require(['app-init-card'], function () {
});
//图片滚动初始化
require(['app-init-scroll'], function () {
});

requirejs(['jquery'], function ($) {
//    处理小图片点击
    $('#l1').click(function () {
        $('#s1').trigger('backward');
    });
    $('#r1').click(function () {
        $('#s1').trigger('forward');
    });
    $('#l2').click(function () {
        $('#s2').trigger('backward');
    });
    $('#r2').click(function () {
        $('#s2').trigger('forward');
    });
    $('#l3').click(function () {
        $('#s3').trigger('backward');
    });
    $('#r3').click(function () {
        $('#s3').trigger('forward');
    });
    $('#l4').click(function () {
        $('#s4').trigger('backward');
    });
    $('#r4').click(function () {
        $('#s4').trigger('forward');
    });
});