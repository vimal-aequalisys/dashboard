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
		  backgroundColor: '#49424F',
		  legendTextStyle: { color: '#FFF' },
		  titleTextStyle: { color: '#FFF' }
        };

        var chart = new google.visualization.PieChart(document.getElementById('genderDistrChart'));
        chart.draw(data, options);
      }
	
	// Age Distribution chart
    google.charts.setOnLoadCallback(drawAgeChart);
    function drawAgeChart() {
      var data = google.visualization.arrayToDataTable([
        ['Age', 'Score', { role: 'style' } ],
        ['<31', 8, 'color: #22B573'],
        ['32-45', 10, 'color: #22B573'],
        ['46-59', 19, 'color: #22B573'],
        ['60-73', 21, 'color: #22B573'],
		['74-115', 20, 'color: #22B573'],
		['122+', 26, 'color: #22B573']
      ]);
      var options = {
        bar: {groupWidth: '40%'},
        legend: { position: 'none' },
		titleTextStyle: { color: 'red'},
		hAxis: {
			title: 'Age Group',
			textStyle: { color: 'white'},
			titleTextStyle: { color: 'white'}
        },
        vAxis: {
			title: 'Scores',
			textStyle: { color: 'white'},
			titleTextStyle: { color: 'white'}		  
        },
		backgroundColor: '#49424F',
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('ageDistrChart'));
      chart.draw(data, options);
  }
	
  });

