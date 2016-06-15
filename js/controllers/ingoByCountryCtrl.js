ingoControllers.controller('ingoByCountryCtrl',
['$scope','ingoFactory',function($scope,ingoFactory){
$scope.countries = ingoFactory.countries;

}] );
