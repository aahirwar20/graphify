function celcius(value){
  var c= parseFloat(value);
  
  document.getElementById("pidf").value =(c*1.8)+32;
  document.getElementById("pidk").value =c+273.15;
}
function farenheit(value){
  var f= parseFloat(value);
  document.getElementById("pidc").value =(f-32)/1.8;
  document.getElementById("pidk").value =((f-32)/1.8)+273.15;
}
function kelvin(value){
  var k= parseFloat(value);
  document.getElementById("pidf").value =((k-273.15)*1.8)+32;
  document.getElementById("pidc").value =k-273.15;
}