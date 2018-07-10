var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Chooses a random letter of the alphabet
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log("Computer chose the letter " + computerGuess); 

document.onkeyup = function(event) {
        var userGuess = event.key; 
        console.log("You typed " + userGuess);
        var check = computerChoices.includes(userGuess);
        console.log("User chose valid letter: " + check);

        //ensures that the user can only pick a letter
        if (check === false) {
            alert("Please pick a letter!");
        }

        else {

            guessesSoFar.push(" " + userGuess); 

            //Adds to wins and resets game if user guesses correctly
            if (userGuess == computerGuess) {
                wins++;
                guessesLeft = 9; 
                guessesSoFar.length = 0; 
                computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
                console.log("You won! Computer now chose the letter " + computerGuess); 
                alert("You won! " + userGuess + " was the correct answer");
            }

            //adds to losses and resets game if user exhausts all 9 guesses
            else if (guessesLeft == 0) {
                losses++;
                guessesLeft = 9;
                guessesSoFar.length = 0;
                computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
                console.log("You lost. Computer now chose the letter " + computerGuess); 
            }

            //If a user guesses incorrectly, subtract from remaining guesses
            else if (userGuess != computerGuess) {
                guessesLeft--; 
            }  

            var html = "<h1>The Psychic Game</h1>" 
            + "<p>Guess what letter I'm thinking of!</p>" 
            + "<p>Wins: " + wins + "</p>" 
            + "<p>Losses: " + losses + "</p>" 
            + "<p>Guesses Left: " + guessesLeft + "</p>" 
            + "<p>Your Guesses so far: " + guessesSoFar + "</p>";

            document.getElementById('game').innerHTML = html;

            }
    }   


