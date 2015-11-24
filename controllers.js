(function() {
  'use strict';
  angular
    .module('cyYoungs')
    .controller('MainController', function($scope){

    })
    .controller('WinnersController', function($scope, WinnersService){
      WinnersService.getWinners().success(function(winners){
        $scope.cyWinners = winners;
      });
      $scope.addWinner = function(winner){
        WinnersService.createWinner(winner);
      };
    });
}());
