

var myApp = angular.module('hellogalaxy', ['ui.router']);

myApp.config(function ($sateProvider) {

    var helloGalaxy = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }



    var peopleState = {
        name: 'people',
        url: '/people',
        component: 'people',
        resolve: {
            people: function (PeopleService) {
                return PeopleService.getAllPeople();
            }
        }
    }


    var personState = {
        name: 'person',
        url: '/people/{personId}',
        component: 'person',
        resolve: {
            person: function (PeopleService, $transition$) {
                return PeopleService.getPerson($transition$.params().personId);
            }
        }
    }


    $stateProvider.state(helloGalaxy);
    $stateProvider.state(peopleState);
    $stateProvider.state(personState);

});


myApp.component('hello', {
    
    controller: [function () {
        $ctrl = this;
        $ctrl.greeting = 'hello';
        $ctrl.toggleGreeting = function () {
            $ctrl.greeting = ($ctrl.greeting == 'hello') ? 'whats up' : 'hello'
        };
    }],

    template: `<h3>{{$ctrl.greeting}} Solar System!</h3> +
        <button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>`

});

myApp.component('people', {
    bindings: { people: '<' },

    template: `<h3>Some people:</h3> +
        <ul> +
          <li ng-repeat="person in $ctrl.people"> +
           <a ui-sref="person({ personId: person.id })"> +
              {{person.name}} +
            </a> +
          </li> +
        </ul>
        `
})



