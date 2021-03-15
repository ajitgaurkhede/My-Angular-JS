var app = angular.module("sample",[]).run(["$rootScope",function($rootScope){
	$rootScope.TaxPercent = 30 ;
}]);


	app.controller("emp", ["$scope",function($scope){
		
		$scope.Name = "jajo";
		
	}]);
	

/*app.controller("emp",["$scope", "rootScope",function($scope,$rootScope){
	$scope.Name = "jag";
	$rootScope.TaxPercent = 30 ;
}]);
*/


app.controller("empDetails",["$scope",function($scope){
	
	$scope.Sal = 3400;
	$scope.Dept = "Sales";
	
}]);	

app.controller("empPayCheck",["$scope","$rootScope", function($scope, $rootScope){
	
	$scope.getTaxes = function(){
		
		return $scope.Sal * $rootScope.TaxPercent / 100;
	};

		$scope.getNet = function(){
		
		return $scope.Sal = $scope.getTaxes();
	};

}]);
	
	
	
	/*var app = angular.module("sample",[]);

	app.controller("emp", ["$scope",function($scope){
		
		$scope.Name = "jajo";
		
	}]);
*/