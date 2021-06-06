// 1. Make a functionality to choose an action

//variables
//1. Declare it.
//2. Put values into it.
//3. Simply use it.
// Properties:
// 1.It is NOT statically typed.
// 2. You cannot have 2 variables with the same name

// Data types: string, int, boolean

//Flow: I have a variable called player1, I will now make 3 FUNCTIONS, one will set player1 to 'rock', one will set it to 'paper' and one will set it to 'scissor'
let player1; // 'rock', 'paper', 'scissor'
let player2;

//functions:
// 1. You tell the function what it needs to do.
// 2. It does NOT do it immediately.
// 3. At a later point of time, you CALL the function, i.e. you tell it to do the job

const setPlayer1 = (state)=>{
    player1 = state
}

const choosePlayer2Randomly = ()=>{
    let states = ['rock','paper','scissors'];
    let chooseIndex = Math.floor(Math.random()*3);
    player2 = states[chooseIndex];
}

const processRound = (player1Choice)=>{
    setPlayer1(player1Choice);
    choosePlayer2Randomly();
    console.log(player1+" "+player2);
    selectWinner();
}

const selectWinner = ()=>{
    if((player1=='rock'&&player2=='paper') || (player1=='scissors'&&player2=='rock') || (player1=='paper'&&player2=='scissors')){
        console.log('player2 wins');
    }
    else if(player1==player2){
        console.log('its a tie');
    }
    else{
        console.log('player1 wins');
    }
}

document.getElementById("btn-rock").addEventListener('click', event => {processRound('rock')});
document.querySelector("#btn-paper").addEventListener('click', event =>{processRound('paper')});
document.querySelector("#btn-scissors").addEventListener('click', event =>{processRound('scissors')});

// Scope