$(function() {
    
    setFade(false,0);

    $(".nav:not(#title):not(#contact)").click(function() {
        $("#comingSoon").show().hover(function() {
            $(this).fadeOut(function() {
                $(this).hide();
            });
        });

        setTimeout(function() {
            $("#comingSoon").fadeOut(function() {
                $(this).hide();
            });
        }, 7000);
    });

});

function setFade(fadeIn, it) {
    var queue = [$("#image3"), $("#image2"), $("#image")],
        $node = queue[it],
        nextFadeIn = (it+1 === queue.length-1);

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
            it = it%3;
        }

        setFade(nextFadeIn, it);
    }, 12000);
}
