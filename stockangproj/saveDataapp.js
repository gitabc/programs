angular.module('myApp', [])
.controller('saveDataapp', function ($scope, $http) {
    $scope.hello = {name: "Boaz"};
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                name: $scope.newName
            })
        });
        $http.post("json/", data).success(function(data, status) {
            $scope.hello = data;
        })
    }                   
})

