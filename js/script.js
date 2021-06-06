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
let gameActive = false;
let timeoutVar;

//functions:
// 1. You tell the function what it needs to do.
// 2. It does NOT do it immediately.
// 3. At a later point of time, you CALL the function, i.e. you tell it to do the job

const setPlayer1 = (state)=>{
    player1 = state;
}

// arrays:
// a list.
// Instead of makign 100 variables, it will let us store a list of 100 values in 1 variable.
// student1= 'abc', student2 = 'xyz', ... can be replaced by
// students = ['abc', 'def', 'xyz']
// 0 : 'abc'
// 1 : 'def'
// 2 : 'xyz'
// students[1] will access the element with index = 1, hence in this case students[1] is 'def'
// arrays can hold different kinds of data.
// [1, 2, 3, 4, 5, 6, 7] is valid in all languages
// [1, 'def', true] is valid in javascript but not all languages.


// I was trying to randomly get a number which is either 0, 1, or 2. If I get 0, it means rock, if I get 1, it means paper, if I get 2, it means scissor.
const choosePlayer2Randomly = ()=>{
    let states = ['rock','paper','scissors'];
    let chooseIndex = Math.floor(Math.random()*3);
    player2 = states[chooseIndex];
}
// chooseIndex = 0, player2 = states[0] = 'rock'
// chooseIndex = 1, player2 = states[1] = 'paper'
// chooseIndex = 2, player2 = states[2] = 'scissor'

// generating a random number
// Math.random() <= 0-1 = x, not inclusive of 1, but inclusive of 0.
// 0,1,2
// x*3 = 0.something, 1.something, 2.something
// Math.floor(0.something) = 0
// Math.floor(1.something) = 1
// Math.floor(2.something) = 2

const choosePlayer1Randomly = ()=>{
    let states = ['rock','paper','scissors'];
    let chooseIndex = Math.floor(Math.random()*3);
    player1 = states[chooseIndex];
}

const processRound = (player1Choice)=>{
    if(!gameActive) return;
    if(player1Choice=='timeout')choosePlayer1Randomly();
    else setPlayer1(player1Choice);
    choosePlayer2Randomly();
    console.log(player1+" "+player2);
    selectWinner();
}

const selectWinner = ()=>{
    let result =`Player 1 chose ${player1}, Player 2 chose ${player2}. Hence, `;
    if((player1=='rock'&&player2=='paper') || (player1=='scissors'&&player2=='rock') || (player1=='paper'&&player2=='scissors')){
        result += 'Player2 wins';
    }
    else if(player1==player2){
        result += 'Its a tie';
    }
    else{
        result += 'Player1 wins';
    }
    gameActive= false;
    document.querySelector("#result").textContent = result;
    document.getElementById('btn-start').setAttribute('style', 'display : block;')
    clearTimeout(timeoutVar);

}

const startGame = ()=>{
    gameActive = true;
    timeoutVar = setTimeout(()=>{
        processRound('timeout');
    }, 5000)
    document.querySelector("#result").textContent = '';
    document.getElementById('btn-start').setAttribute('style', 'display : none !important;')
}

document.getElementById("btn-rock").addEventListener('click', (event) => {processRound('rock')});
document.querySelector("#btn-paper").addEventListener('click', event =>{processRound('paper')});
document.querySelector("#btn-scissors").addEventListener('click', event =>{processRound('scissors')});
document.querySelector("#btn-start").addEventListener('click', event=>{startGame();});

// Scope

//Data types
//Variables
//Functions : return stuff.
//Arrays







const sumNumbers = (num1, num2)=>{
    let res = num1+num2;
    return res;
}

let result = sumNumbers(1,2);
console.log(result);

