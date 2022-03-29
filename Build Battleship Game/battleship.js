let randomL = Math.floor(Math.random() * 5); // generate random start location from 0-4
let location1 = randomL,
  location2 = location1 + 1,
  location3 = location2 + 1; // holds location of the battleship
let guess; // hold the usre's current guess
let guesses = 0; // hold the number of guesses
let hits = 0; // hold the number of hits
let isSunk = false; // keep track of whether the ship is sunk ot not

// LOOP while the ship is not sunk
while (isSunk == false) {
  // GET  the user's guess
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  // COMPARE the user's input to valid  input values
  if (guess < 0 || guess > 6) {
    // IF the user's guess is invalid, - TELL the user to enter valid number
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1; // - ADD one to guesses
    //  IF the user's guess matches a location
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1; //  ADD one to hits
      alert("HIT!");
      //  IF number of hits is 3
      if (hits == 3) {
        isSunk = true; // SET isSunk to true
        alert("You sank my battleship"); //  TELL user "You sank my battleship!"
      }
    } else {
      alert("MISS");
    }
  }
}
// TELL user stats
let stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
