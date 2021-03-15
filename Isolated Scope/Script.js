
var app = angular.module('app',[]);

app.controller('sample',[ '$scope' , function($scope){

    $scope.a = 10 ;
    $scope.b = 20 ;
    $scope.p = 11 ;
    $scope.q = 22 ;

}]);

app.directive('message', function(){

    return{

        templateUrl: 'info.html',
        scope:{

            a:'@',
            b: '@'
        }
    }


});