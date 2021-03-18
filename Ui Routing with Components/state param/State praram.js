var app = angular.module('app',['ui.router']);

app.config(['$stateProvider', function($stateProvider){

    $stateProvider
    .state('calc',{

        url: '/calc', 
        templateUrl: './calc.html',
        controller:'calcController'
    })

    .state('add',{

        url: "/add/:a/:b",
        templateUrl: 'result.html',
        controller: 'addController'
    })

    .state('root',{

        url : '/',

        template: '<strong> you are at root...click something else</strong>'

    })
    .state('otherwise',{

        url: '*path', 
     template:'<strong> no route available .. try click on link </strong>'

    });



}]);


app.controller('calcController',['$scope', '$state',

function($scope,$state){

$scope.a = 0 ;
$scope.b = 0 ;

$scope.doAdd = function(){

    $state.go('add',{

        a: $scope.a,
        b: $scope.b

    });
}


}
]);


app.controller('addController',['$scope','$stateParams','$state', function($scope,$stateParams,$state){

    $scope.a = 0 ;
    $scope.b = 0 ;

    if($stateParams.a){

        $scope.a = $stateParams.a;
    }

    if($stateParams.b){

        $scope.b = $stateParams.b;
    }

    $scope.goBack = function(){
        $state.go('calc');
    }

    $scope.result = parseInt($scope.a) + parseInt($scope.b);


    }
    ]);



