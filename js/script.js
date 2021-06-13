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

//1. We want it to recognise the choice made by player1, and randomly choose a value for player2 and then give us the result.
//2. The above happens ONLY IF the start button has already been pressed.
const processRound = (player1Choice)=>{
    //implementing point 2.
    // true <=> false. 
    //!gameActive is true, this means that gameActive must be false, I return.
    if(!gameActive) return;
    //implements point 1
    if(player1Choice=='timeout')choosePlayer1Randomly();
    else setPlayer1(player1Choice);
    choosePlayer2Randomly();
    console.log(player1+" "+player2);
    selectWinner();
}

//boolean variables: true/false
//OR them : we can OR multiple boolean variables and there is 1 result. The result comes to be true if ANY 1 of the variables we ORed was true. The symbol in JavaScript for OR is ||
// let var1 = false, let var2 = false let var3. var1||var2||var3 will give me false.
//AND them : we can AND multiple boolean variables and there is 1 result. The result comes to be true if ALL of the variables we ANDed were true. The symbol in JavaScript for AND is &&
// let var1 = false, let var2 = false let var3 = true. var1&&var2&&var3 will give me false.
//NOT them : we can NOT a single variable and get the opposite answer. The JavaScript symbol for NOT is !
// let var1 = true, !var1 = false; let var2 = false, !var2 = true.


//1. We are choosing the Winner
//2. We are displaying that to the UI by populating the result paragraph
//3. We also want to show the start button again.
//4. We want to make the game 'inactive' again.
//5. Clear the 5 second timer that we had set
//6. IDEALLY : we would be updating the table of results but not implemented yet.
const selectWinner = ()=>{
    
    // kind of a helper for point 2
    let result =`Player 1 chose ${player1}, Player 2 chose ${player2}. Hence, `;
    
    // point 1, we need to choose the winner
    if((player1=='rock'&&player2=='paper') || (player1=='scissors'&&player2=='rock') || (player1=='paper'&&player2=='scissors')){
        result += 'Player2 wins';
    }
    else if(player1==player2){
        result += 'Its a tie';
    }
    else{
        result += 'Player1 wins';
    }

    //this is implementing point 4.
    gameActive= false;

    //this is implementing point 2
    document.querySelector("#result").textContent = result;

    //this is implementing point 3
    document.getElementById('btn-start').setAttribute('style', 'display : block;')

    //this is implementing point 5
    clearTimeout(timeoutVar);

}
// = means assigning
// == means checking for equality. == does not compare data types. 1 == "1". == will say this is true.
// === means checking for equality. === does compare data types. 1 === "1". === will say this is false.

//It implements the functionality of the start button.
//1. Enable the 'rock paper and scissor buttons'
//2. Hide the start button till the game is running. Hide the previous result if any.
//3. Start the 5 second timer for automatic choice.
const startGame = ()=>{
    
    //implement point 1
    gameActive = true;
    
    // implements point 3
    //1. What is the time that I want to execute the function after.
    //2. What code do I actually want to execute.
    //3. setTimeout is expecting to get 2 arguments : first argument should be a FUNCTION, which contains the code that is to be run. And second argument should be the time after which it is to be run.
    timeoutVar = setTimeout(()=>{processRound('timeout');} , 5000) //amount of milliseconds.

    //implements point 2
    document.querySelector("#result").textContent = '';
    document.getElementById('btn-start').setAttribute('style', 'display : none !important;')
}

document.getElementById("btn-rock").addEventListener('click', (event) => {processRound('rock')});
document.querySelector("#btn-paper").addEventListener('click', event =>{processRound('paper')});
document.querySelector("#btn-scissors").addEventListener('click', event =>{processRound('scissors')});
document.querySelector("#btn-start").addEventListener('click', (event)=>{startGame();});


//Data types
//Variables
//Functions : return stuff.
//Arrays

//Conditional Statements : if, else, if-else ladder , switch, ternary operator
//Scope
//Looping Statements
//DOM : document object model.


//if: if(condition){code} if the conidition is true it executes the code, else the code is ignored
//if-else: if(condition){code}else{some other code} : if the condition is true it executes the code, else instead of ignoring, it executes the 'some other code' inside our else statement.
//if-else ladder:
// if(condition){code}
// else if(some other condition){some other code}
// else if(some other condition){some other code}
// else {fallback code}

