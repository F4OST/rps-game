/*
Red (!)
Blue (?)
Green (*)
Yellow (^)
Pink (&)
Purple (~)
Mustard (todo)
Grey (//)
!A-take user choose and store it
*player input Must be specific ("rock,paper,scissor,r,p,s,R,P,S"){
^include input validation 

^ store valid chachters

}
*player Able to Escape the prompt
!B-gave ai a choose and store it
*ai choose depand on player input{
^ for the first match Ai will play A paper high chance to win Beacuse must of player will try write rock word Because its easy ()
^  for Second match if Ai lost switch to the thing that beats the thing Player just played. If Ai win,
^ don't keep playing the same thing,but instead switch to the thing that would beat the thing that you just played
^if game tie play paper
* ideas more thin be algorthim{
    & track how often player choose each move and  switch to the thing that would beat his  pattern
}
!B2 remember player choose from last  match (or all his move)
todo find  a way to make ai remember player choose from last match
}
!C-gave the results 
^B2 maybe Be here 
* log the results 
! D Reapet 
* A=>B2=>B=>C=>D
 */
alert("hello");
let playerChoose = prompt("Welcome to Rock paper scissor game ");

//declare our valid Character
let validCharacters = ["rock","Rock","ROCK","r","R","paper","Paper","PAPER","p","P","scissors","Scissors","SCISSORS","s"];

let isValid;
validate(playerChoose); 
function validate (input){
  for(let i = 0; i<validCharacters.length; i++){

     if(input === validCharacters[i]) {
         isValid =true;    
      }
    } 
    if(isValid){
        console.log("lets play");
      }
     else{  
    console.log("enter valid char");
  }
   
}
/*
*func to know player input 
validCharacters.forEach((val) =>{
    
     if(val.charAt(validCharacters)==="r"){
       console.log( "rock")
     }else{
       console.log("error")
   
        } 
        
})

*/
 let isRock;
 let isPaper;
 let isScissor;
  function input_convert (val) {
    for(let i=0; i<validCharacters.length;i++){
     if( isValid&&val ===validCharacters[i]){
       // isRock=true,isPaper=true,isScissor=true;
     }
    }
        if(val.toLowerCase() === "r" || val.toLowerCase() === "rock"){
          console.log("rock");
          isRock=true;
          return isRock;
           
       }
       else if(val.toLowerCase() === "p" || val.toLowerCase() === "papier"){
        console.log("papier");
        isPaper=true;
        return isPaper;
        
        

       }
       else if(val.toLowerCase() === "s" || val.toLowerCase() === "scissor"){
        console.log("scissor");
        isScissor=true;
        return isPaper;
      } 
    
    } 
  
input_convert(playerChoose);
