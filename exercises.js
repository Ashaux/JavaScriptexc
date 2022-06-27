
// Exercises 1: Age logger
let age = 33;
console.log(age);

// Exercise 2: So many rabbits
let numberOfRabbits = 2;
numberOfRabbits * 3;
console.log(numberOfRabbits);

// Exercises 3: BODMAS
let bodmasExample = 3;
answer = bodmasExample + 5;
console.log(answer);
result = answer / 6;
console.log(result);

// Exercises 4: Random number generator
let randomNumber = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber);

// String exercise 1: Log your country
myCountry = "United Kingdom";
console.log(myCountry);

// String Exercise 2:
myCountry.length;

// String Exercise 3:
let favouriteFood = "Asha";
console.log(favouriteFood.toUpperCase());


// String Exercise 4:
console.log(favouriteFood.toLowerCase());


// String Exercise 5:
let myName = "Asha";
let myAge = 33;
let message ="Hello my name is ";
console.log(message + myName);

// String exercise 6:
firstName = "Asha" ;
lastName = " Ainte";
console.log(firstName + lastName);
let welcome = "Welcome "; 
let question = "How can I help you?";
console.log(welcome + firstName + lastName);
console.log(question);

// Control Flow Exercise 1: Password
let password = 4;
if (password  >7 ) 
    console.log('true');
 else 
    console.log('false');

// Control Flow Exercise 2: Height Test
let height = 165;
if (height >= 150 )
console.log('You can go on the ride!');
else
console.log('Sorry you are not tall enough.');

let input = 140;
if (isNaN(input)){
console.log('Please enter a number');
} 
if  (input >= 150 )
console.log('You can ride');
else { (input <150 )
console.log('Sorry you are not tall enough ')

}



// if Statement Project: Dice Prize

// A number between 1-6
let diceOne = Math.floor(Math.random() * 6 ) + 1;
let diceTwo = Math.floor(Math.random() * 6 ) + 1;
console.log(diceOne) || console.log(diceTwo)



if (diceOne === 6 && diceTwo === 6)
console.log('you won a beaaaaarrr' ) 

else

if (diceOne === 1 && diceTwo === 1)
console.log('you win 3 free throws' ) 

else

if (diceOne === 2 && diceTwo === 2)
console.log('you win 1 free throw' ) 

else


if (diceOne === 3 && diceTwo === 3)
console.log('you win 3 free throws' ) 

else


if (diceOne === 4 && diceTwo === 4)
console.log('you win 1 free throw' ) 

else


if (diceOne === 5 && diceTwo === 5)
console.log('you win 3 free throws' ) 

else
console.log('You lost')



// Functions Exercise 1: Simple Function

function greet () {

    console.log('Hello there!');
}

greet();

// Function Exercise 2: Quadrupler
function quadrupler () {

    let numb= 5;
    answerrr= numb * 4 ;
    console.log(answerrr);
}
quadrupler();


// Function Exercise 3: Welcome message

const fiName= "Asha";
 const lasName= "Ainte,";
 

 function welcomes () {
    console.log('Hello', fiName.toLocaleLowerCase(), lasName.toLocaleUpperCase(),'how can I help you?');
 }
    welcomes();

 
// Function Exercises 4: Temperature Converter
  let farenheit = 70;
  let celcius = (farenheit - 32) * 5/9;

function temperatureConverter () {
    console.log(celcius);
}

temperatureConverter();

// Function Exercises 5: Dog years
// I know my maths is not right here haha
let myAgeIs= 33;
let myNameIs= "Asha";

// first year of dogs life is = 15 human years
// second year of dogs life is = 9 human years
// each year after that is = 5 human years

let firstYear= myAgeIs - 15;
let secondYear= firstYear -9 ;
let afterThat= myAge - firstYear - secondYear / 5;
let myDogAge= firstYear + secondYear -  afterThat;

function dogYears() {
console.log(myDogAge);
}

dogYears();


// Function Exercises 6: Calculator
// doesn't work for some reason

para1= 100;
para3= 50;
calculators= para1 + para3;

function calculators() {
   
    if (para1 + para3 === Number) {
        console.log('this is a number');
}

else if (para1 + para3 === isNaN) {
    console.log('please enter a number here');
    
}
calculators();
}


// Function Exercise 7: Less than
// not working so far
// i gvive up


// numberA= 30;
// numberB= 50;

// function min(){

//     if (numberA > numberB);
//     console.log(numberA);
// }

//     else {
//     console.log('oops');
//     }

// else if (numberB > numberA);
//    console.log(numberB);

    

// Function Exercise 8: to the power of
// I dont understand this exercise to be honest, sorry 

