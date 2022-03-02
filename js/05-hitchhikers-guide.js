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



var x = prompt("Are you ready to play the game, yes or no?");
  if (x ==='yes') {      
    alert("You said yes, so let's go!");  
//   } else {
//     alert("You canceled. Come back another time.");
// }

alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");

//Using a switch statement, evaluate the direction that the user selected.
    var directn= prompt("Which direction would you like to head (please enter forward, left, or right)."); {
    switch (directn) {
        case "forward":
            alert("You walk 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
            break;
        default: 
           alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.")
        }
    }

    let rating = prompt("The game is over. Please rate this game from 1 - 10, with 10 being the highest rating.")
    // var rating = Number( prompt("Enter a number from 1 - 10."));
    // while(rating < 1 || rating > 10) {
    // rating = Number( prompt("Please enter a number from 1 - 10."));
    // }

        if (rating >= 6) {
            document.write("Thank you for playing! Play again now, or come back soon!");
        }
        else if (rating <= 5){
            document.write("Sorry you weren't happy with the game, I'll keep working on it.");
        } else {
            prompt("You canceled. Come back another time.");
        }
    }
