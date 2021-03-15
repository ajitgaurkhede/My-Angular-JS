
var app = angular.module("app",[]);

app.controller("emp",["$scope",function($scope){

    $scope.msg = "This my msg";

    $scope.msg2 = "This my msg from urlsss";

}]);

app.directive("myInfoMsg",function(){

    return{

            template : "<strong>{{msg}}</strong>"

    };


});

app.directive("myInfo",function(){

    return{

        templateUrl: "my-info.html"

    };

});