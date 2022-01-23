//Defining moves for computer 
const select = ['rock', 'paper', 'scissors']


//computer random selection from const select
document.getElementById('rock').onclick = player
document.getElementById('paper').onclick = player
document.getElementById('scissors').onclick = player

function player (){
    let playerSelection = this.id;
    console.log("Player: " + playerSelection)

let computerSelection = select[Math.floor(Math.random()*select.length)]

console.log("Computer: " + computerSelection);

console.log(playRound(computerSelection, playerSelection));
}


// }

//function that plays a round and returns a string for the winner based on match
function playRound (computerSelection, playerSelection){
    //prompt that allows player input
   

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
      return("Invalid Enrty")
  }
}



//5 round game that displays results to console 
// function game(){
//     console.log (playRound())
// }
// console.log (game())