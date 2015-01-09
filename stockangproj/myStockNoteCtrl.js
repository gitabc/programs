/*function stockdataController($scope,$http) {
  $http.get("http://localhost/angularjsproj/stockangproj/stockdata_json.php")
  .success(function(response) {$scope.tickernames = response;});
}
*/
//myStockNoteCtrl.js


app.controller("stockdataController", function($scope) {
//    $scope.message = "";
//    $scope.left  = function() {return 100 - $scope.message.length;};
//    $scope.clear = function() {$scope.message = "";};
 //   $scope.save  = function() {alert("Note Saved");};
    $scope.open  = function() {
//			var x = document.createElement("TEXTAREA");
 //   			var t = document.createTextNode("At FirstAmericanInvestmentCo.");
 //   			x.appendChild(t);
 //   			document.body.appendChild(x);

			alert("open");}
			alert($scope.message);};
}); 
