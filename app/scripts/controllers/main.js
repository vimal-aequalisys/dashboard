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
    $http.get($rootScope.apiarayHost+"/superadmin/leaderboard/1/account_activity/")
    .then(function (response) {
		$scope.result = response.data.records;
		});
});
