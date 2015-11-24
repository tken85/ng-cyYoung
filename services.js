(function() {
  'use strict';
  angular
    .module('cyYoungs')
    .factory('WinnersService', function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/CyYoungs';

      var addWinner = function(newWinner){
        $http.post(url, newWinner).then(function(res){
          console.log(res);
        });
      };

      var getWinners = function(){
        return $http.get(url);
      };

      return {
        createWinner: addWinner,
        getWinners: getWinners,

      };
    });
}());
