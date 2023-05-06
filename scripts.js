/*
!A-take user choose and store it
*player input must be specific ("rock, paper, scissor, r, p, s, R, P, S")
^Include input validation
^Store valid character
*player able to escape the prompt

!B-gave AI a choice and store it
*AI choice depends on player input
^For the first match, AI will play a paper with a high chance to win 
^For the second match, if AI lost, switch to the thing that beats the thing the player just played. 
^If AI wins, don't keep playing the same thing, but instead, switch to the thing that would beat the thing that was just played.
^If the game ties, play paper.
!B2 Remember player choice from the last match.
* log Game results 
! D Reapet 
* A=>B2=>B=>C=>D
 
 let isRock;
 let isPaper;
 let isScissor;
  function input_convert (val) {
    for(let i=0; i<validCharacters.length;i++){
     if( isValid&&val ===validCharacters[i]){
      
     }
    }     //convert input value to lowercase for case-insensitive comparison
        if(val.toLowerCase() === "r" || val.toLowerCase() === "rock"){
          console.log("rock");
          isRock=true;
         // return isRock;
           
       }
       else if(val.toLowerCase() === "p" || val.toLowerCase() === "paper"){
        console.log("paper");
        isPaper=true;
       // return isPaper;
        
        

       }
       else if(val.toLowerCase() === "s" || val.toLowerCase() === "scissor"){
        console.log("scissor");
        isScissor=true;
        //return isScissor;
      } 
    
    } 
  
input_convert(playerChoose);
*/
alert ("Welcome to Rock paper scissor game ");
let validCharacters = ["rock","paper","scissor"];
let isValid =false;

function validate (input){
  for(let i = 0; i<validCharacters.length; i++){

  if (input.toLowerCase() === validCharacters[i]) {
    // todo need fix
        return isValid =true;    
      }
    } 
    
   
}


let trackArray = [];
function getAIChoice(round) {
  let aiChoice;
  if (round === 1) {
    aiChoice = "paper";
  } else {
    // For all other rounds, choose an option that beats the player's previous choice
    const previousChoice = trackArray[round - 2];
  //  console.log(trackArray);
   // console.log(previousChoice);
   
    if (previousChoice === "rock") {
      aiChoice = "paper";
    } else if (previousChoice === "paper") {
      aiChoice = "scissor";
    } else if (previousChoice === "scissor") {
      aiChoice = "rock";
    }
  }
  return aiChoice;
}

function playRound() {
  for (let i = 1; i <= 5; i++) {
    const playerChoice = prompt(`       Round ${i}
     Please Enter your choice (rock, paper,scissor)`);
   if(validate(playerChoice)){
    trackArray.push(playerChoice);
    const aiChoice = getAIChoice(i);
    alert(`AI choose ${aiChoice}.`);
    gameLogic(playerChoice, aiChoice);
  }
  else{
    alert("Please enter a valid choice: rock, paper, or scissor")
    i--;
  }
}
}

let playerScore = 0;
let aiScore = 0;
let tie=0;
function gameLogic(player, ai) {
  if (player === ai) {
    console.log("It's a tie!");
    tie++;
  } else if ((player === "rock" && ai === "scissor") || (player === "scissor" && ai === "paper") ||
      (player === "paper" && ai === "rock")
  ) {
    playerScore++
    /*
    if (player === "rock") {
      console.log("Your rock crushed the computer's scissors, but it put up a noble fight!");
    } else if (player === "scissor") {
      console.log("Your scissors sliced through the computer's paper like a hot knife through butter!");
    } else {
      console.log("Your expert use of paper wrapped up the computer's rock, but it gave you a challenge!");
    }*/
   
   console.log(`      %cYou wins!

    %c${player[0].toUpperCase()}${player.slice(1)}%c Beats %c${ai[0].toUpperCase()}${ai.slice(1)}%c.
    `,'color: #00FF00; font-size: 13px', 'color: #00FF00', "", 'color: #FF0000', "");
   
  } else 
 {
  console.log(`    %cComputer wins!

   %c${ai[0].toUpperCase()}${ai.slice(1)}%c Beats %c${player[0].toUpperCase()}${player.slice(1)}%c.
   `,'color: #00FF00; font-size: 13px', 'color: #00FF00', "", 'color: #FF0000', "");
   aiScore++;
}
 // console.log(`Player: ${player}, AI: ${ai}`);
}
function gameResult() {
  console.log(`  Game Result!
  Player score: %c${playerScore}%c
  AI score: %c${aiScore}%c
  Tie: %c${tie}%c`, 'color: #FF0000', '', 'color: #FF0000', '', 'color: #FF0000', '');
}
playRound();
gameResult();
/*
Your flimsy little paper was no match for the computer mighty scissor  for rock 
Your feeble attempt at scissor couldn't cut it against the computer rock-solid strategy!"
The computer paper was too slick for your rock, sliding right past your grasp.

The computer paper was no match for your strategic use of rock, but it made you sweat a little bit!
Your rock crushed the computer scissor, but it put up a noble fight!
Your expert use of paper wrapped up the computer rock, but it gave you a challenge!
*/
