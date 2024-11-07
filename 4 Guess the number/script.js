

let randomNumber = parseInt(Math.random() *10 + 1); 
console.log(randomNumber);


const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesSlot = document.querySelector(".guesses");
const reamaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement("p");


let prevGuess = [];
let numGuess = 0;
let playGame = true;


if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
         console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess) || guess <= 0 || guess > 10) {
        alert("please enter a valid number");
    }else{
        prevGuess.push(guess);
        // console.log(prevGuess);
        if(numGuess === 3){
            displayGuess(guess);
            displayMessage(`Game Over . Random Number Was ${randomNumber}`);
            // endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage('you guess right value');
        endGame();        
    }else if(guess < randomNumber){
        displayMessage('Number is TOO Low');
    }else if(guess > randomNumber){
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guesSlot.innerHTML += `${guess} ,`;
    numGuess++;
    reamaining.innerHTML = `${3-numGuess}`;
    if (numGuess === 3) {
        endGame();
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}<h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton =  document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
    randomNumber =  parseInt(Math.random() *10 + 1);
    prevGuess = [];
    numGuess = 0;
    guesSlot.innerHTML = '';
    reamaining.innerHTML =  `${3-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true; 
    })
}