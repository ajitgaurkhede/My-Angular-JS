var app = angular.module('app',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
    .state('firstMessage',{

        url: '/first-msg', 
        templateUrl: './msg.html',
        controller:'msg1'
        //template:'<strong> this is msg</strong>'

    })
    .state('secondMessage',{

        url: '/first-msg', 
        templateUrl: './msg1.htm',
        controller:'msg1'
        //template:'<strong> this is msg</strong>'

    })
    .state('root',{

        url : '/',

        template: '<strong> you are at root...click something else</strong>'

    });
   /* .state('noroute',{

        url: '*path', 
     template:'<strong> no route available .. try click on link </strong>'

    });

*/

$urlRouterProvider.otherwise('/');

}]);


app.controller('msg1',['$scope', function($scope){

$scope.a = 10 ;
$scope.b = 20 ;
}
]);

