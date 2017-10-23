window.onload = function () {
    
    var x = document.querySelectorAll(".navbar-items a");
    for (i = 0; i < x.length; i++) {
        var text = x[i].text.toLowerCase();
        scrollTo(x[i], text)
    }
    

    navbarHide();

    document.querySelector("#siegenut").addEventListener("click", function () {
        setProject("siegenut");
    });
    document.querySelector("#companyLister").addEventListener("click", function () {
        setProject("companyLister");
    });
    window.addEventListener("resize", function () {
        navbarHide();
    });

    document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelector(".navbar-items").classList.toggle("hidden");
    });
};

function navbarHide() {
    if (window.innerWidth <= 560) {
        document.querySelector(".navbar-items").classList.add("hidden");
    }
    else {
        document.querySelector(".navbar-items").classList.remove("hidden");
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

function scrollTo(btn, scrollToId) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        var destination = document.getElementById(scrollToId).offsetTop - 55;
        console.log(destination);
        window.scroll({ top: destination, behavior: "smooth" });
    })
}