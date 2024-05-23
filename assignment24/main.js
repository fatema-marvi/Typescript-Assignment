"use strict";
//eqaulity and inequality test
console.log("Equality test for string:", 'apple' === 'apple'); //equality test
console.log("InEquality test for string:", "apple" != "orange"); //inequality test
//using lowercase
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello");
//numerical test
console.log("Equality test with numbers:", 26 === 26);
console.log("Equality test with numbers:", 26 != 33);
//greate than less than
console.log("Greater than test:", 10 > 5);
console.log("less than test:", 10 < 20);
// greater than or equal to
console.log("Greater than and equal to test:", 10 >= 10);
//less than equal to
console.log("Less than and equal to test:", 5 <= 10);
//using "and" n "or" operator
console.log("And operator test:", 5 === 5 && 10 > 5);
console.log("Or operator test:", 5 === 5 || false);
//test whether an item is an array nad test if not in array
let fruit = ['apple', 'banana', 'orange'];
console.log("test 'apple' in the array:", fruit.includes("apple"));
console.log("test 'mango' is not in array:", !fruit.includes("mango"));
