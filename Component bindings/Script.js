var app = angular.module("MainApp",[]);

app.component('outerComp',{
bindings: {
        username: '@'
},
controller: [function(){
    var $ctrl = this;
    $ctrl.names = [
        'Nick'
    ];
    $ctrl.$onInit = function(){
        $ctrl.username = $ctrl.username || 'NA';

    };

    $ctrl.addName = function(name){
        alert('outer')
        $ctrl.username = name ;
        $ctrl.names.push(name);

    };
}],

template: `<h2> Hello, from the outer component</h2> 
            <p>username is : {{$ctrl.username}}</p> <inner-comp add-name="$ctrl.addName(name)"> </inner-comp> 
            <hr /> </p>`
   
});

app.component('innerComp',{
    bindings: {
        addName : '&'
    },
    controller: [function(){
        var $ctrl = this;

        $ctrl.addNewName = function(){
            alert('inner');
            try{
                $ctrl.addName({name: $ctrl.newName}); 
            }catch(e) {
                console.log(e);
            }
            
            alert('innerc caleed');
            $ctrl.newName = '';
        };

    }],
    template : `<h3> Hello, from the inner component</h3> <p>New Name : 
                <input ng-model="$ctrl.newName"></input> </p> <p> 
                <button ng-click = "$ctrl.addNewName()"> Add Name </button> </p>`
    
    });


