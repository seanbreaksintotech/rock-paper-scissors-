//Defining moves for computer 
const select = ['rock', 'paper', 'scissors']


//computer random selection from const select
function computerPlay (){
return select[Math.floor(Math.random()*select.length)]
}
// function playerPlay (){
// let playerChoose = prompt ('Rock, Paper or Scissors?')
    

// }

//function that plays a round and returns a string for the winner based on match
function playRound (){
const playerSelection = "rock"
const computerSelection = computerPlay ();


//  playerSelection = playerSelection.toLowerCase
    if( computerSelection === playerSelection ){
    return('its a draw !') }
    else if (computerSelection === "rock" && playerSelection === "scissors")
    return('you lose, rock beats scissors!')
    
    else if (computerSelection === "scissors" && playerSelection === "rock")
        return('you win, rock beats scissors!')
    
    else if (computerSelection === "paper" && playerSelection === "rock")
        return('you lose, paper beats rock!')
    
    else if (computerSelection === "rock" && playerSelection === "paper")
        return('you win, paper beats rock!')     

else if (computerSelection === "scissors" && playerSelection === "paper")
    return('you lose, scissors beats paper!')

else if ( computerSelection === "paper" && playerSelection === "scissors")
    return('you win, scissors beats paper!') 

  else {
      return("error")
  }
}


//5 round game that displays results to console 
function game(){
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
}
console.log (game())