// 1. An else/else-if cannot exist without an if
// 2. if can act as a standalone(without else or else if)
// 3. Encountering an 'else' terminates the conditional statement
// 4. In an if-else statement or an if-else ladder, else statement is always the last to be there.
// 5. In an if else ladder, the order of statements will always be if-elseif-else.
// 6. In nested ifs, and else would always correspond to the innermost if


// I want to check 1. If var1 has a valid entry. 2.If var1 is even, I want to print 'hi' and if var1 is odd, I want to print 'bye'. If var1 is not a valid entry, I want to print 'please enter a valid entry'
let var1=5; //undefined
if(var1){
    if(var1%2==0){
        console.log('hi');
    }
    else{
        console.log('bye');
    }
}
else{
    console.log('Please enter a valid entry');
}
//Integer operations: + adds, - subtracts, * multiplies, / divides, % modulus: remainder
// 5%2 = 1

// I want to check 1. If var1 has a valid entry. 2.If var1 is even, I want to print 'hi' and if var1 is odd, I want to print 'bye'. If var1 is not a valid entry, I want to print 'please enter a valid entry'
// Try to do this by using if else ladder in place of nested ifs. !var1 would be true if var1 is undefined.

//switch statements
let var2 = 6;
// If I have var2 = 1, I print 'one', else if var2 = 2, I print 'two', similarly up to 9. else if it is not 1-9, print 'invalid'
switch(1+1){
    case 1: console.log('one');
            break;
    case 2: console.log('two');
            break;
    case 3: console.log('three');
            break;
    case 4: console.log('four');
            break;
    case 5: console.log('five');
            break;
    case 6: console.log('six');
            break;
    case 7: console.log('seven');
            break;
    case 8: console.log('eight');
            break;
    case 9: console.log('nine');
            break;
    default: console.log('invalid');
            break;
}
// advantages : elegance and simplicity of writing as well as reading the code
// disadvantage/limitation: we can compare only 1 variable or expression in the swtich


//ternary operator
// (condition)?{code}:{some other code}
// If the condition is true, the code between ? and : is executed, else the code after : is executed
// (condition)?{code}:{(condition1)?{code1}:{code2}}


const sumNumbers = (num1, num2)=>{
    let res = num1+num2;
    return res;
}

let result = sumNumbers(1,2);



// Problem : Make a game
// SubProblem 1. Start button should work
// SubProblem 2. The 3 buttons for choices should work
// SubProblem 3. Handle the Timeout
// SubProblem 4. Connect subproblem 1 and 2.



// Scope can be of 2 types:
// global scope
// local scope


// Looping Statements
// Add all numbers from 1-10000 and print them out.
// 1. He tells me what is the code that I want to execute multiple times.
// 2. When do I want to stop.

// for loop, while loop and do-while loop

//this code adds the first 10 numbers
let i =11;
let sum = 0;
// <= >= 
// while(i<=10){
//     // new value of sum = old value of sum + current value of i.
//     sum = sum + i;
//     i++;
// }

// for(initial declaration ; condition to run ; increment/decrement statement)
// let i;
// for(i =0 ; i<=10 ; i++){
//     sum+=i;
// }


// do{
//     sum+=i;
//     i++;
// }while(i<=10)
// console.log(i);
// console.log(sum);
// in while : => while starts -> condition is checked -> code is run -> condition is checked -> .....
// in do while : => do while start -> code runs -> condition is checked -> code runs -> ...


// for loop start --> a variable called i is initialised to 0 -> it checks the condition -> it executes the code -> the 3rd part of the for statement is executed --> checks for condition again

// i       |     sum 
// 0       |     0
// 1       |     1
// 2       |     3
// 3       |     6
// 4       |    10
// 5       |    15
// 6
// 7
// 8
// 9
// 10
// 11

// loop with an array
let ar = [1,2,3,4,5,6,7,8];
for(let j = 0; j<ar.length; j++){
    console.log(ar[j]);
}

//i++ and ++i are basically 2 ways of writing i += 1.
// these are called the increment operators.
// similarly like ++, -- also exists which corresponds to i-=1