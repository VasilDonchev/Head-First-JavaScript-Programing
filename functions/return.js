
let radius = 5.2;
let theArea = calculatearea(radius);
console.log(`The area is ${theArea}`);

function calculatearea(r) {
    let area;
    if ( r <= 0) {
        return 0;
    } else {
        area = Math.PI * r *r;
        return area;
    }
}