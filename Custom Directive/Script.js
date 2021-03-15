
var app = angular.module('mainApp',[]);

app.directive('firstDirective', function(){
	function linkedFunction($scope, element, attributes){
		
	$scope.text = "Hi there....";
	$scope.changeText = function(newText){
		$scope.text = newText;
		
	}
	
	}
		return{
			
			link : linkedFunction,
			template:'<span ng-click ="changeText(\'welcome to tutorialspoint\')">Current Text :{{text}}</span>',
			restrict : 'A'
		
		};
	
	});
	
	app.controller('myController', function(){
		
	});
	
	