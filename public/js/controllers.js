'use strict';

var app = angular.module('authApp');

app.controller('profileCtrl', function() {
  console.log('profileCtrl!');
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

app.controller('quotesCtrl', function($scope, $state, Payment, SimpleEBayResolve, SimpleEBayService, $rootScope) {

  SimpleEBayService.getItemAll().then(function (result) {
      $scope.bids = result.data;
  });

  $scope.doCheckout = function(token) {

     Payment.completeCheckout(token, $scope.selectedBidId)
       .then(res => {
         console.log('res:', res);
       });
   }

  $scope.selectBid = function(id) {
   $scope.selectedBidId = id;
 };
});

app.controller('beersCtrl', function($scope, $state, BeerService, $rootScope) {
  BeerService.getAll().then(function (result) {
      //$scope.beer = result.data;

      console.log('Beerrrrr', result.data);


  });
});

app.service('BeerService', function($http) {
  this.getAll = () => {
    return $http.get('/api/beers');
  };
});

// app.service('Payment', function($http) {
//   this.completeCheckout = function(token, itemId) {
//     return $http.post('/api/payment', { token: token, itemId: itemId });
//   };
// });

app.service('Item', function($http) {
  this.getAll = () => {
    return $http.get('/api/items');
  };
});

app.service('Bid', function($http) {
  this.getAll = () => {
    return $http.get('/api/bids');
  };
});
