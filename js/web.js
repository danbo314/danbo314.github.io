$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $("#navbar").addClass("small");
        }
        else {
            $("#navbar").removeClass("small");
        }
    });
});
