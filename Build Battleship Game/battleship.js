
let location1 = 3, location2 = 4, location3 = 5; // holds location of the battleship
let guess;  // hold the usre's current guess
let guesses = 0;    // hold the number of guesses
let hits = 0;   // hold the number of hits
let isSunk = false; // keep track of whether the ship is sunk ot not 

// LOOP while the ship is  not sunk
while (isSunk == false) {
    // GET  the user's guess
    guess = prompt('Ready, aim, fire! (enter a number from 0-6):');
    // COMPARE the user's input to valid  input values
    if (guess < 0 || guess > 6) {
        // IF the user's guess iis invalid,
        //      - TELL the user to enter valid number
        alert('Please enter a valid cell number!');
    } else {        //  ELSE
        guesses++   //      - ADD one to guesses
    }                //    IF the user's guess matches a location 
       if (guess == location1 || guess == location2 || guess == location3) {           
            hits++; //  ADD one to hits
        //          IF number of hits is 3
        //              SET isSunk to true
        //              TELL user "You sank my battleship!"
        //          END IF
        //      END IF
     
    }    //  END ELSE
}   // END LOOP

// TELL user stats
