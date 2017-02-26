app.controller('friendController', function($scope, friendFactory, $location, $routeParams, $route, $location){

  friendFactory.index(function(data){
    $scope.list = data.data;
  })

  $scope.create = function(){
    // console.log("clicked");
    friendFactory.create($scope.newFriend)
    $location.url('/')
  }

  if ($routeParams.id){
    friendFactory.show($routeParams.id, function(data){
      $scope.showOne = data.data;
      // console.log(data.data);
    })
  }

  $scope.delete = function(id){
    friendFactory.delete(id);
    $route.reload();
  }

  $scope.update = function(){
    // console.log($routeParams.id);
    // console.log($scope.editFriend)
    friendFactory.update($scope.editFriend, $routeParams.id);
    $location.url('/');
  }

})
