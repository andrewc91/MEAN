app.factory('dashboardFactory', ['$http', '$route', function($http, $route){
  var factory = {};

  factory.createTopic = function(data, id){
    data._user = id;
    $http.post('/createTopic', data).then(function(res){
      $route.reload();
    })
  }

  factory.index = function(cb){
    $http.get('/index').then(function(res){
      cb(res);
    })
  }

  factory.getUser = function(id, cb){
    $http.get('/getUser/' + id).then(function(res){
      cb(res);
    })
  }

  return factory;
}])
