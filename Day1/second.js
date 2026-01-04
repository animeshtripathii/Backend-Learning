// second.js

console.log("Hello I am the second JavaScript file!");

function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

// Export the function so other files can use it
module.exports = {sum, multiply};