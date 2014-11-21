$(function() {
    $(".strong").wrap("<a href='html/strong.html' class='popdown'></a>");
    $(".ok").wrap("<a href='html/ok.html' class='popdown'></a>");
    $(".dabble").wrap("<a href='/html/dabble.html' class='popdown'></a>");
    $(".lang").wrap("<a href='/html/lang.html' class='popdown'></a>");
    
    $('.popdown').popdown();
});