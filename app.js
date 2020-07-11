var minH = document.getElementById("min");
var secH = document.getElementById("sec");
var msecH = document.getElementById("msec");
var sbtn = document.getElementById("sbtn");
var lapp = document.getElementById("lapp");
var color =  ["black","blue","green","red"];
var interval;
var coindx = 0;
var min = 00;
var sec = 00;
var msec = 00;
var cou = 1;

function timer(){
    msec++;
    msecH.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secH.innerHTML = sec;
        msec = 00;
    }else if(sec >= 60){
        min++;
        minH.innerHTML = min;
        sec = 00;
    }

}

function s(){
    
interval = setInterval(timer,10);
sbtn.disabled = true;
}

function stop(){

    clearInterval(interval);
    sbtn.disabled = false;
}

function r(){
min =0;
sec =0;
msec =0;
minH.innerHTML = min;
secH.innerHTML= sec;
msecH.innerHTML= msec;
lapp.innerHTML = "";
cou = 1;
stop();
}

function lap(){
var lpm = minH.innerHTML;
var lps = secH.innerHTML;
var lpms = msecH.innerHTML;
var ele = document.createElement("p");

ele.style.backgroundColor = color[coindx++];

 if( coindx > 3){
coindx = 0;
 }
 ele.style.color = "white";
 ele.style.display = "inline-block";
ele.innerHTML = "Lap:" + cou++ +" >> "+ lpm + ":M " + lps + ":S " + lpms + ":MS";
ele.style.marginLeft = "5px";
ele.style.marginTop = "30px";
ele.style.padding = "10px";
ele.style.fontWeight = "bold";
ele.style.borderRadius = "30px";
lapp.appendChild(ele);
}
