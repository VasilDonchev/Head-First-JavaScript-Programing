let fido = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
}
fido.bark = function (){

    if (fido.weight > 20) {
       return bark = 'WOOF WOOF'
    } else {
      return  bark = 'woof woof'
    }
}

let speak = fido.name + " says " + fido.bark + " when he wants to " + fido.activity;
console.log(speak);
console.log(fido);