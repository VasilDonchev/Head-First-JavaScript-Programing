let hasBubblegum = [false, false, false, true];
let products = ['Choo choo chocolate', 'Icy Mint', 'Cake Batter', ' Bubblegum'];

let i = 0;
while (i < hasBubblegum.length) {
    
    if (hasBubblegum[i]){
        console.log(products[i] + " contains bubble gum");
    }
    i = i+ 1;
}
 