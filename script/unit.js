convert = function(){
    var e = document.getElementById("prevdata");
    var p = e.options[e.selectedIndex].value;
    var m= document.getElementById("last_data")
    var l=m.options[m.selectedIndex].value;
    var input=document.getElementById("pid").value;
    var out;
var m=parseFloat(input);
    if(p=='1'){
      m=m;
    }
    else if(p=='2'){
     m=2.5*m;
    }
    else if(p=='3'){
      m= 1000*m;
    }
    else{
    m=30*m;
    }
    
    if(l=='1'){
      m=m;
    }
    else if(l=='2'){
    m=m/2.5;
    }
    else if(l=='3'){
      m=m/1000;
    }
    else{
     m=m/30;
    }
    
    document.getElementById("pod").innerHTML=m;
    }