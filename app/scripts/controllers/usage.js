'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:UsageCtrl
 * @description
 * # UsageCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('UsageCtrl', function () {
	  
	/*--- HIDE AND SHOW ACCOUNT TABLES ON USAGE PAGE ---*/
	$('#all-records').click(function(){
		$('#records-table-vs').hide();
		$('#records-table-all').show();
	});

	$('#vs-records').click(function(){
		$('#records-table-all').hide();
		$('#records-table-vs').show();
	});
  });
