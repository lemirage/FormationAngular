var app = angular.module('ingoApp',['ingoControllers','ngSanitize','ngRoute']);

var ingoControllers = angular.module('ingoControllers',[]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/test',{
      templateUrl:'partial/test.html'
    })
    .when('/login',{
      templateUrl:'partial/login.html'
    });
}]);

app.filter('website',function(){
  return function(input){
    var output = 'test';

    if( input.indexOf('http://') == 0 ||   input.indexOf('https://') == 0){
      output = '<a href="'+input+'" target="_blank" >'+input+'</a>';
    }
    else{
      output = '<a href="http://'+input+'" target="_blank" >'+input+'</a>';
    }
    return output;
  }
});

app.filter('email',function(){
  return function(input){
    var output = '<a href="mailto:'+input+'" target="_blank" >'+input+'</a>';
    return output;
  }
});

app.filter('link',function(){
  return function(input , type){
    var output = 'test';
    if(type=="website"){
      if( input.indexOf('http://') == 0 ||   input.indexOf('https://') == 0){
        output = '<a href="'+input+'" target="_blank" >'+input+'</a>';
      }
      else{
        output = '<a href="http://'+input+'" target="_blank" >'+input+'</a>';
      }
    }else{
       output = '<a href="mailto:'+input+'" target="_blank" >'+input+'</a>';
    }
    return output;
  }
});
