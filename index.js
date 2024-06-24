function add(x, y) {
  return x + y;
}
console.log(add(1, 80));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(60 - 40));

function multiply(c, d) {
  return c * d;
}
console.log(multiply(2 * 3.4));

function divide(f, g) {
  return f / g;
}
console.log(divide(5.0 / 2.5));

n =255;
function increment(n){
    n +=4;
    return n;
}
console.log(increment(5));

function increment(n){
    n += 1;
    return n;
}
console.log(increment(5));

function decrement(n){
    n -=1;
    return n;
}
console.log(decrement(8));

function makeInt(n){
    return parseInt(n, 10);
}
console.log(makeInt("25"))

function preserveDecimal(n){
    return parseFloat(n,);
}
console.log(preserveDecimal(80.33333));