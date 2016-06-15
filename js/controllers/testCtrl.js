ingoControllers.controller('testCtrl',
['$scope','$rootScope','$location','userFactory',function($scope,$rootScope,$location,userFactory){

  $scope.changeLocation = function () {
    $location.path('/login');
  };

  $scope.users = userFactory.query();

//  console.log( $rootScope.formation.name);
  $scope.getUserDetail = function (id) {

    $scope.userdetail = userFactory.get({user:id})
  };

  $scope.addUser = function () {
    userFactory.update({user:1},{
                        name : 'toto is back'}
                    );
  }

}] );
