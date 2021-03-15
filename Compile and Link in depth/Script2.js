

var app = angular.module("app",[]);

app.controller("msg",["$scope", function($scope){


}]);

app.directive("message", function($interpolate){

return{

    compile: function(tElement, tAttributes){

        console.log(tAttributes.text + " -In compile");
        tElement.css("border","1px solid #C0C0C0");

        return{
                pre: function(scope, iElement, iAttributes, controller){

                    console.log(iAttributes.text + " -In Pre ");
                },
                post: function(scope, iElement, iAttributes, controller){

                    console.log(iAttributes.text + " -In Post ");
                    if(iAttributes.text == "3"){
                        iElement.css("border", "1px solid Red");
                    }
                    iElement.on("click",scope.btnClick);
                },
   

        };

    },

    controller: function($scope, $element, $attrs){

            var v = $interpolate($attrs.text)($scope);
        //console.log($attrs.text + " In Controllerrr");
        console.log(v + "In Controllerrrs");

        $scope.btnClick = function(){

            alert(v);
        }
    }

    }



});





/*
var app = angular.module("app",[]);

app.controller("msg",["$scope", function($scope){


}]);

app.directive("message", function($interpolate){

return{

        link :{
                pre: function(scope, iElement, iAttributes, controller){

                    console.log(iAttributes.text + " -In Pre ");
                },
                post: function(scope, iElement, iAttributes, controller){

                    console.log(iAttributes.text + " -In Post ");
                    if(iAttributes.text == "3"){
                        iElement.css("border", "1px solid Red");
                    }
                    iElement.on("click",scope.btnClick);
                },

    },

    controller: function($scope, $element, $attrs){

            var v = $interpolate($attrs.text)($scope);
        //console.log($attrs.text + " In Controllerrr");
        console.log(v + "In Controllerrrs");

        $scope.btnClick = function(){

            alert(v);
        }
    }

    }



});



*/




/*var app = angular.module("app",[]);

app.controller("msg",["$scope", function($scope){


}]);

app.directive("message", function($interpolate){

return{

    compile: function(tElement, tAttributes){

        console.log(tAttributes.text + " -In compile");
        tElement.css("border","1px solid #C0C0C0");

                return function(scope, iElement, iAttributes, controller){

                    console.log(iAttributes.text + " -In Post ");
                    if(iAttributes.text == "3"){
                        iElement.css("border", "1px solid Red");
                    }
                    iElement.on("click",scope.btnClick);
                }

    },

    controller: function($scope, $element, $attrs){

            var v = $interpolate($attrs.text)($scope);
        //console.log($attrs.text + " In Controllerrr");
        console.log(v + "In Controllerrrs");

        $scope.btnClick = function(){

            alert(v);
        }
    }

    }



});

*/




/*
var app = angular.module("app",[]);

app.controller("msg",["$scope", function($scope){


}]);

app.directive("message", function($interpolate){

    return function(scope, iElement, iAttributes, controller){

        console.log(iAttributes.text + " -In Post ");
        if(iAttributes.text == "3"){
            iElement.css("border", "1px solid Red");
        }
        iElement.on("click",scope.btnClick);
    }


});


*/