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

function setProject(project) {
    var p;
    if (project == "siegenut") {
        p = {
            "imgSrc": "images/siegenut-full.png",
            "github": "https://github.com/jbcoppola/SiegeNut",
            "demo": "http://siegenut.gearhostpreview.com/",
            "description": "Fictional store for buying and reviewing medieval siege equipment for assaulting castles. Microsoft-MVC ASP.NET website made with C# hooked up to a persistent SQL database. Features account authentication, full CRUD functionality for reviews and products, and search/sort capability."
        };
    }
    else if (project == "companyLister") {
        p = {
            "imgSrc": "images/companyLister-full.png",
            "demo": "https://jbcoppola.github.io/CompanyLister/",
            "github": "https://github.com/jbcoppola/CompanyLister",
            "description": "Angular website with UI-bootstrap and non-persistent data. Enter companies into a list and view entries in either card or list UI view. Complete CRUD functionality. Display how many items are on one page at a time using pagination."
        };
    }
    changeProject(p.imgSrc, p.description, p.github, p.demo);
    document.querySelector(".github").classList.remove("hidden");
    document.querySelector(".demo").classList.remove("hidden");
};

function changeProject(imgSrc, description, github, demo) {
    document.querySelector(".full-display img").src = imgSrc;
    document.querySelector(".full-display p").innerText = description;
    document.querySelector(".full-display .github").href = github;
    document.querySelector(".full-display .demo").href = demo;
}