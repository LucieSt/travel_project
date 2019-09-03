$(function() {

    // scroll down chevron

    $(".fa-chevron-down").fadeIn(1000);

    $(window).on('scroll', function() {
        $(".fa-chevron-down").fadeOut(500);

    });
});