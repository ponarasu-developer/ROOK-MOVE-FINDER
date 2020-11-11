let alphabet = ["A","B","C","D","E","F","G","H"];
let number = ["1","2","3","4","5","6","7","8"];

var indexone;
var indextwo;
var indexthree;
var indexfour;


let result = document.getElementById("result");

function firstletter (){
 
 let letterone = document.getElementById("initialalp").value;

indexone = (alphabet.indexOf(letterone));
if ((indexfour == indextwo) ||(indexone == indexthree)) {
result.innerText ="CORRECT MOVE";
  console.log("move");
} else {
result.innerText ="WORNG MOVE";
  console.log("not move");
}
}


function firstnumber (){
 
 let numberone = document.getElementById("initialnum").value;

  indextwo = (number.indexOf(numberone));
if ((indexfour == indextwo )||(indexone == indexthree)) {
  result.innerText ="CORRECT MOVE";
  console.log("move");
} else {
  result.innerText ="WORNG MOVE";
  console.log("not move");
}
}


function secondletter (){
 
 let lettertwo = document.getElementById("finalalp").value;

indexthree =  (alphabet.indexOf(lettertwo));
if ((indexfour == indextwo )||(indexone == indexthree)) {
  result.innerText ="CORRECT MOVE";
  console.log("move");
} else {
  result.innerText ="WORNG MOVE";
  console.log("not move");
} 
}


function secondnumber (){
 
 let numbertwo = document.getElementById("finalnum").value;

 indexfour = (number.indexOf(numbertwo));
if ((indexfour == indextwo)||(indexone == indexthree)) {
  result.innerText ="CORRECT MOVE";
  console.log("move");
} else {
  result.innerText ="WORNG MOVE";
  console.log("not move");
}
}



