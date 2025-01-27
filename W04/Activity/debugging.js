// let radius = 3;
// area = radius * radius * pi;
// console.log("Area1: ", area)
// radius = 4;
// area = radius * radius * pi;
// console.log("Area2: ", area)

const pi = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * pi
    return area
}

area = circleArea(3);
console.log("Area1:", area);
area = circleArea(5);
console.log("Area2:", area);