function dis(v){
    document.getElementById("result").value+=v

}

$(document).ready(function(){
    var a=1;
    $("#b1").click(function(){
    
        if(a%2==1){a++;
     $("#lt").css({"animation":"right_slide 300ms linear forwards"})}
     else{
         
         a++;
    $("#lt").css({"animation":"left_slide 300ms linear forwards"})}    
    });
});
  


function graph_data(val) {
    const preprocessingFunctions = [
      pre_sin, pre_cos, pre_tan, pre_exp, pre_sqrt, pre_log, pre_pow2, pre_pow3, pre_pow
    ];
  
    let expression = val.replace(/e/g, 3.14);
  
    for (const preprocess of preprocessingFunctions) {
      expression = preprocess(expression);
    }
  
    try {
      const result = evaluateExpression(expression);
      return isFinite(result) ?  result : Infinity;
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return 0;
    }
  }
  
  function evaluateExpression(expression) {
    return eval(expression);
  }
  
  // Rest of the preprocessing functions...
  
  // Event listeners and other code...
  
function solve(){
    let k =document.getElementById("result").value
   var r= graph_data(k);
    document.getElementById("result").value=r
}
function clr(){
    document.getElementById("result").value=""
}
function del(){
    let a=document.getElementById("result").value;
    let b=a.slice(0,-1);
    document.getElementById("result").value=b;
}
function pre_sin( s){
    let a =s.indexOf("sin");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=4+sin_p;
        let st =s;
        if(s[i-1]=='('){
        while((s[i]!=')')&&(i<20)){
            i++;
            
        }
        value_s=st.slice(sin_p+4,i);
        value_s= eval(value_s);
        let value=parseInt(value_s);
        if(value%180==0){value=0;}
        else{
         value =Math.sin(value*Math.PI/180);}
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
         
         s=value_s;
    }}
    
    
   
    
    return(s);
}
function pre_cos( s){
    let a =s.indexOf("cos");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=4+sin_p;
        let st =s;
        if(s[i-1]=='('){
        while((s[i]!=')')&&(i<20)){
            i++;
            
        }
        value_s=st.slice(sin_p+4,i);
        value_s= eval(value_s);
        let value=parseInt(value_s);
        if((value%180==90)||(value%180==-90)){value=0;}
        else{
         value =Math.cos(value*Math.PI/180);}
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
         
         s=value_s;
    }}
    return(s);
}

function pre_tan( s){
    let a =s.indexOf("tan");
    let sin_p =parseInt(a);
    
    var value_s
    if(sin_p>-1){
       
        let i=4+sin_p;
        let st =s;
        if(s[i-1]=='('){
        while((s[i]!=')')&&(i<20)){
            i++;
            
        }
        value_s=st.slice(sin_p+4,i);
        value_s= eval(value_s);

        var value=parseInt(value_s);
        
        if((value%180==90)||(value%180==-90)){value=Infinity;
            }
        else if(value%180==0){value=0;
            }
        else{
         value =Math.tan(value*Math.PI/180);}
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
         
         s=value_s;
    }}
    return(s);
}

function pre_exp(s){
    let a =s.indexOf("exp");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=4+sin_p;
        let st =s;
        if(s[i-1]=='('){
        while((s[i]!=')')&&(i<20)){
            i++;
            
        }
        value_s=st.slice(sin_p+4,i);
        value_s= eval(value_s);
        let value=parseInt(value_s);
         value =Math.exp(value);
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
        
         s=value_s;
        }}
    return(s);
}

function pre_sqrt( s){
    let a =s.indexOf("sqrt");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=5+sin_p;
        let st =s;
        if(s[i-1]=='('){
        while((s[i]!=')')){
            i++;
            
        }
        value_s=st.slice(sin_p+5,i);
        value_s= eval(value_s);
        let value=parseInt(value_s);
         value =Math.sqrt(value);
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
        
         s=value_s;
    }}
    else{


    }
    return(s);
}

