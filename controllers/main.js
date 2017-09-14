var app = angular.module('portfolio', ['ngAnimate']);

app.controller('main', function ($scope, $location, $anchorScroll, $filter) {

    $scope.projects = [
        {
            "name": "blank",
            "thumb": "disabled",
            "img": "Blank",
            "link": "disabled"
        },
        {
            "name": "tuscany",
            "thumb":"tuscanyvilla",
            "img": "tuscany-full",
            "link": "disabled"
        },
        {
            "name": "siegenut",
            "thumb": "siegenut",
            "img": "siegenut-full",
            "link": "disabled"
        },
        {
            "name": "wardrobe",
            "thumb": "wardrobe",
            "img": "wardrobe-full",
            "link": "disabled"
        },
        {
            "name": "companylister",
            "thumb": "companyLister",
            "img": "companylister-full",
            "link": "https://jbcoppola.github.io/InsitenCode/"
        }
    ];
    $scope.setProject = function (name) {
        $scope.currentProject = $filter('filter')($scope.projects, { "name": name })[0];
        console.log($scope.currentProject);
    }

    $scope.setProject("blank");

    //for the skills section
    $scope.skillList = [
        {
            "glyphicon": "glyphicon-sort",
            "skills": ["Front-end Development", "Back-end Development", "ASP.NET"]
        },
        {
            "glyphicon": "glyphicon-copyright-mark",
            "skills": ["C#", "C++", "C"]
        },
        {
            "glyphicon": "glyphicon-duplicate",
            "skills": ["Graphic Design", "Adobe Illustrator", "Adobe Photoshop"]
        },
        {
            "glyphicon": "glyphicon-console",
            "skills": ["HTML / CSS / Bootstrap", "Javascript / Jquery", "Angular"]
        }
    ];
});