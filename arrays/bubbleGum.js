let products = ['Choo choo chocolate', 'Icy Mint', 'Cake Batter', ' Bubblegum'];
let hasBubblegum = [false, false, false, true];


for (let i = 0; i < hasBubblegum.length; i = i+ 1) {
    
    if (hasBubblegum[i]){
        console.log(products[i] + " contains bubble gum");
    }
    
}
 