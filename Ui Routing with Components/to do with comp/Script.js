
app.config(function($stateProvider){


    var  inputCompo= {
        name: 'inputComp',
        url: '/ininputComp',
        //component: 'inputComp'
        templateUrl: "mobileinfo.html"
    }

    var mainCompo = {
        name: 'mainComp',
        url: '/inmaincomp',
        //component: 'mainComp'
        template: `<main-comp message="Welocme User"></main-comp>
                     `
    }


    $stateProvider.state(inputCompo);
    $stateProvider.state(mainCompo);
   

});
