authenticated.controller("userController", [ "$scope", "Auth", 
  function($scope, Auth){
    Auth.currentUser().then(
      function(user){
        console.log(user)
        $scope.user = user
      }).catch(function(err){
        console.log(err)
      })
}

  ])