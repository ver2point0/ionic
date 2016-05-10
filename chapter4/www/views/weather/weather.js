angular.module("App")
.controller("WeatherController", function ($scope, $http) {
  var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  $http.get("https://ionic-in-action-api.herokuapp.com/weather")
.success(function (weather) {
  $scope.weather = weather;
}).error(function (err) {
  }); 
  
  $scope.getDirection = function (degree) {
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return directions[index]
  };
});