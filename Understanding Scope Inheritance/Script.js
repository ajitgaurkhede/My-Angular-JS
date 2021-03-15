
var app = angular.module("sample",[]);

	app.controller("emp", ["$scope",function($scope){
		
		$scope.Name = "jajo";
		
	}]);
	
	
	app.controller("empDetails",["$scope",function($scope){
		
		//$scope.Sal = 83000; 
		$scope.Sal = 83000;
		$scope.Dept = "Sales";
		
	}]);
	
	app.controller("empPayCheck",["$scope",function(ep){
		
		ep.getTaxes = function(){
			return ep.Sal * 30/100;
		};
		
		ep.getNet = function(){
			
			return ep.Sal - ep.getTaxes();
		};
		
		
	}]);
	
	
	