function pre_log( s){
    let a =s.indexOf("log");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=4+sin_p;
        let st =s;
        if(s[i-1]=='('){
        
        while((s[i]!=')')&&(i<20)){
            i++;
            
        }

        value_s=st.slice(sin_p+4,i);
        value_s= eval(value_s);
        let value=parseInt(value_s);
        if(value>0){
         value =Math.log(value);
         value_s=value.toString();
         let c= value_s.indexOf(".");
         let c_i=parseInt(c);
         value_s=value_s.slice(0,c_i+4);}
         else{
             value_s='0';
         }
         value_s=st.slice(0,sin_p)+value_s+st.slice(i+1);
        
         s=value_s;
    }}
    else{}
    return(s);
}

function pre_pow2(s){
    let a =s.indexOf("^2");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=sin_p;
        let st =s;
        
            if(s[i-1]==')'){
                while((s[i]!='(')&&(i>0)){
                    i--;
                    
                }
        value_s=st.slice(i+1,sin_p-1);
        
        value_s= eval(value_s);
        let value=parseInt(value_s);
         value =Math.pow(value,2);
         value_s=value.toString();
         let c= value_s.indexOf("."); 
         let c_i=parseInt(c);
         if(c_i>=0){
         value_s=value_s.slice(0,c_i+4);
         }
          value_s=st.slice(0,i)+value_s+st.slice(sin_p+2);
        
         
         s=value_s;
        }
    else{
        value_s=st.slice(0,sin_p);
        let value=parseInt(value_s);
        value =Math.pow(value,2);
        value_s=value.toString();
        let c= value_s.indexOf("."); 
        let c_i=parseInt(c);
        if(c_i>=0){
        value_s=value_s.slice(0,c_i+4);
        }
         value_s=value_s+st.slice(sin_p+2);
         
        s=value_s;
       
    }}
    return(s);
}
function pre_pow3( s){
    let a =s.indexOf("^3");
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=sin_p;
        let st =s;
        
            if(s[i-1]==')'){
                while((s[i]!='(')&&(i>0)){
                    i--;
                    
                }
        value_s=st.slice(i+1,sin_p-1);
        
        value_s= eval(value_s);
        let value=parseInt(value_s);
         value =Math.pow(value,3);
         value_s=value.toString();
         let c= value_s.indexOf("."); 
         let c_i=parseInt(c);
         if(c_i>=0){
         value_s=value_s.slice(0,c_i+4);
         }
          value_s=st.slice(0,i)+value_s+st.slice(sin_p+2);
         
         s=value_s;
        }
        else{
            value_s=st.slice(0,sin_p);
            let value=parseInt(value_s);
            value =Math.pow(value,3);
            value_s=value.toString();
            let c= value_s.indexOf("."); 
            let c_i=parseInt(c);
            if(c_i>=0){
            value_s=value_s.slice(0,c_i+4);
            }
             value_s=value_s+st.slice(sin_p+2);
            
            s=value_s;
        }
      
        }
    return(s);
}
function pre_pow( s){
    let a =s.indexOf("^");
    let m=s.slice(a+1);
    let m_i=parseInt(m);
    let sin_p =parseInt(a);
    
    let value_s
    if(sin_p>-1){
       
        let i=sin_p;
        let st =s;
        if(s[i-1]==')'){
        while((s[i]!='(')&&(i>0)){
            i--;
            
        }
        value_s=st.slice(i+1,sin_p-1);
        
        value_s= eval(value_s);
        let value=parseInt(value_s);
         value =Math.pow(value,m_i); 
         
         value_s=value.toString();
         let c= value_s.indexOf("."); 
         let c_i=parseInt(c);
         if(c_i>=0){
         value_s=value_s.slice(0,c_i+4);
         }
          value_s=st.slice(0,i)+value_s+st.slice(sin_p+2);
         
         s=value_s;
    }
    else{
        value_s=st.slice(0,sin_p);
        let value=parseInt(value_s);
        value =Math.pow(value,m_i);
        value_s=value.toString();
        let c= value_s.indexOf("."); 
        let c_i=parseInt(c);
        if(c_i>=0){
        value_s=value_s.slice(0,c_i+4);
        }
         value_s=value_s+st.slice(sin_p+2);
        
        s=value_s;
    }}
    return(s);
}

