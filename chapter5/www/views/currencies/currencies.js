angular.module('App')
.controller('CurrenciesController', function($scope, Currencies) {
  $scope.currencies = Currencies;
  $scope.state = {
    reordering: false
  };
  
  $scope.$on('$stateChangeStart', function () {
    $scope.state.reordering = false;
  });
  
  
});