
var authenticated = angular.module('authenticated', ['Devise', 'ui.router', "restangular"]).constant("_", window._)

authenticated.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

authenticated.config([
    'RestangularProvider',
    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          "content-type": "application/json"
      });
    }
]);

authenticated.config([
  'AuthProvider',
  function(AuthProvider) {
    AuthProvider.loginPath('/api/v1/user/sign_in.json');
    AuthProvider.loginMethod('POST');
    AuthProvider.resourceName('users');
  }
]);

authenticated.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      
    })
  }
])
