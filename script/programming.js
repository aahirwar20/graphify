
function todec(input,key){
  var o=parseInt(input,key);
  return o;
}
function fromdec(input,key){
  var k= parseInt(input)
  var o=k.toString(key);
  console.log(o);
  return o;
}
convert = function(){
var e = document.getElementById("prevdata");
var p = e.options[e.selectedIndex].value;
var m= document.getElementById("last_data")
var l=m.options[m.selectedIndex].value;
var input=document.getElementById("pid").value;
var out;
console.log(l);
if(p=='1'){
  out =todec(input,2);
}
else if(p=='2'){
  out= todec(input,16);
}
else if(p=='3'){
  out= todec(input,8);
}
else{
out=parseInt(input);
}
var i=parseInt(out);

if(l=='1'){
  o =fromdec(i,2);
}
else if(l=='2'){
  o= fromdec(i,16);
}
else if(l=='3'){
  o= fromdec(i,8);
}
else{
 o=i;
}

document.getElementById("pod").innerHTML=o;
}
