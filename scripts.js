$(document).ready(function () {

    //when the nav button is clicked, it scrolls to that section
    $(".btn-section-nav, ul a").on("click", function (event) {

        //stops the href jump from occuring when javascript runs
        event.preventDefault();

        //gets the href location and scrolls to it
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        },
            "slow");
    });

    //project section buttons
    $("#siegenut").on("click", function () { clickProject(this, "images/siegenut-full.png") });
    $("#tuscany").on("click", function () { clickProject(this, "images/tuscany-full.png") });
    $("#wardrobe").on("click", function () { clickProject(this, "images/wardrobe-full.png") });
});

//function for replacing the project image with the full example picture
function clickProject(clicked, newImage) {
    //white-background doesn't currently do anything
    $($(".projectButtons").children("img")).removeClass("no-padding");
    $(clicked).addClass("no-padding");
    //fade out, replace source, fade in
    $("#project-display").fadeOut("slow", function () {
        $(this).attr("src", newImage);
    })
    .fadeIn(400);
}