app.directive('test',[function(){

  return {
    restrict: 'A',
    replace: true,
    template: '<div>coucouc</div>'
  };

}]);

app.directive('ngReset',[function(){

  return {
    restrict: 'E',
    replace: true,
    scope : true,
    templateUrl:'js/directives/templates/ngReset.html'

  };

}]);

app.directive('ngPlayer',[function(){

  return {
    restrict: 'E',
    replace: true,
    scope : {
      name:'=info', // un objet
      test:'@toto' // du text
    },
    template:'<div>Name : {{name.name}} - {{test}}</div>'

  };

}]);

app.directive('ngCountry',[function(){

  return {
    restrict: 'E',
    replace: true,
    scope : {
    },
    template:'<div><p>otoBUS</p><button ng-click="changeName()">edit</button></div>',
    link:function ($scope,elem,attrs) {
      $scope.changeName = function(){
        console.log("ok");
        var value = elem.find('p').text();
        console.log(value);
        elem.find('p').replaceWith('<input type="text" value="'+value+'" />');
      }
    }

  };

}]);
