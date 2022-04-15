var x1=-1000,x2=1000;
var xValues = [];
 var yValues = [];
function generateData(value, i1, i2, step = 1) {
 xValues.length = 0;
 yValues.length = 0;
 var a=1;
   for (let m = i1; m <= i2; m += step) {
     var s=m.toString();
     
     var k=value.replace(/x/g,s);
     var data=graph_data(k);
     
    yValues.push(data)
     xValues.push(m);
   }}

function large_graph(){
x1=x1-10;
x2=x2+10;
t=document.getElementById("in1").value
 generateData(t, x1, x2, 1);
 plot();
}
function small_graph(){
x1=x1+10;
x2=x2-10;
t=document.getElementById("in1").value
 generateData(t, x1, x2, 1);
 plot();
}


var plot=function(){

 var m=document.getElementById("in1");
 if(m==null){
   t='x';
 }
 else{
   t=m.value;
 }
 generateData(t, x1, x2, 1);

 new Chart("myChart", {
   type: "line",
   data: {
     labels: xValues,
     datasets: [{
       fill: false,
       pointRadius: 0,
       borderColor: "rgba(0,0,255,0.5)",
       data: yValues
     }]
   },    
   options: {
     legend: {display: false},
     title: {
       display: true,
       text: t,
       fontSize: 16
     }
   }
 });
 
 }
 setTimeout(plot(),100);