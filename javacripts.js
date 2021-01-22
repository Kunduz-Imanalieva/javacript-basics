// let first = "Shrek";
// let second = first;
// let third = second;
// let fourth = third;
// let fifth = fourth;

// let capital = "Bishkek";
// let country = "KG";
// console.log (fifth);
// console.log (capital +  " is a capital of " + country);

// let subject = "Distance";
// let unit = "meters";

// subject = "Weight";
// unit = "gram";

// subject = "Height";
// unit = "centimeter";

// console.log (subject + " is measured in " + unit);

// let title = "Dark Tower";
// let author = "SK";

// title = "Garry Potter";
// author = "JK Rowling";
// console.log ("My favourite book is " + title + " by " + author);

// console.log ('My favourite song is \"Yesterday\" by Beatles');
// console.log ('I\'m the best!');

// let artist = "Beatles";
// // console.log ("I\'m the fan of ' +   artist  +  "!" );
// console.log (`I'm the fan of "`+ artist + `"!`);

// let movie = "Terminator";
// console.log (`My favourite movie is "` + movie +`" `);
// console.log (`My favourite movie is "${movie}"`);


// let firstName = prompt('What is your name?');
// console.log (`Your name is ${firstName}`);

// let a = +prompt ("What is A?");
// let b = +prompt ("What is B?");
// let sum = a+b;
// console.log (`The sum of two number is equal to ${sum}`);


// let c = +prompt ("What is C?");
// let d = +prompt ("What is D?");
// let e = c*d;
// console.log (`C multiplied by D is equal to ${e}`);



// first example
// let s = +prompt ("What is S(Distance)?");
// let t = +prompt ("What is t(Time)?");
// let v = s/t;
// console.log (`The speed is equal to ${v}`);


// second example
// let a = +prompt ("What is the lenght of the square?");
// let s = a*a;
// console.log (`The area of the square is equal to ${s}`);






// let a = prompt("What is A?");
// if (a) { 
//  console.log ("A squared equals to " + (a ** 2));
// }

// else {
//  console.log ("A is not set");
// }

// const KG_YEAR = 1991;
// let year = prompt ("What is the day independence of Kyrgyzstan?");

// if (year < KG_YEAR) {
//     console.log ("too early");
// }
// else if (year > KG_YEAR) {
//     console.log ("Too late");
// }

// else (year == KG_YEAR ) {
//     console.log ("Exactly");
// }





// let a = +prompt ("What is A?");
// let b = +prompt ("What is B?");
// let c = a % b;


// if (c){
//     console.log ("A is divided by B with a remainder" + c);
// }

// else {
//     console.log ("A is divided by B without a remainder");
// }




// let a = prompt ("What is A?");
// let b = prompt ("What is B?");



// if (a < b) {
//  console.log ("A is smaller than B");
//  }
// else if (a > b) {
// console.log ("A is bigger than B");
//  }
    
// else (a == b ) {
// console.log ("A is equal to B");
// }




// let a = prompt ("What is A?");
// let b = prompt ("What is B?");
// let c = a ** (1/2);

// if (c == b) {
//   console.log ("Yes!");
// }

// else {
//   console.log ("No!");
// }



// let points = 0;

// // question 1
// let answer1 = prompt("How many tenses are there in English?");
// if (answer1 === "12") {
//     points = points + 10;
// }

// // question 2
// let answer2 = confirm("Is can/could/may/might modal verbs?");
// if (answer2 === true)  {
//     points = points + 10;
// }

// // question 3
// let answer3 = prompt("What is the past form of do?");
// if (answer3 === "did") {
//     points = points + 10;
// }

// // question 4
// let answer4 = confirm("Is this sentence is right? - Yesterday, I do it.");
// if (answer4 === false)  {
//     points = points + 10;
// }

// // question 5
// let answer5 = prompt("I've been waiting for this trip for a long time - Which tense is this sentence?");
// if (answer5 === "present perfect continuous") {
//     points = points + 10;
// }

// // question 6
// let answer6 = prompt("What is the past form of begin?");
// if (answer6 === "began") {
//     points = points + 10;
// }

// // question 7
// let answer7 = prompt("How many states are there in the USA?");
// if (answer7 === "50") {
//     points = points + 10;
// }


// // question 8
// let answer8 = prompt("How many conditionals are there in English?");
// if (answer8 === "5") {
//     points = points + 10;
// }

// // question 9
// let answer9 = confirm("Is this sentence is right? - I will go to the hospital tomorrow.");
// if (answer9 === true)  {
//     points = points + 10;
// }

// // question 10
// let answer10 = prompt("What is the past form of eat?");
// if (answer10 === "ate") {
//     points = points + 10;
// }



// alert ("you've earned " + points + " points")

// let answer = prompt("Which country's capital is Bishkek?");
// if (answer === "Kyrgyzstan" || answer == "KG") {
//    console.log ("True");
// }
// else {
//     console.log ("False");
// }


let answer1 = prompt("What is the measure of temperature?");
if (answer1 == "celsius" || answer1 == "fahrenheit" || answer1 == "kelvin"){
    console.log ("true");
}
else {
    console.log ("false");
}


let answer2 = prompt("What is the measure of distance?");
if (answer2 == "km" || answer2 == "meter"){
    console.log ("true");
}
else {
    console.log ("false");
}


let answer3 = prompt("What is the measure of weight?");
if (answer3 == "kilogram" || answer3 == "pound"){
    console.log ("true");
}
else {
    console.log ("false");
}


let answer4 = prompt("What is the measure of unit?");
let answer5 = prompt("What is the measure of temperature?");

if (answer4 == "k" && answer5 == 273 ) {
        console.log ("true");
}

else if (answer4 == "c" && answer5 == 0) {
        console.log ("true");
}

else if (answer4 == "f" && answer5 == 32) {
         console.log ("true");
}
    else {
     console.log ("false");
 }
 






// let answer6 = prompt("What is the speed of sound?");
// let answer7 = prompt("What is the measure of speed?")

// if (answer6 == "km/h" ) {
//    if (answer7 == "1234") {      
//     console.log ("true");
// }
// else {
//      console.log ("false");
//  }
// }

// if (answer6 == "m/h" ) {
//     if (answer7 == "343") {
//     console.log ("true");
// }
// else {
// console.log ("false");
// }
// }


// if (answer6 == "m/s" ) {
//     if (answer7 == "767"){
//     console.log ("true");
// }
// else{
// console.log ("false");
// }
// }

