app.factory('userFactory', ['$http', '$location', function($http, $location){
  var factory = {};

  factory.create = function(data, cb){
    $http.post('/create', data).then(function(res){
      cb(res);
    })
  }

  factory.login = function(data, cb){
    $http.post('/login', data).then(function(res){
      cb(res);
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

  return factory;
}])
