app3 = angular.module("app3", [])

app3.controller("gListController", function($scope) {
    $scope.groceries = [
        {item: "fish", purchased: false},
        {item: "challah bread", purchased: true},
        {item: "carrots", purchased: true},
    ]

    $scope.getList = function() {
        return $scope.showList ? "ordered.html" : "unordered.html"
    }
});
