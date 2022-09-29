setInterval( function mnac(){
	var d=new Date();

document.getElementById("or").innerHTML=31-d.getDate();
if(d.getHours()<=20){
document.getElementById("jam").innerHTML=20-d.getHours();
}
else{
	document.getElementById("jam").innerHTML=20+24-d.getHours();
    
}
document.getElementById("rope").innerHTML=60-d.getMinutes();
document.getElementById("second").innerHTML=60-d.getSeconds();
},1000)
setInterval(function g(){
var i=0;
setInterval(function f(){
	if(i<=200){
document.getElementById("gorc").innerHTML=i;
i++;
}
},50)
var i=0;
setInterval(function f(){
	if(i<=191){
document.getElementById("drakangorc").innerHTML=i;
i++;
}
},50)
var i=0;
setInterval(function f(){
	if(i<=53){
document.getElementById("gorcynkerner").innerHTML=i;
i++;
}
	
},50)
},10000)

<script src='https://qz.app.do/iframe/html-css.js'></script>
