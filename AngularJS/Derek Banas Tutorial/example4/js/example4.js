var app4 = angular.module("app4", []);

app4.controller("eventCtrl", function($scope) {

    $scope.capitals = [
        {city: "Manchester", state: "NH"},
        {city: "Concord", state: "NH"},
        {city: "Portsmouth", state: "NH"},
        {city: "Dover", state: "NH"},
        {city: "Keene", state: "NH"},
        {city: "Nashua", state: "NH"}
    ]

    $scope.dayTimeButton = true;

    $scope.disableButton = false

    $scope.blur = 0;
    $scope.keyDownHandler = function(event) {
        // just a normal event in javascript
        $scope.kdkey = String.fromCharCode(event.keyCode);
    }
});
