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

const setPlayer1 = (data, data1, data2, data3)=>{
    player1 = data
}

setPlayer1('paper');


//have a function which only knows that it needs to set player1 to something. WHAT it needs to set player1 to is our choice.

// 1. player1 is declared
// 2. player2 is declared
// 3. JS RECOGNISES that a function called setPlayer1ToRock exists.
// 4. Tell JS to execute the code we have inside the function.

// Scope