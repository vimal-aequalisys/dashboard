'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:AccountAdministrationCtrl
 * @description
 * # AccountAdministrationCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('AccountAdministrationCtrl', function ($scope, $http, $rootScope) {


	/*--- SHOW AND HIDE ACCOUNT MODALS ---*/
	$('.roles-trigger').click(function() {
		var account = '#' + $(this).closest('.account-row').attr('id');

		$(account).find('.roles-modal').show();
		$('.modal-bkg').show();
	});

	/*--- ENABLE AND DISABLE ACCOUNT FIELDS ---*/

	/*$('.edit-button').click(function(){
		var account = '#' + $(this).closest('tr').attr('id');
    alert(account);
		if($(this).hasClass('active')){
			$(account).find('input').prop( 'disabled', true );
			$(this).removeClass('active');
		} else {
			$(account).find('input').prop( 'disabled', false );
			$(this).addClass('active');
		}
	}); */

    $scope.enableEdit = function(rowId) {
      var account = '#' + rowId;
      var editBtn = '#btn-' + rowId;
      if($(editBtn).hasClass('active')){
        $(account).find('input').prop( 'disabled', true );
        $(editBtn).removeClass('active');
      } else {
        $(account).find('input').prop( 'disabled', false );
        $(editBtn).addClass('active');
      }
    }

	/*--- HIDE ALL MODALS ---*/

	$('.modal-bkg, .close-modal').click(function(){
		$('.modal-bkg, .modal').hide();
	});


    /* Get user records*/
    $http.get($rootScope.apiarayHost+"/superadmin/leaderboard/1/account_users")
      .then(function (response) {
        $scope.result = response.data.records;
      });

    /* Expand & Collapse */

   // $scope.showUsers = false;
    $scope.viewUsers = function(rowId) {

       var showVar = 'showUsers-'+rowId;
      alert(showVar);
      $scope[showVar] = !$scope[showVar];
    }


  });


