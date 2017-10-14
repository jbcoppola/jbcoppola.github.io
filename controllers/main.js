﻿var app = angular.module('portfolio', ['ngAnimate']);

app.controller('main', function ($scope, $location, $anchorScroll, $filter) {

    $scope.projects = [
        {
            "name": "blank",
            "thumb": "disabled",
            "img": "Blank",
            "link": "disabled",
            "github":"disabled",
            "description": "Click one of the project buttons to display it with its description and a link to a live demo."
        },
        {
            "name": "siegenut",
            "thumb": "siegenut",
            "img": "siegenut-full",
            "link": "http://siegenut.gearhostpreview.com/",
            "github": "https://github.com/jbcoppola/SiegeNut",
            "description": "Fictional store for buying and reviewing medieval siege equipment for assaulting castles. Microsoft-MVC ASP.NET website made with C# hooked up to a persistent SQL database. Features account authentication, full CRUD functionality for reviews and products, and search/sort capability."
        },
        {
            "name": "companylister",
            "thumb": "companyLister",
            "img": "companylister-full",
            "link": "https://jbcoppola.github.io/InsitenCode/",
            "github": "https://github.com/jbcoppola/InsitenCode",
            "description": "Angular website with UI-bootstrap and non-persistent data. Enter companies into a list and view entries in either card or list UI view. Complete CRUD functionality. Display how many items are on one page at a time using pagination."
        }
    ];
    $scope.setProject = function (name) {
        $scope.currentProject = $filter('filter')($scope.projects, { "name": name })[0];
    }

    $scope.setProject("blank");

    //for the skills section
    $scope.skillList = [
        {
            "glyphicon": "glyphicon-sort",
            "skills": ["Front-end Development", "Back-end Development", "ASP.NET"]
        },
        {
            "glyphicon": "letter-c",
            "skills": ["C#", "C++", "C"]
        },
        {
            "glyphicon": "glyphicon-duplicate",
            "skills": ["Graphic Design", "Adobe Illustrator", "Adobe Photoshop"]
        },
        {
            "glyphicon": "glyphicon-console",
            "skills": ["HTML / CSS / Bootstrap", "JavaScript / jQuery", "AngularJS"]
        }
    ];
});