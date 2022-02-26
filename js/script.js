// Assignment 02

// APPLICATION 1
//  Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

// var yearsStudy = prompt('How many years have you been studying?');
// var courses = prompt('How many courses have you completed?');
// if (yearsStudy < courses) {
//     document.write('You have completed ' + courses + 'courses');
// }  else if (yearsStudy > courses) {
//     document.write('You have studied for ' + years + 'years.');
// }
// else if (yearsStudy = courses) {
//     document.write('The number of years you studied are the same as the number of courses you have completed!');
// }

// APPLICATION 2
// The Word Translator
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example): Hello World translated in French is: Bonjour le monde

// let langs= alert('Language code search application. Choose from: Spanish code: es; German code: de; English code: en; French code: fr.');

// let lang = prompt("Enter the language code you are looking for");
// switch (lang) {
// case "es":
// document.write("Hola Mundo.");
// break;
// case "de":
// document.write("Hallo Welt.");
// break;
// case "en":
// document.write("Hello World.");
// break;
// case "fr":
// document.write("Bonjour le monde.");
// break;
// default:
// document.write("Sorry that code isn't listed here.");
// }

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

// var coinFlip = Math.round(Math.random());
// var choice = prompt("Select Heads or Tails");

// //CHOICE IS TRUE OR FALSE FOR BOTH HEADS OR TAILS

// if (coinFlip == 1) {
//     var flipResult = "heads";
// } else {
//     var flipResult = "tails";
// }

// // USE CONDITIONAL TO CHECK RESULTS OF HEADS OR TAILS - NEW VARIABLE = CHOICE
// if (flipResult == choice) {
//     if (flipResult == "heads") {
//         alert("The flip was heads and you chose heads...you win!");
//     } else {
//         alert("The flip was tails and you chose tails...you win!");
//     }
// } else {
//     if (flipResult == "heads") {
//         alert("The flip was heads and you chose tails...you lose!");
//     } else {
//         alert("The flip was tails and you chose heads...you lose!");
//     }
// }


/* 
The “Hitchhiker’s Guide to the Galaxy” Game
// Usage: Use a combination of simple conditional, nested if/else if, and switch statements
// In this classic “Hitchhiker’s Guide to the Galaxy” game, you will build an application that begins the user on a journey where the path they take can determine the outcome of the player. To complete the game follow the steps outlined below:
// 1. Prompt the user and ask them if they are ready to play the game. If they say “yes”, continue. If they say “no” or anything other than “no”, thank them and ask them to play again sometime.
2. Alert the user within the following: You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.
3. Then prompt the user with the following: Which direction would you like to head (please enter forward, left, or right).
4. Using a switch statement, evaluate the direction that the user selected.
left: alert, Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown! forward: alert, You walk 100 yards and safely make your way out of the cave. right: alert, You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!
5. If the user selects anything other than forward, left, or right alert the user The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing
the correct option.
6. The game is now over. Ask the user to rate the game between 1 and 10. If the user enters a number not between 1 and 10, thank the user for playing and end the game, If the user enters a number between 6 and 10, thank the user and ask them to play again. If the user enters a number between 1 and 5, thank the user and tell them that you are working hard to improve the game.
*/



var x = prompt("Are you ready to play the game?");
  if (x ==='yes') {      
    alert("You said yes, so let's go!");  
  } else if (x !== "yes") {
    alert("You canceled. Come back another time.");
}

alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");

//Using a switch statement, evaluate the direction that the user selected.
var directn= prompt("Which direction would you like to head (please enter forward, left, or right).");
switch (directn) {
    case "forward":
        document.write("You walk 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        document.write("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
        break;
    case "right":
        document.write("YYou found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!.");
        break;
    default: 
        document.write("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.")
    }
    //THIS IS NOT WORKING RIGHT IF RATING CODE IS ON THE SWITCHES DONT PRINT TO THE BROWSER

    // alert ("The game is over.")
    var rating = Number( prompt("Please rate this game from 1 - 10."));
    while(rating < 1 || rating > 10) {
    rating = Number( prompt("Please enter a number from 1 - 10."));
    }

    if (rating >= 6)
    {
        console.log("Thank you! Play again now, or come back soon!");
    }
    else
    {
        console.log("Sorry you weren't happy with the game, I'll keep working on it.");
    }


