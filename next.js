let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
const options = ["rock","peper","scissors"];
const randidx = Math.floor(Math.random() * 3);
return options[randidx];
   
};
const drawGame = () => {
   console.log("game was draw");
   msg.innerText ="Game Was Draw";
   msg.style.backgroundColor ="black";
};
const shoWinner = (userWin,userchoice,computerchoice) => {
   if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
      msg.innerText ="You Win";
      msg.innerText =`You Win.${userchoice} beats  ${computerchoice}`;
      msg.style.backgroundColor ="green";
   } else {
      compscore++;
      compscorepara.innerText = compscore;
      msg.innerText ="You Lose";
       msg.innerText =`You lost.${computerchoice} beats yours ${userchoice}`;
      msg.style.backgroundColor ="red";
   };
};

const palayGame = (userchoice) => {
   console.log("user choice = ", userchoice);
//genrat cmp chi
const computerchoice = gencompchoice();
console.log("comp choice = ", computerchoice);
if(userchoice===computerchoice){
   drawGame();
} else {
   let userWin = true;
   if(userchoice ==="rock") {
      //scissor,pepar 
      userWin = computerchoice === "peper" ? false : true;

   }else if(userchoice === "peper"){
      //rock,scissor
      userWin = computerchoice === "scissors" ? false : true;
   }else {
      //rock ,pepar 
     userWin =  computerchoice === "rock" ? false: true;
   }
   shoWinner(userWin,userchoice,computerchoice);
} 

};

choices.forEach((choice) => {
  
   choice.addEventListener("click", () => {
         const userchoice = choice.getAttribute("id") 
    
      palayGame(userchoice);
   });
});
