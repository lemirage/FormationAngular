ingoControllers.controller('ingoDetailCtrl',
['$scope','ingoFactory','$routeParams',function($scope,ingoFactory,$routeParams){

var value = $routeParams.ingodetail;
$scope.ingo = ingoFactory.getIngo(value);

}] );
