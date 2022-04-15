var app= angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    
    .when("/c_cal",{
        templateUrl:"/public/c_calculator.htm"})
    .when("/s_cal",{
            templateUrl:"/public/s_calculator.htm"}) 
    .when("/unit",{
                templateUrl:"/public/unit.htm"}) 
    .when("/temp",{
                    templateUrl:"/public/tempreture.htm"}) 
     .when("/prog",{
                        templateUrl:"/public/programming.htm"})  
   .when("/Graph",{
                 templateUrl:"/public/Graph.htm",}) 
            

                    
});
app.controller("myctr",function($scope){
   var list =["Binary","Hexgonal","Octal","Number"]
 $scope.prev=list;
                    
});

