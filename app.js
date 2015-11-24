(function() {
  'use strict';

  angular
    .module('cyYoungs', [
      'ui.bootstrap',
      'ngRoute',
    ])
    .config(function($routeProvider){
      $routeProvider
          .when('/', {
            template: '<h1>Welcome to the Cy Young Database</h1>',
            controller: 'MainController'
          })
          .when('/winners',{
            templateUrl: 'views/winners/list.html',
            controller: 'WinnersController'
          })
          .when('/winners/wins',{
            templateUrl: 'views/winners/wins.html',
            controller: 'WinnersController'
          })
          .when('/winners/strikeouts',{
            templateUrl: 'views/winners/strikeouts.html',
            controller: 'WinnersController'
          })
          .when('/winners/league',{
            templateUrl: 'views/winners/league.html',
            controller: 'WinnersController'
          })
          .when('/winners/era',{
            templateUrl: 'views/winners/era.html',
            controller: 'WinnersController'
          })
          .when('/winners/:id',{
            templateUrl: 'views/winners/show.html',
            controller: 'WinnersController'
          })
          .when('/winners/:winnerId/edit',{
            templateUrl: 'views/winners/edit.html',
            controller: 'WinnersController'
          })
          .when('/addWinner',{
            templateUrl: 'views/winners/create.html',
            controller: 'WinnersController'
          })
          .when('/404',{
            templateUrl: 'views/404.html',
          })
          .otherwise({redirectTo: '/404'});
    });
}());
