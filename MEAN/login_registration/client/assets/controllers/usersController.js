app.controller('usersController', ['$scope', 'usersFactory', '$route', function($scope, uF, $route){

  $scope.register = function(){
    // console.log($scope.newUser.password);
    if ($scope.newUser){
      if ($scope.newUser.password !== $scope.newUser.confirm){
        $route.reload();
      }
      else {
        uF.register($scope.newUser);
      }
    }
    $route.reload();
  };

  $scope.login = function(){
    // console.log($scope.logUser);
    uF.login($scope.logUser);
  }

}]);
