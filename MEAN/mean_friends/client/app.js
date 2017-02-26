var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html'
  })

  .when('/new', {
    templateUrl: 'partials/new.html'
  })

  .when('/show/:id', {
    templateUrl: 'partials/showOne.html'
  })

  .when('/edit/:id', {
    templateUrl: 'partials/edit.html'
  })

  .otherwise({
    redirectTo: '/'
  })
})
