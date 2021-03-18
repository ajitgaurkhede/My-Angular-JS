var app = angular.module('myNaveApp', ['ui.router', 'myToDoList','mobileModule']);
app.config(function($stateProvider){

    var  inputCompo= {
        name: 'inputCompo',
        url: '/ininputComp',
        component: 'inputComp'
        //templateUrl: "mobileinfo.html"
    }

    var todo = {
        name: 'todoList',
        url: '/todolist/{a}',
        component: 'mainComp',
        
    }

    var value = {
        name: 'valueList',
        url: '/valueList/{a}',
        templateUrl: 'value.html',
        //component: 'mainComp'
        controller: 'todoControl'
        
    }

    var mobileView = {
        name: 'mobileView',
        url: '/mobileViewcom',
        component: 'mobileComp'
    }

    $stateProvider.state(inputCompo);
    $stateProvider.state(todo);
    $stateProvider.state(value);
    $stateProvider.state(mobileView);

});

app.controller('todoControl',['$scope', '$stateParams', function($scope,$stateParams){
    $scope.a = $stateParams.a ;
//$ctrl.message = $stateParams.message ;
}
]);





