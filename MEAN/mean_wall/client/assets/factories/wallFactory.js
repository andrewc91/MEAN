app.factory('wallFactory', ['$http', '$route', function($http, $route){
  var factory = {}

  factory.createMessage = function(data){
    $http.post('/createMessage', data).then(function(res){
      $route.reload();
    })
  }

  factory.index = function(cb){
    $http.get('/index').then(function(data){
      // console.log(data);
      cb(data.data);
    })
  }

  factory.createComment = function(data, id){
    $http.post('/createComment/' + id, data).then(function(res){
      $route.reload();
    })
  }

  return factory;
}])
