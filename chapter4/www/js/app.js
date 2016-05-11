angular.module('App', ['ionic'])
  .config(function ($stateProvider, $urlRouterProvier) {
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "views/home/home.html"
    });
    $urlRouterProvier.otherwise("/home");
  })
  .state("reservation", {
    url: "/reservation",
    controller: "ReservationController",
    templateUrl: "views/reservation/reservation.html"
  })
  .state("weather", {
    url: "/weather",
    controller: "WeatherController",
    templateUrl: "views/weather/weather.html"
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  