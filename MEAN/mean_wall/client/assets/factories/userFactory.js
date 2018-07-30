app.factory('userFactory', ['$http', '$location', '$route', function($http, $location, $route){
  var factory = {}

  factory.create = function(data, cb){
    // console.log(data);
    $http.post('/create', data).then(function(res){
      // console.log(res);
        cb(res)
    })
  }

  factory.checkSession = function(cb){
    $http.get('/checkSession').then(function(data){
      // console.log(data);
      if (!data.data){
        $location.url('/');
      }
      cb(data);
    })
  }

  factory.login = function(data, cb){
    $http.post('/login', data).then(function(res){
      cb(res);
    })
  }

  return factory;
}])
