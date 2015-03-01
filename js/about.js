(function () {
    var ua = navigator.userAgent,
        isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

    if (isMobileWebkit) {
        $('html').addClass('mobile');
    }

    $(function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $("#navbar").addClass("small");
            }
            else {
                $("#navbar").removeClass("small");
            }
        });

        $(".about_panel").height($(window).height());

        var iScrollInstance;

        if (isMobileWebkit) {
            iScrollInstance = new iScroll('wrapper');

            $('#scroller').stellar({
                scrollProperty: 'transform',
                positionProperty: 'transform',
                parallaxBackgrounds: false,
                horizontalScrolling: false
            });
        }
        else {
            $.stellar({
                horizontalScrolling: false
            });
        }
    });
})();
