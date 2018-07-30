app.controller('dashboardController', ['$scope', 'userFactory', 'dashboardFactory', '$routeParams', '$route', function($scope, uF, dF, $routeParams, $route){
  uF.checkSession(function(data){
    $scope.users = data.data;
    this.userId = $scope.users._id;
  })

  $scope.createTopic = function(){
    dF.createTopic($scope.newTopic, userId)
  }

  dF.index(function(data){
    $scope.list = data.data;
    // console.log($scope.list);
  })

  if ($routeParams){
    dF.getUser($routeParams.id, function(data){
      $scope.user = data.data;
    })

  }

}])
