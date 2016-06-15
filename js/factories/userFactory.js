app.factory('userFactory',['$resource',function($resource){

  var url = 'http://jsonplaceholder.typicode.com/users/:user';
  return  $resource( url,  {user:'@user'},{
    'update':{method:'PUT'},
    'add':{method:'PUSH'}
  });

}]);
