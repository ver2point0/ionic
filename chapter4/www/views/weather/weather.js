angular.module("App")
.controller("WeatherController", function ($scope, $http) {
  var directions = [];
  $http.get("")
.success(function (weather) {
  $scope.weather = weather;
}).error(function (err) {
  }); 
  
  $scope.getDirection = function (degreee) {
    if (degree > 33) {
      
    }
  };
});