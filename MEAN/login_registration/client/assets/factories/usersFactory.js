app.factory('usersFactory', ['$http', '$location', '$route', function($http, $location, $route){
  var factory = {}
  factory.register = function(data){
    // console.log(data);
    $http.post('/register', data).then(function(user){
      // console.log(user);
      if (!user.data.errors){
        $location.url('/dashboard');
      }
      $route.reload();
    })
  }

  factory.checkSession = function(cb){
    $http.get('/checkSession').then(function(data){
      if (!data.data){
        $location.url('/')
      }
      cb(data);
    })
  }

  factory.login = function(data){
    $http.post('/login', data).then(function(data){
      console.log(data);
      if (data.data.errors){
        $route.reload();
      }
      else {
        $location.url('/dashboard');
      }
    })
  }

  return factory;
}]);
