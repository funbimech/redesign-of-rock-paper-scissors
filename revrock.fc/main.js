const choices = ["rock", "paper", "scissors"];
const container=document.querySelector('.container')
const playerchoice=document.querySelector(".playerchoice")
const computerchoice=document.querySelector(".computerchoice")
const buttonchoice=document.querySelectorAll('.buttonchoice');
const result=document.getElementById("#result");

 
const playround= (playerchoice,computerchoice) => {

  if (playerchoice === computerchoice) {
    const a=document.createElement('a')
    a.innerText='you Tied! you both picked $(playerchoice)'
    result.appendChild(a)
  } else if (
    (playerchoice=== "rock" && computerchoice=== "scissors") ||
    (playerchoice === "paper" && computerchoice=== "rock") ||
    (playerchoice=== "scissors" && computerchoice=== "paper")
  ) {
    const a=document.createElement('a')
    a.innerText='you won! you are a genius'
    result.appendChild(a)
  } else {
    const a=document.createElement('a')
    a.innerText='you lost!'
    result.appendChild(a)
  }
}

function computerplay() {
  let choice = choices[Math.floor(Math.random() * 3)];
  // console.log(choice);
  return choice;
}
  // for (let i =1; i <= playround; i++) {


buttonchoice.forEach((button) => {
  button.addEventlistener(('click',  () => {
    const playerchoice=button.innerText 
    const computerchoice=computerplay()
    playround(playerchoice,computerchoice)
}))});


// func checkwinner(playerchoice, compchoice) {
//   if (playerchoice === compchoice) {
//     return "tie";
//   } else if (
//     (playerchoice === "rock" && compchoice === "scissors") ||
//     (playerchoice === "paper" && compchoice === "rock") ||
//     (playerchoice === "scissors" && compchoice === "paper")
//   ) {
//     return "playerwin";
//   } else {
//     return "computerwin";
//   }
// }