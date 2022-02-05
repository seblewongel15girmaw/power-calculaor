var p1El=document.getElementById("p1");
var signEl=document.getElementById("sign");
var numEl=document.getElementById("number");
function clearCal(){
    numEl.textContent=0;
    p1El.textContent=0;
    signEl.textContent=" "; 

}
function one(){
    if(numEl.textContent==0){
        numEl.textContent=1;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"1";
    }
    else if(p1El.textContent==0){
        p1El.textContent=1;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "1"

    }
    

    
}
function two(){
    if(numEl.textContent==0){
        numEl.textContent=2;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"2";
    }
    else if(p1El.textContent==0){
        p1El.textContent=2;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "2"

    }
    
}
function three(){
    if(numEl.textContent==0){
        numEl.textContent=3;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"3";
    }
    else if(p1El.textContent==0){
        p1El.textContent=3;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "3"

    }
    
}
function four(){
    if(numEl.textContent==0){
        numEl.textContent=4;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"4";
    }
    else if(p1El.textContent==0){
        p1El.textContent=4;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "4"

    }
    
}
function five(){
    if(numEl.textContent==0){
        numEl.textContent=5;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"5";
    }
    else if(p1El.textContent==0){
        p1El.textContent=5;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "5"

    }
    
}
function six(){
    if(numEl.textContent==0){
        numEl.textContent=6;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"6";
    }
    else if(p1El.textContent==0){
        p1El.textContent=6;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "6"

    }
    
}
function seven(){
    if(numEl.textContent==0){
        numEl.textContent=7;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"7";
    }
    else if(p1El.textContent==0){
        p1El.textContent=7;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "7"

    }
    
}
function eight(){
    if(numEl.textContent==0){
        numEl.textContent=8;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"8";
    }
    else if(p1El.textContent==0){
        p1El.textContent=8;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "8"

    }
    
}
function nine(){
    if(numEl.textContent==0){
        numEl.textContent=9;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"9";
    }
    else if(p1El.textContent==0){
        p1El.textContent=9;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "9"

    }
    
}
function zero(){
    if(numEl.textContent==0){
        numEl.textContent=0;

    }
    else if(numEl.textContent!==0 && signEl.textContent==" "){
        numEl.textContent=numEl.textContent +"0";
    }
    else if(p1El.textContent==0){
        p1El.textContent=0;

    }
    else if(p1El.textContent!==0 && signEl.textContent!==" "){
        p1El.textContent=p1El.textContent+ "0"

    }
    
}
function addition(){
    signEl.textContent="+"
}
function difference(){
    signEl.textContent="-"
}
function multiply(){
    signEl.textContent="*"
}
function division(){
    signEl.textContent="/"
}
function root(){
    signEl.textContent="R"
}
function tan(){
    signEl.textContent="tan"
}
function cos(){
    signEl.textContent="cos"
}
function sin(){
    signEl.textContent="sin"
}
function log(){
    signEl.textContent="log"
}
function ln(){
    signEl.textContent="ln"
}
function square(){
    signEl.textContent="sqr"
}
function power(){
    signEl.textContent="pow"
}
function equal(){
    if(signEl.textContent=="+"){
        numEl.textContent=parseInt(p1El.textContent)+parseInt(numEl.textContent);
        
    }
    else if (signEl.textContent=="/"){
        numEl.textContent=parseInt(numEl.textContent)/parseInt(p1El.textContent);
    }
    else if (signEl.textContent=="*"){
        numEl.textContent=parseInt(numEl.textContent)*parseInt(p1El.textContent);
    }
    else if (signEl.textContent=="-"){
        numEl.textContent=parseInt(numEl.textContent)-parseInt(p1El.textContent);
    }
    else if (signEl.textContent=="R"){
        numEl.textContent=Math.sqrt(parseInt(numEl.textContent));
    }
    else if (signEl.textContent=="-"){
        numEl.textContent=parseInt(numEl.textContent)-parseInt(p1El.textContent);
    }
    else if (signEl.textContent=="tan"){
        numEl.textContent=Math.tan(parseInt(numEl.textContent)).toFixed(3);
    }
    else if (signEl.textContent=="cos"){
        numEl.textContent=  Math.cos(parseInt(numEl.textContent)).toFixed(3);
    }
    else if (signEl.textContent=="sin"){
        numEl.textContent=Math.sin(parseInt(numEl.textContent)).toFixed(3);
    }
    else if (signEl.textContent=="log"){
        numEl.textContent=Math.log10(parseInt(numEl.textContent)).toFixed(3);
    }
    else if (signEl.textContent=="ln"){
        numEl.textContent=Math.ln(parseInt(numEl.textContent)).toFixed(3);
    }
    else if (signEl.textContent=="sqr"){
        numEl.textContent=numEl.textContent*numEl.textContent;
    }
    else if (signEl.textContent=="pow"){
        var total=parseInt(numEl.textContent);
        var result=1;
        for(var i=0;i<parseInt(p1El.textContent);i++){
            
            result=result*total

        }
        numEl.textContent=result;
    }
    
    
    signEl.textContent=" ";
    p1El.textContent=" "


}



