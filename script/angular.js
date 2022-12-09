var app =angular.module('myapp',[]);
app.controller('myCtrl',function($scope,$http,$q){
v= [{name:"Clasical Calculator",data:"xyz", img:"./img/img1.jpg",link:"./public/c_calculator.htm"},
   {name:"Scientific Calculator",data:"xyz", img:"./img/img1.jpg",link:"./public/s_calculator.htm"},
    {name:"Programming Calculator",data:"xyz", img:"./img/img1.jpg",link:"./public/Programming.htm"},
    {name:"Graph ",data:"xyz" , img:"./img/img1.jpg",link:"./public/Graph.htm"},
    {name:"Tempreture Calculator",data:"xyz", img:"./img/img1.jpg",link:"./public/tempreture.htm"},
    {name:"Unit Calculator",data:"xyz", img:"./img/img1.jpg",link:"./public/unit.htm"},
   
];

$scope.sends=v;

});
