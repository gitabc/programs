var myApp=angular.module('myApp',['restangular']);
function registerCtrl($scope, Restangular){
$scope.user = { email :"", password: "", confpass: ""};
$scope.registerUser=function(){
        $scope.people = Restangular.all('data.json/:user').post("users",$scope.user);
    }
}
