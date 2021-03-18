app.component('inputComp', {
    bindings: {
        innerItem: '&',
        tempFun: '&',
        attachParam: '&'
    },
    controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
        var $ctrl = this;
        $ctrl.innerAddItem = function () {
            $ctrl.innerItem({
                item: $ctrl.newItem
            });

        };

        $ctrl.attachTemp = function () {
            $ctrl.tempFun(
                {
                    nameValue: $ctrl.newValue
                }
            );
        };


        $ctrl.attachPara = function () {
            $ctrl.attachParam(
                {
                    statePara: $ctrl.changePara//$stateParams.a
                }
            );
        };

        $ctrl.changePara = $stateParams.a;

    }],
    template:
        `<div class="search">
                 <input type="text" placeholder="Add Todo" ng-model = "$ctrl.newItem">
                 <input type="text" placeholder="Add a name" ng-model = "$ctrl.newValue">
                 <input type="text" placeholder="change  a name by stateparams" ng-model = "$ctrl.changePara">
                 <span ng-click = "$ctrl.innerAddItem()"><i class="fas fa-plus"></i></span>
                 <button ng-click = "$ctrl.attachTemp()">submit name</button>
                 <button ng-click = "$ctrl.attachPara()">submit state param</button>
         </div>
            `
});

