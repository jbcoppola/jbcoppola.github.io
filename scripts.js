$(document).ready(function () {

    //when the nav button is clicked, it scrolls to that section
    $(".btn-section-nav").on("click", function (event) {

        //stops the href jump from occuring when javascript runs
        event.preventDefault();

        //gets the href location and scrolls to it
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        },
            "slow");
    })
    //functions for replacing the project image with the full example picture
    //white-background doesn't seem to currently do anything
    $("#siegenut").on("click", function () {
        //fade out, replace source, fade in
        $($(".projectButtons").children("img")).removeClass("white-background");
        $("#siegenut").addClass("white-background");
        $("#project-display").fadeOut(400, function () {
            $("#project-display").attr("src", "images/siegenut-full.png");
        })
        .fadeIn(400);
    });
    $("#tuscany").on("click", function () {
        $($(".projectButtons").children("img")).removeClass("white-background");
        $(this).addClass("white-background");
        $("#project-display").fadeOut(400, function () {
            $("#project-display").attr("src", "images/tuscany-full.png")
        })
        .fadeIn(400);
    });
    $("#wardrobe").on("click", function () {
        $($(".projectButtons").children("img")).removeClass("white-background");
        $(this).addClass("white-background");
        $("#project-display").fadeOut(400, function () {
            $("#project-display").attr("src", "images/wardrobe-full.png")
        })
        .fadeIn(400);
    });
    /*
    //make buttons in project row bigger on hover
    $(".project-buttons .row .col-sm-4").hover(function () {
        $(this.parent).toggleClass("")
    }
    , function () {

    });
       
    });
    */
    /*
    $(window).on("resize", function () {
        if ($(window).width() <= 480) {
            $(".email").toggleClass("spaced-text");
        }
        if ($(window).width() >= 640) {
            $(".email").toggleClass("spaced-text");
        }
    });
    */
});