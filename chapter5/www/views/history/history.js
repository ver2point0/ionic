angular.module("App")
.controller("HistoryController", function ($scope, $http, $state, $stateParams, Currencies) {
  
  $scope.history = {
    currency: $stateParams.currency || "USD"
  };
  $scope.currencies = Currencies;
  
  $scope.changeCurrency = function () {
    $state.go("tabs.history", { currency: $scope.history.currency });
  };
  
  $scope.chart = {
    options: {
      chart: {
        type: "line"
      },
      legend: {
        enabled: false
      }
    },
    title: {
      text: null
    },
    yAxis: {
      title: null
    },
    xAxis: {
      type: "datetime"
    },
    series: []
  };
  
  
  
  
});