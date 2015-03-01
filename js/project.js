$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $("#navbar").addClass("small");
        }
        else {
            $("#navbar").removeClass("small");
        }
    });

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
});
