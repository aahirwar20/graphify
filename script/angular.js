var app =angular.module('myapp',[]);
app.controller('myCtrl',function($scope,$http,$q){

v= [{name:"Graph ",data:"xyz" , img:"./img/graph.png",link:"./public/Graph.htm"},
    {name:"Simple Calculator",data:"xyz", img:"./img/logo.png",link:"./public/c_calculator.htm"},
   {name:"Scientific Calculator",data:"xyz", img:"./img/scientific.png",link:"./public/s_calculator.htm"},
    {name:"Programming Calculator",data:"xyz", img:"./img/programming.png",link:"./public/Programming.htm"},
    {name:"Tempreture Calculator",data:"xyz", img:"./img/temp.png",link:"./public/tempreture.htm"},
    {name:"Unit Calculator",data:"xyz", img:"./img/unit.png",link:"./public/unit.htm"},
   
];

$scope.sends=v;

});
