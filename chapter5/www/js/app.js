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
          templateUrl: "views/rates/rates.html",
          controller: "RatesController"
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

.factory("Currencies", function () {
  return [
    { code: "AUD", text: "Australian Dollar", selected: true },
    { code: "BRL", text: "Brazilian Real", selected: false },
    { code: "CAD", text: "Canadian Dollar", selected: true },
    //{ code: "CHF", text: "Swiss Franc", selected: false },
    { code: "CNY", text: "Chinese Yuan", selected: true },
    { code: "EUR", text: "Euro", selected: true },
    { code: "GBP", text: "British Pound Sterling", selected: true},
    { code: "IDR", text: "Indonesian Rupiah", selected: false },
    { code: "ILS", text: "Israeli New Sheqel", selected: false },
    { code: "MXN", text: "Mexican Peso", selected: true},
    { code: "NOK", text: "Norwegian Krone", selected: true},
    { code: "NZD", text: "New Zealand Dollar", selected: false},
    { code: "PLN", text: "Polish Zloty", selected: false },
    { code: "RON", text: "Romanian Leu", selected: false },
    { code: "RUB", text: "Russion Ruble", selected: true },
    { code: "SEK", text: "Swedish Krona", selected: false },
    { code: "SGD", text: "Singapore Dollar", selected: false },
    { code: "USD", text: "United States Dollar", selected: true },
    { code: "ZAR", text: "South African Rand", selected: false }
    ];
});