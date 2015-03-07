'use strict';

/**
 * @ngdoc function
 * @name animeAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animeAppApp
 */
angular.module('animeAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
