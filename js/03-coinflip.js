// APPLICATION 3
//The “Coin Flip” Game - Use nested conditional statements

/*  
In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number: let randomNum = Math.round(Math.random());
2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
4. If the result is heads and the user selects heads, display the following message within an alert: The flip was heads and you chose heads...you win!
5. If the result is heads and the user selects heads, display the following message within an alert: The flip was heads and you chose heads...you win!
6. If the result is tails and the user selects heads, display the following message within an alert: The flip was tails but you chose heads...you lose!
7. If the result is tails and the user selects tails, display the following message within an alert: The flip was tails and you chose tails...you win!
*/

// CREATE A VARIABLE COINFLIP BY USING MATH METHOD

var coinFlip = Math.round(Math.random());
var choice = prompt("Select Heads or Tails");

//CHOICE IS TRUE OR FALSE FOR BOTH HEADS OR TAILS

if (coinFlip == 1) {
    var flipResult = "heads";
} else {
    var flipResult = "tails";
}

// // USE CONDITIONAL TO CHECK RESULTS OF HEADS OR TAILS - NEW VARIABLE = CHOICE
if (flipResult == choice) {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose tails...you lose!");
    } else {
        alert("The flip was tails and you chose heads...you lose!");
    }
}
