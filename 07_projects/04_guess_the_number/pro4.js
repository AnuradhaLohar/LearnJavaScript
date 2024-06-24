const randomnum =parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessedvalues = document.querySelector(".guesses");
const remeningguess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const restartGame = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess=[];
let guessnum=1;

let playGame = true;


if(playGame){
   submit.addEventListener('click',function(event){
        event.preventDefault();
       const guess = parseInt(userInput.value);
    //    console.log(guess);
       validateGuess(guess);
   });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert(`please enter the valid number`);;
    }else if(guess < 1){
        alert(`please enter a number more than 1`);
    }else if(guess > 100){
        alert(`please enter a number less than 100`);
    }else{
        prevGuess.push(guess);
        if(guessnum === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random no was ${randomnum}.`);
            endGame();
        }else{
            displayGuess(guess);
            checkguess(guess);
        }

    }
    
}
function checkguess(guess) {
    if (guess === randomnum) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomnum) {
      displayMessage(`Number is TOOO low`);
    } else if (guess > randomnum) {
      displayMessage(`Number is TOOO High`);
    }
  }


function displayGuess(guess) {
    userInput.value = '';
    guessedvalues.innerHTML += `${guess}, `;
    guessnum++;
    remeningguess.innerHTML = `${11-guessnum} `;

}

function displayMessage(meassge) {
    lowOrHi.innerHTML = `<h2>${meassge}</h2>`;
}

function endGame() {
    userInput.values = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    restartGame.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newbutton = document.querySelector('#newGame');
    newbutton.addEventListener('click',function(event){
    randomnum =parseInt(Math.random()* 100 +1);
    prevGuess = [];
    guessnum = 1;
    guessedvalues.innerHTML = '';
    remening.innerHTML = `${11 - guessnum} `;
    userInput.removeAttribute('disabled');
    restartGame.removeChild(p);
     playGame = true;
    });
    
}


// const randomnum = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessedvalues = document.querySelector(".guesses");
// const remeningguess = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");
// const restartGame = document.querySelector(".resultParas");

// const p = document.createElement('p');

// let prevGuess = [];
// let guessnum = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click', function (event) {
//         event.preventDefault();
//         const guess = parseInt(userinput.value);
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert(`Please enter a valid number`);
//     } else if (guess < 1) {
//         alert(`Please enter a number more than 1`);
//     } else if (guess > 100) {
//         alert(`Please enter a number less than 100`);
//     } else {
//         prevGuess.push(guess);
//         if (guessnum === 11) {
//             displayGuess(guess);
//             displayMessage(`Game over. The random number was ${randomnum}.`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     if (guess === randomnum) {
//         displayMessage(`You guessed it right!`);
//         endGame();
//     } else if (guess < randomnum) {
//         displayMessage(`Number is too low`);
//     } else if (guess > randomnum) {
//         displayMessage(`Number is too high`);
//     }
// }

// function displayGuess(guess) {
//     userinput.value = '';
//     guessedvalues.innerHTML += `${guess}, `;
//     guessnum++;
//     remeningguess.textContent = `${11 - guessnum} `;
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//     userinput.value = '';
//     userinput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//     restartGame.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame() {
//     const newbutton = document.querySelector('#newGame');
//     newbutton.addEventListener('click', function (event) {
//         randomnum = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         guessnum = 1;
//         guessedvalues.textContent = '';
//         remeningguess.textContent = `${11 - guessnum} `;
//         userinput.removeAttribute('disabled');
//         restartGame.removeChild(p);
//         playGame = true;
//         lowOrHi.innerHTML = '';
//     });
// }
