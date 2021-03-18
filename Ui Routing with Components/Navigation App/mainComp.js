
var app = angular.module('myToDoList', ['ui.router']);

app.component('mainComp', {
    bindings: {

        message: '@'
    },
    controller: ['$scope', '$stateParams',function ($scope,$stateParams) {
        var $ctrl = this;
       // $ctrl.temp = "hello";
        $ctrl.itemsList = [
            'Milk',
            'Bread',
            'Eggs'
        ];
        $ctrl.$onInit = function () {
            $ctrl.usermsg = $ctrl.message || 'NA';
        };

        $ctrl.addName = function(nameValue){
            $ctrl.usermsg = nameValue;
           // $scope.a = $stateParams.a ;
        };

        $ctrl.attachParam = function(statePara){
            $ctrl.temp = statePara;
        };

        $ctrl.addItem = function (item) {
            $ctrl.errortext = "";
            if (!item) {
                return;
            }
            if ($ctrl.itemsList.indexOf(item) == -1) {
                // alert($ctrl.products.indexOf(item));
                $ctrl.itemsList.push(item);
                //alert($ctrl.products.indexOf(item));
            }
            else {
                $ctrl.errortext = "this item is already in your Todo List.";
            }

            $ctrl.removeItem = function (x) {
                $ctrl.itemsList.splice(x, 1);
            }

        };
   
       

    }],
    template:
        `<p>{{$ctrl.usermsg}}</p>
        <p>{{$ctrl.temp}}</p>
        <input-comp inner-item ="$ctrl.addItem(item)" temp-fun="$ctrl.addName(nameValue)" attach-param = "$ctrl.attachParam(statePara)" >
        </input-comp>
            <ul>
                 <li ng-repeat ="p in $ctrl.itemsList">{{p}}<i ng-click = "$ctrl.removeItem($index)" class="fas fa-trash-alt"> 
                 </i></li>
             </ul>
        <p>{{$ctrl.errortext}}</p>
            `
});

/*

app.controller('todoControl',['$scope', '$stateParams', function($scope,$stateParams){
   
    $scope.a = $stateParams.a ;
//$ctrl.message = $stateParams.message ;
}
]);*/


