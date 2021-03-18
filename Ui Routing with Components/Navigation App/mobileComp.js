
var mobile = angular.module('mobileModule', ['ui.router']);

mobile.component("mobileComp", {

    controller: [function () {


        var $ctrl = this;

        $ctrl.msg = "Like your favourite Divices or Dislike if you disapointed with that perticular brand";

        $ctrl.mobiles = [

            { brandName: "Redmi", model: "note 10", date: new Date("March 3, 2021"), price: 12000, likes: 0, dislikes: 0 },
            { brandName: "Realme", model: "8", date: new Date("March 18, 2021"), price: 13000, likes: 0, dislikes: 0 },
            { brandName: "Oppo", model: "Renno 6", date: new Date("May 7, 2021"), price: 45000, likes: 0, dislikes: 0 },
            { brandName: "Micromax", model: "In note 2", date: new Date("june 18,2021"), price: 20000, likes: 0, dislikes: 0 }

        ];

        $ctrl.sortColumn = "brandName";



    }],

    template:
        `
            
            <h2>Welcome to Mobile Information Service</h2>
            <marquee bgcolor="white">Get latest launch of mobiles details here wich is free of cost, we provides lots of details here
                like any mobile brands Micromax, Realme, Redmi , Oppo and OnePlus
            </marquee>
            <br><br>
            <input type="checkbox" ng-model = "showPrice" /> Show Price	
			<br><br>
				Order By :<select ng-model = "sortColumn">
					<option value="brandName"> Brand Name ASC</option>
					<option value="model"> Model No ASC</option>
					<option value="date"> Date of Launch ASC</option>
					<option value="-price"> Price in DESC</option>

			</select>
            <br><br>
			<input type="text" placeholder="Search Brand Name" ng-model = "searchText.brandName"/>
			<br><br>
            <table >
            <thead>
                <tr>
                    <th> Brand Name</th>
                    <th>Model No</th>
                    <th> Date of Launch </th>
                    <th ng-show ="showPrice">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat = "mob in $ctrl.mobiles | orderBy : sortColumn | filter: searchText">
                    <td>{{mob.brandName}} </td>
                    <td>{{mob.model}}</td>
                    <td>{{mob.date | date:"dd/MM/yyyy"}}</td>
                    <td ng-show ="showPrice">{{mob.price}}</td>
                </tr>

            </tbody>
            </table>

    
    `




});