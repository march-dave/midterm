'use strict';

var app = angular.module('authApp', ['ui.router', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $authProvider.github({
    clientId: '20dde4e1b29be8b7a4ce'
  });

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl' })
    .state('register', {
      url: '/register',
      templateUrl: '/html/authForm.html',
      controller: 'authFormCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/html/authForm.html',
      controller: 'authFormCtrl'
    })
    .state('beers', {
      url:'/beers',
      templateUrl: '/html/beers.html',
      controller: 'beersCtrl'
      ,resolve: {
        // BeerService: function(BeerService) {
        //   return BeerService.getAll();
        // }
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/html/profile.html',
      controller: 'profileCtrl'
      // resolve: {
      //   profile: function(Auth, $q, $state) {
      //     return Auth.getProfile()
      //     .catch(() => {
      //       $state.go('home');
      //       return $q.reject();
      //     });
      //   }
      // }
    })

  $urlRouterProvider.otherwise('/');
});

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };
});
