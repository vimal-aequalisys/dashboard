'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MainCtrl',   function($scope, $http, $rootScope) {

    /* Get Account activities record*/
    $http.get($rootScope.apiarayHost+"/superadmin/leaderboard/1/account_activity/")
    .then(function (response) {
		$scope.result = response.data.records;
		});

    /* Get list of clients*/
    $http.get($rootScope.apiarayHost+"/superadmin/leaderboard/1/clients")
      .then(function (response) {
        $scope.clients = response.data.records;
      });

    /* Load More */
    $scope.limit= 5;

    $scope.loadMore = function() {
      $scope.limit = $scope.result.length
    }

    /* SortBy Volume */
    $scope.order = function(predicate) {
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.predicate = predicate;
    };

});
