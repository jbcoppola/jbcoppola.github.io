$(document).ready(function () {
   
    //when the nav button is clicked, it scrolls to that section
    $(".btn-section-nav, .navbar-items a").click(function (event) {

        //stops the href jump from occuring when javascript runs
        event.preventDefault();

        //gets the href location and scrolls to it
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - 55
        },
            "slow");
    });
    navbarHide();
    $(window).resize(function () {
        navbarHide();
    });

    $(".hamburger").click(function () {
        $(".navbar-items").toggleClass("hidden");
    })
});

function navbarHide() {
    if ($(window).width() < 544) {
        $(".navbar-items").addClass("hidden");
    }
    else {
        $(".navbar-items").removeClass("hidden");
    }
}
