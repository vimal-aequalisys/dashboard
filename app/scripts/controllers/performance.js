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
        colors: ['#22B573', '#0D8EFF', '#F68E29'],
        strokeWidth: 1.8
      }
    );

    new Dygraph(
      document.getElementById("volumeChart"),
      "data/volume-graph-data.csv",
      {
        rollPeriod: 7,
        showRoller: true,
        ylabel: 'Transactions',
        xlabel: 'Date',
        labelsDivStyles: {
          'text-align': 'right',
          'background': 'none'
        },
        colors: ['#F68E29', '#22B573'],
        strokeWidth: 1.8
      }
    );
  });
