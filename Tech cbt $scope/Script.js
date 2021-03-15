var app = angular.module("sample",[]);
		app.controller("emp", function($scope){
			$scope.Name = "Jag";
		});
		
// minimize method		
var app2 = angular.module("sample2",[]);
	app2.controller("emp1",["$scope",function(c){
		c.Name = "jajo";
		c.Sal = 4500;
		
		c.getAnnualSal = function(){
			return(this.Sal) *12;
		}
		
	}]);
	// tye 2
	app2.controller("customerInfo",["$scope",function($scope){
		
		$scope.Name = "js";
		$scope.City = "Vienna";
		
	}]);
	
	// type 3
	app2.controller("demo",function(){
		
		this.Name = "dad";
		this.Sal = 45454;
	});
	
	