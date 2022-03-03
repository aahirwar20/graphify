var app= angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    
    .when("/c_cal",{
        templateUrl:"c_calculator.htm"})
    .when("/s_cal",{
            templateUrl:"s_calculator.htm"}) 
    .when("/unit",{
                templateUrl:"unit.htm"}) 
    .when("/temp",{
                    templateUrl:"tempreture.htm"}) 
     .when("/prog",{
                        templateUrl:"programming.htm"})  
            

                    
});