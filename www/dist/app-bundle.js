angular.module('templates', []);
angular.module('app', ['ui.router', 'controllers'])

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('root', {
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'templates/header.html',
          controller: 'MainCtrl'
        },
        'footer': {
          templateUrl: 'templates/footer.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        'main-page@': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('root.second', {
      url: '/second',
      views: {
        'main-page@': {
          template: '<h1>Second</h1>'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  }]);

angular.module('controllers', [
])

.controller('HomeCtrl', ['$log', '$scope',
  function ($log, $scope) {

  }
])

.controller('MainCtrl', ['$log', '$scope',
  function ($log, $scope) {

  }
]);

