var app = angular.module('portfolio', ['ngAnimate']);

app.controller('main', function ($scope, $location, $anchorScroll) {
    $scope.display = 'blank';


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