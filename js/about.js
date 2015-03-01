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

        $("#hamburger").click(function () {
            $("#navbar").show().click(function() {
                $(this).hide();
            });
        });

        $(window).resize(function() {
            if($(this).width() >= 675) {
                $("#navbar").show();
            }
            else {
                $("#navbar").hide();
            }
        });

        var iScrollInstance;

        if (isMobileWebkit) {
            $.getScript("lib/scrollability.js");

            iScrollInstance = new iScroll('wrapper');

            $('#scroller').stellar({
                scrollProperty: 'transform',
                positionProperty: 'transform',
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
