[5/3 3:48 PM] Kasula, Naga Tejesh (Cognizant)
!= if two values are not equal and disregarding their types
!== if two values are not equal or if they are not the same types
[5/3 3:49 PM] Kasula, Naga Tejesh (Cognizant)
1 != 1 is false
1 !== 1 false
1 !=1 '1' is false
1 !== '1' true
[5/3 3:50 PM] Kasula, Naga Tejesh (Cognizant)
!= these operator don't include any type either it is string or object or anything
[5/3 4:33 PM] Kasula, Naga Tejesh (Cognizant)
console, alert, prompt
 
console.log() arg , it results out or print the statement in the argumnets
alert.('hi') it will pop up in the window and says its alert Hi
prompt.('enter a number') it will pop the msg to type  a number and it will print out the results
[5/3 4:48 PM] Kasula, Naga Tejesh (Cognizant)
concatenating the user input as a string and adding the number it will result out as a string , if we don't want it as a string we have to use the parseInt()
[5/6 1:40 PM] Kasula, Naga Tejesh (Cognizant)
hi
[5/7 4:20 PM] Kasula, Naga Tejesh (Cognizant)
push - it adds one or more elements at the end of the array
 
let array = [1,2]
array.push(3);
console.log(array)
[5/7 4:22 PM] Kasula, Naga Tejesh (Cognizant)
pop - it remove the last element of the array 
 
let array = [1,2,3]
let listofarray = array.pop()
console.log(listofarray)
console.log(array)
[5/7 4:28 PM] Kasula, Naga Tejesh (Cognizant)
shift - it removes the  first element of the array
 
let array = [1,2,3,4,5]
let listofarray = array.shift();
console.log(listofarray)
console.log(array)
[5/7 4:29 PM] Kasula, Naga Tejesh (Cognizant)
unshift - adding the 1st element in the array
 
let array = [1,2,3]
array.unshift(4);
console.log(array)
[5/8 8:51 AM] Kasula, Naga Tejesh (Cognizant)
concat - merging arrays
 
let cats1 = ['sweety', 'lilly']

let dogs = ['bobber', 'neo']

cats1.concat(dogs)

