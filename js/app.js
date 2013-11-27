"use strict";

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('weatherForecastController', ['$scope', '$http', '$routeParams', function weatherForecastController($scope, $http, $routeParams) {
  $scope.weatherId = $routeParams.weatherId;
}]);

weatherApp.controller('weatherListController', ['$scope', '$http', function weatherListController($scope, $http) {
  
  $scope.findCity = function() {
    var url = "http://autocomplete.wunderground.com/aq?query=" + $scope.cityInput + "&cb=JSON_CALLBACK";
    $scope.top = "top";
    $scope.cityInput = "";
    $http.jsonp(url).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available

      $scope.cities = data.RESULTS;
      console.log(data.RESULTS);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.clickCity = function() {

  };
}]);
/*
weatherApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/weather', {
        templateUrl: 'partials/weather-list.html',
        controller: 'weatherListController'
      }).
      when('/weather/:weatherId', {
        templateUrl: 'partials/weather-forecast.html',
        controller: 'weatherForecastController'
      }).
      otherwise({
        redirectTo: '/weather'
      });
  }
]);*/

