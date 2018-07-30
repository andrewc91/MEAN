var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html'
  })

  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })

  .otherwise({
    redirectTo: '/'
  })
})
