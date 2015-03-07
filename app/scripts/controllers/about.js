'use strict';

/**
 * @ngdoc function
 * @name animeAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the animeAppApp
 */
angular.module('animeAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
