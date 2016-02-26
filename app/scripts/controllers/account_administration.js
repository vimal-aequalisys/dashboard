'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:AccountAdministrationCtrl
 * @description
 * # AccountAdministrationCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('AccountAdministrationCtrl', function () {
	
	
	/*--- SHOW AND HIDE ACCOUNT MODALS ---*/
	$('.roles-trigger').click(function() {
		var account = '#' + $(this).closest('.account-row').attr('id');
		
		$(account).find('.roles-modal').show();
		$('.modal-bkg').show();
	});

	/*--- ENABLE AND DISABLE ACCOUNT FIELDS ---*/

	$('.edit-button').click(function(){
		var account = '#' + $(this).closest('.account-row').attr('id');


		if($(this).hasClass('active')){
			$(account).find('input').prop( 'disabled', true );
			$(this).removeClass('active');
		} else {
			$(account).find('input').prop( 'disabled', false );
			$(this).addClass('active');
		}
	}); 

	
	/*--- HIDE ALL MODALS ---*/

	$('.modal-bkg, .close-modal').click(function(){
		$('.modal-bkg, .modal').hide();
	});
	
  });
