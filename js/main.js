$(function() {
    
    setFade(false,0);

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

function setFade(fadeIn, it) {
    var queue = [$("#image4"), $("#image3"), $("#image2"), $("#image")],
        $node = queue[it],
        nextFadeIn = (fadeIn && it-1 >=0) || (it+1 === queue.length-1);

    setTimeout(function() {
        if (!fadeIn) {
            $node.fadeOut("slow");
        }
        else {
            $node.fadeIn("slow");
        }

        if (nextFadeIn && !fadeIn) {
            it = queue.length-2;
        }
        else if (!nextFadeIn && fadeIn) {
            it = 0;
        }
        else {
            it = nextFadeIn ? it-1 : it+1;
            it = it%4;
        }

        setFade(nextFadeIn, it);
    }, 12000);
}
