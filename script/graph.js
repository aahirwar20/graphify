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


   const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
        });
        chart.update();
      }
    },]   
function type_graph(a){
console.log(a);

}    

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
var t=document.getElementById("in1").value
 generateData(t, x1, x2, 1);
 plot();
}


var plot=function(){

 var m=document.getElementById("in1");
 if(m==null){
   t="x";
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
       label:t,
       fontSize:40,
       fill: false,
       pointRadius: 0,
       borderColor: "rgb(250,0,0,0.8)",
       backgroundColor: "rgb(250,0,0,0.2)",
       data: yValues,
       
     }]
   },    
   options: {
    responsive: true,
    title: {
      display: true,
      text: t,
      fontSize:40,
    },
    
    interaction: {
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200,
        ticks: {
          // forces step size to be 50 units
          stepSize: 200
        }
      },
      y: {
        display: true,
        type: 'logarithmic',
        title: {
          display: true,
          text: 'Value'
        },
        
        suggestedMin: -10,
        suggestedMax: 200,
        ticks: {
          // forces step size to be 50 units
          stepSize: 200
        }
      }
    }
  }
     
 });
 
 
 }
 setTimeout(plot(),100);