(4) ['sweety', 'lilly', 'bobber', 'neo'  
[5/8 8:53 AM] Kasula, Naga Tejesh (Cognizant)
includes will define the true or false in the array
 
let cats1 = ['sweety', 'lilly']

let dogs = ['bobber', 'neo']

cats1.includes('lilly') - true
[5/8 9:02 AM] Kasula, Naga Tejesh (Cognizant)
index of() method returns the first index at which a given element can be found in the array or -1 if it is not present
 
let beast = ['cat' ,'dog', 'ant']
beast.indexOf('cat')
 
return output 0
[5/8 9:08 AM] Kasula, Naga Tejesh (Cognizant)
indices are starting element of character that defines the number
 
let animal = "dog"
animal[1] - output o
[5/8 9:13 AM] Kasula, Naga Tejesh (Cognizant)
let cats1 = ['sweety', 'lilly']
cats1.reverse()

(2) ['lilly', 'sweety']
[5/8 9:24 AM] Kasula, Naga Tejesh (Cognizant)
slice it will starts where the indexof number would be given for ex:
 
let rely = ['red', 'violet', 'green', 'blue', 'purple'];

let favcolors = rely.slice(1,3)

favcolors

(2) ['violet', 'green']
[5/8 9:34 AM] Kasula, Naga Tejesh (Cognizant)
splice defines the start delete and adding items according to the start indecof
 
colors.splice(start,delete,.....items)
 
colors.splice(3,1) - output deleted 3indexof string and 1item
 
color.splice(2,0,'navy-blue') - it will add the color at the 2nd index character
[5/8 9:37 AM] Kasula, Naga Tejesh (Cognizant)
rely

(5) ['red', 'violet', 'green', 'blue', 'purple']

rely.push('orange-green','navy-blue')

7

rely

(7) ['red', 'violet', 'green', 'blue', 'purple', 'orange-green', 'navy-blue']

rely.splice(3,2)

(2) ['blue', 'purple']

rely

(5) ['red', 'violet', 'green', 'orange-green', 'navy-blue']

reverse.rely

VM9396:1 Uncaught ReferenceError: reverse is not defined

    at <anonymous>:1:1

(anonymous) @ VM9396:1

rely.reverse

ƒ reverse() { [native code] }

rely.reverse()

(5) ['navy-blue', 'orange-green', 'green', 'violet', 'red']

rely

(5) ['navy-blue', 'orange-green', 'green', 'violet', 'red']

rely.reverse()

(5) ['red', 'violet', 'green', 'orange-green', 'navy-blue']

rely

(5) ['red', 'violet', 'green', 'orange-green', 'navy-blue']

rely.splice(4,0,'moon-black','moon-light')

[]

rely

(7) ['red', 'violet', 'green', 'orange-green', 'moon-black', 'moon-light', 'navy-blue']
[5/8 10:19 AM] Kasula, Naga Tejesh (Cognizant)
adding arrays in the array list , adding a name in the null place
 
ex: variable is names 
 
names[1][3] = 'Tejesh'
[5/8 10:37 AM] Kasula, Naga Tejesh (Cognizant)
creating object excerices
 
const product = {

    name : "Gummy Bears",

    inStock : true,

    price : 1.99,

    flavors : ["grape", "apple", "cherry"]

}
[5/8 10:47 AM] Kasula, Naga Tejesh (Cognizant)
every key we make in an object is converted into a strijng 
[5/8 10:47 AM] Kasula, Naga Tejesh (Cognizant)
string*

Object Access Exercise In index.js, you'll ... by Kasula, Naga Tejesh (Cognizant)
5/8 11:07 AM
Kasula, Naga Tejesh (Cognizant)
Object Access Exercise
In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 
Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 
fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object. Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.
To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:


"64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string (keep an eye on the commas and/or spaces between the values and match that too!)
 
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
 
//YOUR CODE GOES DOWN HERE:
 
const fullAddress =  restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode
 
 
midmarks {tejesh: 99, suma: 99, sai: 99} ... by Kasula, Naga Tejesh (Cognizant)
5/8 11:20 AM
Kasula, Naga Tejesh (Cognizant)
midmarks
{tejesh: 99, suma: 99, sai: 99}
midmarks.vyshnavi = 98
98
midmarks
{tejesh: 99, suma: 99, sai: 99, vyshnavi: 98}
midmarks[1]
const midmarks = [{     tejesh : 98, suma... by Kasula, Naga Tejesh (Cognizant)
5/8 11:25 AM
Kasula, Naga Tejesh (Cognizant)
const midmarks = [{
    tejesh : 98, suma : 98, sai : 99}]
undefined
midmarks[0]
{tejesh: 98, suma: 98, sai: 99}
midmarks[0].suma 98 by Kasula, Naga Tejesh (Cognizant)
5/8 11:26 AM
Kasula, Naga Tejesh (Cognizant)
midmarks[0].suma
98
runner.prototype.gameover=function(){} by Kasula, Naga Tejesh (Cognizant)
5/8 3:06 PM
Kasula, Naga Tejesh (Cognizant)
runner.prototype.gameover=function(){}
for (let i = 100; i >= 0; i-=10) {     co... by Kasula, Naga Tejesh (Cognizant)
5/8 3:22 PM
Kasula, Naga Tejesh (Cognizant)
for (let i = 100; i >= 0; i-=10) {
    console.log(i)
}
 100
 90
 80
 70
 60
 50
 40
 30
 20
 10
0
for (let i = 10; i <=1000; i = i * 10) { ... by Kasula, Naga Tejesh (Cognizant)
5/8 3:26 PM
Kasula, Naga Tejesh (Cognizant)
for (let i = 10; i <=1000; i = i * 10) {
    console.log(i) 
}
 
10
100
1000
for (let i = 25; i >= 0; i-= 5) {     con... by Kasula, Naga Tejesh (Cognizant)
5/8 4:03 PM
Kasula, Naga Tejesh (Cognizant)
for (let i = 25; i >= 0; i-= 5) {
    console.log(i)
}
 
 
25
20
15
10
5
0
 
const people = ["Scooby", "Velma", "Daphne"... by Kasula, Naga Tejesh (Cognizant)
5/8 4:03 PM
Kasula, Naga Tejesh (Cognizant)
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
 
// WRITE YOUR LOOP BELOW THIS LINE:
 
for (let i = 0; i < people.length; i ++) {
    console.log(people[i].toUpperCase())
 
}
 
SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
 
const animenames = [     ['goku','vegeta'... by Kasula, Naga Tejesh (Cognizant)
5/8 5:29 PM
Kasula, Naga Tejesh (Cognizant)
const animenames = [
    ['goku','vegeta','gohan','piccolo'],
    ['naruto','sasuke','hinata','konahamaru']
]
 
for (let i = 0; i < animenames.length; i++) {
    const row = animenames[i];
    console.log(` ROW #${i + 1} `)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}
 
 
ROW #1 
VM2141:5 goku
VM2141:5 vegeta
VM2141:5 gohan
VM2141:5 piccolo
VM2141:3  ROW #2 
VM2141:5 naruto
VM2141:5 sasuke
VM2141:5 hinata
VM2141:5 konahamaru
undefined
need to revise all the things again by Kasula, Naga Tejesh (Cognizant)
5/8 6:03 PM
Kasula, Naga Tejesh (Cognizant)
need to revise all the things again

[Wednesday 2:41 PM] Kasula, Naga Tejesh (Cognizant)
const secretcodeNumber = "091012";

let guessNumber = prompt("please enter the number");
 
while (guessNumber !== secretcodeNumber) {

    guessNumber = prompt("please enter the correct number")

}  console.log("entered the correct number")

 entered the correct number
 
 
 
[Wednesday 2:41 PM] Kasula, Naga Tejesh (Cognizant)
const secretNumber = "12";

let userGuess = prompt("Please enter a number:");
 
while (userGuess !== secretNumber) {

    userGuess = prompt("Incorrect! Try again. Enter a number:");

}
 
console.log("Congratulations! You entered the correct number.");

[Wednesday 3:14 PM] Kasula, Naga Tejesh (Cognizant)
let inputMessage = prompt("Hey, can you say something that matches to out code")
 
while (true) {

    inputMessage = prompt(inputMessage) 

    if( inputMessage === "sfmsc") {

        break;

    }

} console.log("your code is correct")
[Wednesday 4:39 PM] Kasula, Naga Tejesh (Cognizant)
let maximum = parseInt(prompt("enter the maxinum number"));

while (!maximum) {

    maximum = parseInt(prompt("enter a valid number")); 

} 

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum)
 
let guess = parseInt(prompt("enter a guess number"))

let attempts = 1;
 
 
    while ( guess !== targetNum) { 

        attempts++;

    if(guess > targetNum) {

        guess = parseInt(prompt("too high,enter another number"))

                         } else {

        guess = parseInt(prompt("too low, enter another number"))

                         }} console.log(`you got it! it took you ${attempts} guesses`)
[Wednesday 4:44 PM] Kasula, Naga Tejesh (Cognizant)
let maximum = parseInt(prompt("enter the maxinum number"));

while (!maximum) {

    maximum = parseInt(prompt("enter a valid number")); 

} 

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum)
 
let guess = parseInt(prompt("enter a guess number"))

let attempts = 1;
 
 
    while (parseInt(guess) !== targetNum) { 

        if (guess === 'q') break;

        attempts++;

    if(guess > targetNum) {

        guess = prompt("too high,enter another number")

                         } else {

        guess = prompt("too low, enter another number")

                         }}
 
if (guess === 'q') { 

    console.log("ok you quit!")

} else {

    console.log("congrats you win")

    console.log(`you got it! It you ${attempts} guesses`) }
[Thursday 4:43 PM] Kasula, Naga Tejesh (Cognizant)
const todos = ['collect eggs', 'garlic chicken', 'scrambled eggs'];

let input = prompt("Enter a new list message");

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {

        console.log('************');

        for (let i = 0; i < todos.length; i++) {

            console.log(`${i}: ${todos[i]}`);

        }

        console.log('*************');

    } else if (input === 'new') {

        const newTodo = prompt('Ok, what is the new todo?');

        todos.push(newTodo);

        console.log(`${newTodo} added to the list`);

    } else if (input === 'delete') {

        const index = parseInt(prompt('Enter the index of the todo you want to delete'));

        if (!Number.isNaN(index)) {

            const deleted = todos.splice(index, 1);

            console.log(`Ok, deleted ${deleted[0]}`);

        } else {

            console.log('Unknown index');

        }

    }

    input = prompt("Please enter a new list message");

}

console.log('Ok! Quit the app');
[Yesterday 10:37 AM] Kasula, Naga Tejesh (Cognizant)
function rant(message) {

    console.log(message.toUpperCase());

        console.log(message.toUpperCase());

    console.log(message.toUpperCase());
 
}
 
function rant(message) {

    for (let i = 0; i < 3; i++) {

        console.log(message.toUpperCase())

    }

}
[Yesterday 11:21 AM] Kasula, Naga Tejesh (Cognizant)
function fullName (firstName, lastName) {

    console.log(`oh yes, ${firstName} ${lastName[1]}.`)

    }
 
fullName('Tejesh', 'Kasula')

VM423:2 oh yes, Tejesh a
[Yesterday 11:48 AM] Kasula, Naga Tejesh (Cognizant)
function isSnakeEyes(die1, die2) {

    if (die1 ===1 && die2 === 1 ) {

        console.log("Snake Eyes!")

    } else {

        console.log("Not Snake Eyes!")

    }

}














[11:59 AM] Kasula, Naga Tejesh (Cognizant)
In block scope we only execute with let and const variables, 
 
let radius = 4;
 
if ( radius > 2); {
const PI = 3.1455;
let text = 'name';
}
console.log(radius)
console.log(PI)
 
only the radius will be executed as it is outer scope of the function
[12:00 PM] Kasula, Naga Tejesh (Cognizant)
let radius = 4;

if ( radius > 2); {

var PI = 3.1455;

var text = 'name';

}

console.log(radius)

console.log(PI)

VM1345:7 4

VM1345:8 3.1455
[12:13 PM] Kasula, Naga Tejesh (Cognizant)
function bankRobbery () {

    const heroes = ['ironman', 'hulk', 'spiderman', 'captain america']

    function cryforHelp () {

        for (let hero of heroes)  {

            console.log(`please help us, ${hero}`)

        }

    } cryforHelp() }

undefined

bankRobbery()

VM1946:5 please help us, ironman

VM1946:5 please help us, hulk

VM1946:5 please help us, spiderman

VM1946:5 please help us, captain america
[12:15 PM] Kasula, Naga Tejesh (Cognizant)
function bankRobbery () {

    const heroes = ['ironman', 'hulk', 'spiderman', 'captain america']

    function inner() {

    function cryforHelp () {

        for (let hero of heroes)  {

            console.log(`please help us, ${hero}`)

        }

    } cryforHelp()

    }  

    inner()

    }

undefined

bankRobbery()

VM2054:6 please help us, ironman

VM2054:6 please help us, hulk

VM2054:6 please help us, spiderman

VM2054:6 please help us, captain america
 
LEXICAL SCOPE 
[1:32 PM] Kasula, Naga Tejesh (Cognizant)
functional expression in java script : it defines the function that stores in a variable is called FE
[1:33 PM] Kasula, Naga Tejesh (Cognizant)
for ex: 
 
const number = function age(num) {
return num * num (or any arithmetic expression) 
}
 
 
[2:19 PM] Kasula, Naga Tejesh (Cognizant)
HIGHER ORDER FUNCTIONS : ACCEPT OTHER FUNCTIONS AS ARGUMENTS
 
So in the function we r going to execute both the function at a time by using a single function argument :
 
 
function callTwice(func) {

     func()

     func() }
 
function calltenTimes(f) {

    for (let i = 0; i < 10; i++){

        f() }}
 
function rollDice() {

    const roll = Math.floor(Math.random() * 5 ) + 1

    console.log(roll)

}
 
 
calltenTimes(rollDice)

VM2696:11 2

VM2696:11 1

VM2696:11 5

VM2696:11 2

VM2696:11 4

3VM2696:11 3

2VM2696:11 1
 
callTwice(rollDice)

VM2696:11 4

VM2696:11 5
 
rollDice()

VM2696:11 3ollDice()

VM2696:11 3
[2:52 PM] Kasula, Naga Tejesh (Cognizant)
function mysteryFunc() {

    const rand = Math.random()

    if ( rand > 0.5) {

        return function () {

            console.log("congrats , I am a good function")

            console.log("you win a million dollars")

        } }else {

        return function () {

            alert("you have been infected to the computer virus")

           alert("you have been infected to the computer virus")

            alert("you have been infected to the computer virus")

            alert("you have been infected to the computer virus")

            alert("you have been infected to the computer virus") }}}
 
mysteryFunc()

ƒ () {

            alert("you have been infected to the computer virus")

           alert("you have been infected to the computer virus")

            alert("you have been infected to the computer virus
 
const picking = mysteryFunc() ------------ creating a variable that defines the function 
 
 
[3:05 PM] Kasula, Naga Tejesh (Cognizant)
returning functions
 
function makeBetweenAge(min,max) {

    return function (num) {

        return num >= min && num <= max } }
 
const child = makeBetweenAge(0,12)
const adult = makeBetweenAge(13,23)
const senior = makeBetweenAge(24,50)
[3:18 PM] Kasula, Naga Tejesh (Cognizant)
DEFINING METHODS
 
EVERY METHOD IS A FUNCTION BUT EVERY FUNCTION IS NOT A METHOD
in this we are calling the objects on our own for Math.random
 
const myMath = {
PI : 3.14
square : function (num) {
return num * num ; 
}, cube : function (num) {
return num ** 3 ;
} 
}
 
 
 
 
[3:37 PM] Kasula, Naga Tejesh (Cognizant)
const myMath = {

PI : 3.14,

square : function (num) {

return num * num ; 

}, cube : function (num) {

return num ** 3 ;

} 

}

undefined
 
 


myMath.cube(4)

64

myMath.square(124)

15376