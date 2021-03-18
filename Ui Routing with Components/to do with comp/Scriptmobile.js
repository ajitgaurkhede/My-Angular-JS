var app = angular.module("mobileModule",[]);
	app.controller("mobileController", ["$scope",function($scope){


			var mobiles = [
					
				{brandName: "Redmi", model: "note 10" , date: new Date("March 3, 2021"), price: 12000, likes : 0 , dislikes : 0 },
				{brandName: "Realme", model: "8" , date: new Date("March 18, 2021"), price: 13000 , likes : 0 , dislikes : 0 },
				{brandName: "Oppo", model: "Renno 6" , date: new Date("May 7, 2021"), price: 45000 , likes : 0 , dislikes : 0 },
				{brandName: "Micromax", model: "In note 2" , date: new Date("june 18,2021"), price: 20000, likes : 0 , dislikes : 0 }
				
				]
				$scope.mobiles = mobiles;
				$scope.sortColumn = "brandName";



			$scope.incrementsLikes = function(mobiles){

				mobiles.likes++;

			};

			
			$scope.incrementsDisLikes = function(mobiles){

				mobiles.dislikes++;

			};

			$scope.msg = "Like your favourite Divices or Dislike if you disapointed with that perticular brand";


		}]);


