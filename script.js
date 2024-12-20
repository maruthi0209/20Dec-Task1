// Question 1
/**
 * Write a function called processNumber that accepts a number and a callback function. 
 * The processNumber function should double the number and pass the result to the callback function.
 */
function processNumber(num, callback) {
    num *= 2;
    callback(num);
}
// named function
let myCallback1 = function myCallback(num) {
    console.log(num);
}
processNumber(10, myCallback1);
// anonymous function
processNumber(20, function (num){console.log(num)});
// arrow function
processNumber(10, num => console.log(num));


// Question 2
/**
 * Write a function called forEachElement that takes an array and a callback function. 
 * The function should iterate over the array and execute the callback function for each element, 
 * passing the element as an argument.
 */
function forEachElement(myArray, callback) {
    for (let i=0; i < myArray.length; i++) {
        callback(i);
    }
}
// named function
let myCallback2 = function callback(arrElement) {
    console.log(arrElement);
}
forEachElement([10, 20, 30], myCallback2);
// anonymous function
forEachElement([10, 20, 30], function (arrElement) {console.log(arrElement)});
// arow function
forEachElement([10, 20, 30], arrElement => console.log(arrElement));


// Question 3
/**
 * Write a function sayHello that accepts a name and a callback function. 
 * Use setTimeout to wait for 1 second and then call the callback function, 
 * passing the message "Hello, [name]!" (replace [name] with the provided name).
 */
function sayHello(name, callback) {
    setTimeout(callback(`Hello, ${name}!`), 1000);
}
// named function
let myCallback3 = function callback(myString) {
    console.log(myString);
}
sayHello("Maruthi", myCallback3);
// anonymous function
sayHello("Maruthi", function (myString) {console.log(myString)});
// arrow function
sayHello("Maruthi", myString => console.log(myString));


// Question 4
/**
 * Write a function checkEven that accepts a number and two callback functions. 
 * If the number is even, call the first callback with the number. 
 * If the number is odd, call the second callback with the number.
 */
function checkEven(number, callback1, callback2) {
    (number % 2 == 0)? callback1(number) : callback2(number);
}
// named function
let myCallback4 = function callback1(number) {
    console.log("callback1", number);
}
let myCallback5 = function callback2(number) {
    console.log("callback2", number);
}
checkEven(17, myCallback4, myCallback5);
// anonymous function
checkEven(14, function (number) {console.log("callback1", number)}, function (number) {console.log("callback2", number)});
// arrow function
checkEven(20, number => console.log("callback1", number), number => console.log("callback12", number));


// Question 5
/**
 * Write a function performTasks that accepts a number and two callback functions. 
 * First, add 5 to the number using the first callback, and then multiply the result by 2 using the second callback. 
 * Log the final result to the console.
 */
function performTasks(number, callback1, callback2) {
    number = callback1(number);
    number = callback2(number);
    console.log(number);
}
// named function
let myCallback6 = function callback1(number) {
    return number + 5;
}
let myCallback7 = function callback2(number) {
    return number * 2;
}
performTasks(25, myCallback6, myCallback7);
// anonymous function
performTasks(20, function (number) {return number + 5}, function (number) {return number * 2});
// arrow function 
performTasks(30, number => number + 5, number => number * 2);