angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouteProvider) {

  $stateProvider
    .state("tabs", {
      url: "/tabs",
      templateUrl: "views/tabs/tabs.html"
    });
    
    $urlRouteProvider.otherwise("/tabs");
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
