// for ref = https://ui-router.github.io/ng1/tutorial/helloworld

/*
var myApp = angular.module('helloworld',['ui.router']);

myApp.config(function($sateProvider){

        var helloState = {

            name: 'hello',
            url: '/hello',
            template: '<h3>hello world !</h3>'

        }

        var aboustState = {

                name: 'about',
                url: '/about',
                template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $sateProvider.state(helloState);
        $sateProvider.state(aboustState);


});

*/

var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});