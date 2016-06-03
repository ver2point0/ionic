angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouteProvider) {

  $stateProvider
    .state("tabs", {
      url: "/tabs",
      abstract: true,
      templateUrl: "views/tabs/tabs.html"
    })
    .state("tabs.rates", {
      url: "/rates",
      views: {
        "rates-tab": {
          templateUrl: "views/rates/rates.html"
        }
      }
    })
    .state("tabs.histtory", {
      url: "/history/currency",
      views: {
        "histtory-tab": {
          templateUrl: "views/history/history.html"
        }
      }
    })
    .state("tabs.currencies", {
      url: "/currencies",
      views: {
        "currencies-tab": {
          templateUrl: "views/currencies/currencies.html"
        }
      }
    });
    
    $urlRouteProvider.otherwise("/tabs/rates");
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
