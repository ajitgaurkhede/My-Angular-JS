
var app = angular.module('myShoppingList', []);

app.component('shopComp', {
    bindings: {

        message: '@'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.products = [
            'Milk',
            'Bread',
            'Eggs'
        ];
        $ctrl.$onInit = function () {
            $ctrl.usermsg = $ctrl.message || 'NA';
        };
        $ctrl.addItem = function (item) {


            $ctrl.errortext = "";
            if (!item) {
                return;
            }
            if ($ctrl.products.indexOf(item) == -1) {
                $ctrl.products.push(item)
            }
            else {
                $ctrl.errortext = "this item is already in your Todo List.";
            }

            $ctrl.removeItem = function (x) {
                $ctrl.products.splice(x, 1);
            }


        };
    }],
    template:
        `<p>{{$ctrl.usermsg}}</p>
            <inner-comp inner-item ="$ctrl.addItem(item)"></inner-comp>
            <ul>
                 <li ng-repeat ="p in $ctrl.products">{{p}}<i ng-click = "$ctrl.removeItem($index)" class="fas fa-trash-alt"> 
                 </i></li>
             </ul>
                <p>{{$ctrl.errortext}}</p>
            `
});


app.component('innerComp', {
    bindings: {
        innerItem: '&'
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.innerAddItem = function () {
            $ctrl.innerItem({
                item: $ctrl.newName
            });

        };

    }],
    template:
        `<div class="search">
                     <input type="text" placeholder="Add Todo" ng-model = "$ctrl.newName">
                    <span ng-click = "$ctrl.innerAddItem()"><i class="fas fa-plus"></i></span>
             </div>
            `
});


