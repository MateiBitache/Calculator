let tasta1=document.getElementById("1");
let tasta2=document.getElementById("2");
let tasta3=document.getElementById("3");
let tasta4=document.getElementById("4");
let tasta5=document.getElementById("5");
let tasta6=document.getElementById("6");
let tasta7=document.getElementById("7");
let tasta8=document.getElementById("8");
let tasta9=document.getElementById("9");
let tasta0=document.getElementById("0");
let plus=document.getElementById("+");
let minus=document.getElementById("-");
let ori=document.getElementById("X");
let div=document.getElementById(":");
let cc=document.getElementById("C");
let egal=document.getElementById("egal");
tasta1.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="1";
});
tasta2.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="2";
});

tasta3.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="3";
});

tasta4.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="4";
});

tasta5.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="5";
});

tasta6.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="6";
});

tasta7.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="7";
});

tasta8.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="8";
});

tasta9.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="9";
});

tasta0.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+="0";
});

plus.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+=" + ";
});

minus.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+=" - ";
});

ori.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+=" * ";
});

div.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent+=" / ";
});
cc.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    outputtt.textContent="0";
});
egal.addEventListener("click",function(){
    let outputtt = document.querySelector(".outputtt");
    try
    {
        outputtt.textContent=eval(outputtt.textContent);
    }catch(error){
        outputtt.textContent="Error";
        setTimeout(function() {
            outputtt.textContent = "0";
        }, 500);
        return;
    }
});
