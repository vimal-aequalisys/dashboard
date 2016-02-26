'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:PilotSelfServiceCtrl3
 * @description
 * # PilotSelfServiceCtrl3
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('PilotSelfServiceCtrl3', function () {
		/*--- HIDE AND SHOW PILOT SELF-SERVICE MODALS ---*/

	$('.cancel-upload').click(function() {
		$('#cancel-upload-alert, .modal-bkg').show();
	});

	$('.continue-upload').click(function() {
		$('#continue-upload-alert, .modal-bkg').show();
	});
	
	$('.close-modal').click(function() {
		$('.modal .modal-bkg').hide();
	});
  });
