'use strict';


//const gsnum= Math.floor(Math.random() * 20);
 
let check =document.querySelector('.check');
let num =  document.querySelector('.num');
let correct= document.querySelector('.correct');
let highscore=document.querySelector('#highscore');
let guessnum=document.querySelector('.guessnum');
let soruisaret=document.querySelector('.soruisaret');
let soru=document.querySelector('.soru');
let secret= Math.floor((Math.random() * 20)+1);
soru.textContent=secret;

soru.style.visibility="hidden";

let scores=document.querySelector('#score');  

let score=20; // let score function icinde yazdigimda sadece 1 kere dusuyor,

///again

let again=document.querySelector('.again');


check.addEventListener("click", gess)  


function gess (){

const gnum=Number( num.value)
const gsecret=Number(soru.textContent);
console.log(gsecret);



if (!gnum){

correct.textContent= 'No number';


 }else if(gnum===gsecret){
    
  correct.textContent= 'Correct Number!'
  soru.style.visibility="visible";
  soruisaret.style.visibility="hidden";
  if(score>highscore.textContent){
  highscore.textContent=score;
  }

}else if (gnum!==gsecret ) {
   if (score>1){
      correct.textContent=
      gnum>gsecret ? 'Too high':'Too low';
      score--;
      scores.textContent=score;

     }else{ 
      scores.textContent=0;
      correct.textContent= 'You lost:(((';
     }
   }
/* }else if (gnum>gsecret) {

   if(score>1){ 
    correct.textContent='Too high'; 
    score--;
    scores.textContent=score;
   }else{ 
       scores.textContent=0;
       correct.textContent= 'You lost:(((';
   }
    

}else if (gnum<gsecret) {

   if(score>1){ 
    correct.textContent='Too low';
    score--;
    scores.textContent=score;
   }else{ 
       scores.textContent=0;
       correct.textContent= 'You lost:(((';
   } */
     
}  ;


//again
 
again.addEventListener("click", repeat)  

function repeat(){
   score=20;
   let secret= Math.floor((Math.random() * 20)+1);
   soru.textContent=secret;
   soru.style.visibility="hidden";
   soruisaret.style.visibility="visible";
   num.value="";
   correct.textContent= 'Start guessing!...'
   scores.textContent=score;

   if (highscore<score){
      highscore.textContent=score;

   }
}





