'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:PerformanceCtrl
 * @description
 * # PerformanceCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('PerformanceCtrl', function () {
	
	  new Dygraph(
		document.getElementById("latencyChart"),
		"data/latency-graph-data.csv",
		{
		  rollPeriod: 7,
		  showRoller: true,
			  ylabel: 'Processing Time',
			  xlabel: 'Date & Time',
			  labelsDivStyles: {
				'text-align': 'right',
				'background': 'none'
			  },
			  strokeWidth: 1.8
		}
	  ); 

	  new Dygraph(
		document.getElementById("volumeChart"),
		"data/volume-graph-data.csv",
		{
		  rollPeriod: 7,
		  showRoller: true,
			  ylabel: 'Processing Time',
			  xlabel: 'Date',
			  labelsDivStyles: {
				'text-align': 'right',
				'background': 'none'
			  },
			  strokeWidth: 1.8
		}
	  );	  
  });
