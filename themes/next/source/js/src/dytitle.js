//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/loremwalker.github.io/images/favicon.ico");
        document.title = ' 啦啦啦，啦啦，去呀~ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/loremwalker.github.io/images/favicon.ico");
        document.title = ' 冲出你的窗口 ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});