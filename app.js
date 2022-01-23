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
        document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
        document.getElementById("records").textContent = "Draw!" 
    }
    
    else if (computerSelection === "rock" && playerSelection === "scissors"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You Lose!"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You WIN!" 
    }

    else if (computerSelection === "paper" && playerSelection === "rock"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You Lose!"
    }
    
    else if (computerSelection === "rock" && playerSelection === "paper"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You WIN!"   
    }
else if (computerSelection === "scissors" && playerSelection === "paper"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You Lose!"
}
else if ( computerSelection === "paper" && playerSelection === "scissors"){
    document.getElementById("result").textContent = `Computer Choice: ${computerSelection}`
    document.getElementById("records").textContent = "You WIN!"
}
  else {
      return("Invalid Enrty")
      
  }
}



//5 round game that displays results to console 
// function game(){
//     console.log (playRound())
// }
// console.log (game())