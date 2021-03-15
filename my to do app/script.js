/*
var app = angular.module('MainApp', []);

app.component('outerComp', {
    bindings: {

        bname: '@'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.names = [
            'Nick'
        ];
        $ctrl.$onInit = function () {
            $ctrl.username = $ctrl.bname || 'NA';
        };
        $ctrl.addName = function (name) {
            $ctrl.username = name;
            $ctrl.names.push(name);
        };
    }],
    template:
        `<h2>Hello, from the outer component</h2>
            <p>Username is: {{$ctrl.username}}</p>
            <inner-comp inner-b ="$ctrl.addName(name)"></inner-comp>
            <hr />
            <p ng-repeat = "n in $ctrl.names">
            {{n}}
            </p>
            `
});



app.component('innerComp', {
    bindings: {
        innerB: '&'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.innerName = function () {
            $ctrl.innerB({
                name: $ctrl.newName
            });

            // $ctrl.newName = '';

        };

    }],
    template:
        `<h2>Hello, from the inner component</h2>
            <p> new Name: <input ng-model = "$ctrl.newName"/></p>
            <p><button ng-click ="$ctrl.innerName()">Add Name</btton></p>
            `
});
*/


var  app = angular.module("myShoppingList",[]);
app.controller("myCtrl",function($scope){
$scope.products = ["Milk", "Bread", "Eggs"];
$scope.addItem = function(){
    $scope.errortext = "";
    if(!$scope.addMe){return;}
    if($scope.products.indexOf($scope.addMe) == -1){
        $scope.products.push($scope.addMe)
    }
    else{
        $scope.errortext = "this item is already in your Todo List.";
    }
}
    $scope.removeItem = function(x){
        $scope.products.splice(x,1);
    }

});