window.onload = function () {

    //sets up scrolling when navbar links are clicked
    var navbarLinks = document.querySelectorAll(".navbar-items a");
    for (i = 0; i < navbarLinks.length; i++) {
        var text = navbarLinks[i].text.toLowerCase();
        scrollTo(navbarLinks[i], text)
    }
    //set scrlling for each section nav button
    var sectionBtns = document.querySelectorAll(".btn-section-nav");
    scrollTo(sectionBtns[0], "about");
    scrollTo(sectionBtns[1], "projects");
    scrollTo(sectionBtns[2], "skills");
    scrollTo(sectionBtns[3], "contact");
    scrollTo(sectionBtns[4], "top");
    
    navbarHide();

    document.querySelector("#siegenut").addEventListener("click", function () {
        setProject("siegenut");
    });
    document.querySelector("#companyLister").addEventListener("click", function () {
        setProject("companyLister");
    });
    document.querySelector("#wikiViewer").addEventListener("click", function () {
        setProject("wikiViewer");
    });
    document.querySelector("#text-adventure").addEventListener("click", function () {
        setProject("text-adventure");
    });
    window.addEventListener("resize", function () {
        navbarHide();
    });

    document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelector(".navbar-items").classList.toggle("hidden");
    });
};
//hides or shows navbar links in mobile view
function navbarHide() {
    if (window.innerWidth <= 560) {
        document.querySelector(".navbar-items").classList.add("hidden");
    }
    else {
        document.querySelector(".navbar-items").classList.remove("hidden");
    }
}
// to choose and set project
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
            "imgSrc": "images/companylister-full.png",
            "demo": "https://jbcoppola.github.io/CompanyLister/",
            "github": "https://github.com/jbcoppola/CompanyLister",
            "description": "Angular website with UI-bootstrap and non-persistent data. Enter companies into a list and view entries in either card or list UI view. Complete CRUD functionality. Display how many items are on one page at a time using pagination."
        };
    }
    else if (project == "wikiViewer") {
        p = {
            "imgSrc": "images/wikiViewer-full.png",
            "demo": "https://jbcoppola.github.io/Wikipedia-Viewer/",
            "github": "https://github.com/jbcoppola/Wikipedia-Viewer",
            "description": "Web page that uses the native Fetch API to query Wikipedia's API and return a list of article search results. User can retrieve either a random article or the first 18 articles that match the search term."
        };
    }
    else if (project == "text-adventure") {
        p = {
            "imgSrc": "images/textadventure-full.png",
            "demo": "https://jbcoppola.github.io/Text-Adventure/",
            "github": "https://github.com/jbcoppola/Text-Adventure",
            "description": "A text adventure game that takes in user commands and outputs text of the results. Currently in progress."
        };
    }
    changeProject(p.imgSrc, p.description, p.github, p.demo);
    document.querySelector(".github").classList.remove("hidden");
    document.querySelector(".demo").classList.remove("hidden");
};

//changes full-display to selected project
function changeProject(imgSrc, description, github, demo) {
    document.querySelector(".full-display img").src = imgSrc;
    document.querySelector(".full-display p").innerText = description;
    document.querySelector(".full-display .github").href = github;
    document.querySelector(".full-display .demo").href = demo;
}

function scrollTo(btn, scrollToId) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        var destination = document.getElementById(scrollToId).offsetTop - 55;
        window.scroll({ top: destination, behavior: "smooth" });
    })
}