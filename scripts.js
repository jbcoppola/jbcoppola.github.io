$(document).ready(function () {

    //when the nav button is clicked, it scrolls to that section
    $(".btn-section-nav, ul a").on("click", function (event) {

        //stops the href jump from occuring when javascript runs
        event.preventDefault();

        //gets the href location and scrolls to it
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - 49
        },
            "slow");
    });
});
