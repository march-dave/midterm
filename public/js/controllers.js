'use strict';

var app = angular.module('authApp');

app.controller('profileCtrl', function($scope) {
  // console.log('profileCtrl!');
  // $scope.editUser();

  //  console.log($scope.editUser());
});

app.controller('mainCtrl', function($scope, $state, $auth) {
  $scope.logout = () => {
    $auth.logout();
  }

  $scope.isAuthenticated = () => {
    return $auth.isAuthenticated();
  }
});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl!');
});

app.controller('authFormCtrl', function($scope, $state, $auth) {
  console.log('authFormCtrl!');

  $scope.currentState = $state.current.name;

  $scope.authenticate = provider => {
    $auth.authenticate(provider);
  };

  $scope.submitForm = () => {
    if($scope.currentState === 'register') {

      // register user
      if($scope.user.password !== $scope.user.password2) {

        $scope.user.password = '';
        $scope.user.password2 = '';

        alert('Passwords must match.')
      } else {
        $auth.signup($scope.user)
          .then(res => {
            return $auth.login($scope.user);
          })
          .then(res => {
            $state.go('home');
          })
          .catch(res => {
            alert(res.data.error);
          });
      }
    } else {
      $auth.login($scope.user)
      // email / password from form
      // post it to /auth/login

        .then(res => {
          $state.go('home');
        })
        .catch(res => {
          alert(res.data.error);
        })
    }
  };

});

app.controller('beersCtrl', function($scope, $state, BeerService, $rootScope) {
  BeerService.getAll().then(function (result) {
      $scope.beers = result.data;
      console.log('data', result.data);
      console.log('name', result.data.name);
      console.log('nameDisplay', result.data.nameDisplay);
      console.log('description', result.data.description);
      console.log('status', result.data.status);
      console.log('statusDisplay', result.data.statusDisplay);
  });
});
