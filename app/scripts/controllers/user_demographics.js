'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:UserDemographicsCtrl
 * @description
 * # UserDemographicsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('UserDemographicsCtrl', function () {
	
	  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Gender', 'Authscore'],
          ['Male',     600],
          ['Female',     303 ],
          ['Others',  97],
        ]);

        var options = {
         // title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('genderDistrChart'));
        chart.draw(data, options);
      }

	//google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawBasic);

	function drawBasic() {

		  var data = new google.visualization.DataTable();
		  data.addColumn('timeofday', 'Time of Day');
		  data.addColumn('number', 'Motivation Level');

		  data.addRows([
			[[10,20], 1],
			[[21,30], 2],
			[[31,40], 3],
			[[41,50], 4]
		  ]);

		  var options = {
		//	title: 'Motivation Level Throughout the Day',
			
		  };

		  var chart = new google.visualization.ColumnChart(
			document.getElementById('ageDistrChart'));

		  chart.draw(data, options);
		}	   
  });
