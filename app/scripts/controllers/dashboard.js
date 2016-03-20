'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.mySlides = [
    	"Keep in touch with Right people, at Right time",
    	"Reduce Advertisement Cost",
    	"Keep focus on Core Business",
    	"Experience the End to End Advertisement service",
    	"Maximize your ROI",
    	"Save your time by letting us handle the Advertisement"
    ];

  });
