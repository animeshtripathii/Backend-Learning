/**
 * second.js module ko require kiya gaya hai, lekin yahan pe directly sum(5, 10) function call kiya gaya hai.
 * Agar second.js file me sum function ko export nahi kiya gaya hai (module.exports ke through),
 * toh yahan pe sum function undefined hoga aur error aayega.
 * Require sirf module ko load karta hai, uske andar ke functions ya variables ko use karne ke liye
 * unhe export/import karna padta hai.
 * 
 * Example: Agar second.js me aisa likha ho:
 * module.exports.sum = function(a, b) { return a + b; }
 * 
 * Toh yahan pe use karne ke liye:
 * const { sum } = require('./second.js');
 * sum(5, 10);
 * 
 * Warna, sum function yahan available nahi hoga.
 */


// index.js

// Import the function from the second file
const {sum,multiply} = require('./second.js'); 

console.log("Hello I am the first JavaScript file!");

// Call the function and print the result
const result = sum(10, 20);
const mult = multiply(10, 20);
console.log("The multiplication is:", mult);
console.log("The sum is:", result);

/**
 * ES Modules (ECMAScript Modules) JavaScript ka modern module system hai.
 * Isme `import` aur `export` keywords ka use hota hai, jabki CommonJS me `require` aur `module.exports` ka use hota hai.
 * 
 * Agar aapko same code ES Module syntax me likhna hai, toh aapko file extension `.mjs` rakhni hogi ya `package.json` me `"type": "module"` set karna hoga.
 * 
 * Example (second.mjs):
 * export function sum(a, b) { return a + b; }
 * export function multiply(a, b) { return a * b; }
 * 
 * Example (first.mjs):
 * import { sum, multiply } from './second.mjs';
 * 
 * const result = sum(10, 20);
 * const mult = multiply(10, 20);
 * console.log("The multiplication is:", mult);
 * console.log("The sum is:", result);
 */