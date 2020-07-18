var n=document.querySelectorAll(".drum").length; //query selector
var i=0;
while( i<n)//loop to moove all button
{

document.querySelectorAll("button")[i].addEventListener("click" ,clickHandler );//selector select button then we add EventListener to it


 function clickHandler(){     //when we click this fun is triggered
this.style.color="white";
var buttonInnerHtml=this.innerHTML;
switch(buttonInnerHtml)
{
case "w":

var tom1= new Audio("sound/tom-1.mp3");
tom1.play();
break;

case "a":

var tom2= new Audio("sound/tom-2.mp3");
tom2.play();
break;

case "s":

var tom3= new Audio("sound/tom-3.mp3");
tom3.play();
break;

case "d":

var tom4= new Audio("sound/tom-4.mp3");
tom4.play();
break;

case "j":
var snare= new Audio("sound/snare.mp3");
snare.play();
break;

case "k":
var crash= new Audio("sound/crash.mp3");
crash.play();
break;

case "l":

var kick= new Audio("sound/kick-bass.mp3");
kick.play();
break;

default:
console.log("buttonInnerHtml");
}
}
  i++;
}
