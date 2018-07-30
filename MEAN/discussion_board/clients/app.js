var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/index.html'
  })

  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })

  .when('/user/:id', {
    templateUrl: 'partials/user.html'
  })

  .when('/topic/:id', {
    templateUrl: 'partials/topic.html'
  })

  .otherwise({
    redirectTo: '/'
  })
})
