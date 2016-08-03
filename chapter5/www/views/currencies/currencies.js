angular.module('App')
.controller('CurrenciesController', function($scope, Currencies) {
  $scope.currencies = Currencies;
  $scope.state = {
    reordering: false
  };
  
  
});