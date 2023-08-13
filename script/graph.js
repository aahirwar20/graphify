var x1=-1000,x2=1000;
var xValues = [];
 var yValues = [];
var value = "x"

async function generateData(value, i1, i2, step = x2/100) {
  xValues.length = 0;
  yValues.length = 0;
  var a=1;
  for (let m = i1; m <= i2; m += step) {
    var s=m.toString();
    
    var k=value.replace(/x/g,s);
    var data=graph_data(k);
    
    yValues.push(data)
    xValues.push(m);
  }
}



async function large_graph(){
    x1=x1*10;
    x2=x2*10;
    await plot(value, x1, x2, (x2-x1)/100);
    console.log(x1)
}
async function small_graph(){
  x1 = x1/10
  x2 = x2/10
  console.log(x1)
  await plot(value, x1, x2, (x2-x1)/100);
}

var plot= async function( expression = "x", start = x1, end = x2, step = 10, yScaleType = "linear" ){
  value = expression;
  await generateData(expression, start, end, step);
  new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          label: expression,
          fontSize: 40,
          fill: false,
          pointRadius: 0,
          borderColor: "rgb(100,0,160,0.6)",
          backgroundColor: "rgb(250,0,0,0.2)",
          data: yValues,
        }]
      },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function(value, index, values) {
              return parseFloat(value).toFixed(2); // Format ticks as floats with 2 decimal places
            }
          }
        }
      },
    },
        
    });
 }
 setTimeout(plot(),1);