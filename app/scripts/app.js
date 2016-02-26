'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/system_status', {
        templateUrl: 'views/system_status.html',
        controller: 'SystemStatusCtrl',
        controllerAs: 'systemstatus'
      })
	  .when('/performance', {
        templateUrl: 'views/performance.html',
        controller: 'PerformanceCtrl',
        controllerAs: 'performance'
      })
	  .when('/user_demographics', {
        templateUrl: 'views/user_demographics.html',
        controller: 'UserDemographicsCtrl',
        controllerAs: 'userdemographics'
      })
	  .when('/account_administration', {
        templateUrl: 'views/account_administration.html',
        controller: 'AccountAdministrationCtrl',
        controllerAs: 'accadmini'
      })
	  .when('/add_account', {
        templateUrl: 'views/add_account.html',
        controller: 'AddAccountCtrl',
        controllerAs: 'addaccount'
      })
	  .when('/usage', {
        templateUrl: 'views/usage.html',
        controller: 'UsageCtrl',
        controllerAs: 'usage'
      })
	  .when('/pss_upload', {
        templateUrl: 'views/pilot_self_service.html',
        controller: 'PilotSelfServiceCtrl',
        controllerAs: 'pssupload'
      })
	  .when('/pss_map', {
        templateUrl: 'views/pilot_self_service_2.html',
        controller: 'PilotSelfServiceCtrl2',
        controllerAs: 'pssmap'
      })
	  .when('/pss_validate', {
        templateUrl: 'views/pilot_self_service_3.html',
        controller: 'PilotSelfServiceCtrl3',
        controllerAs: 'pssvalidate'
      })
	  .when('/pss_findscore', {
        templateUrl: 'views/pilot_self_service_4.html',
        controller: 'PilotSelfServiceCtr4',
        controllerAs: 'pssfindscore'
      })
	  .when('/pss_getresult', {
        templateUrl: 'views/pilot_self_service_5.html',
        controller: 'PilotSelfServiceCtrl5',
        controllerAs: 'pssgetresult'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
