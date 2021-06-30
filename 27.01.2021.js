function printLine(text){
    document.write("<br>" + text);
}

// function sayHello(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     printLine ("Hello" + fullName + "!");
// }

// sayHello("Elaman", "Imashov");
// sayHello("Bakyt", "Itanov");


// function sayBye(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     printLine("Bye" + fullName + "!");
// }


// let name = "Elaman";
// function sayHowdy() {
//     printLine("Howdy" + name + "!");
// }


// sayBye("Elaman", "Imashov");
// sayBye("Bakyt", "Itanov");
// sayHowdy();


// // Exercise #1
// printMax(10, 6);
// printMax(-5, -3);
// printMax(15, 9);
// printMax(15, 15);

// function printMax (a, b){
//     if(a < b) {
//         printLine(b);
//     }
//     else {
//         printLine(a)
//     }
// }


// // Exercise #2
// printSum(10, 15);
// printSum(-5, 5);
// printSum(-10, -10);

// function printSum (a, b) {
//     printLine (a + b);
// }


// // Showbase get 
// function getMax (a, b){
//     if (a < b) {
//         return b;
//     }
//     else {
//         return a;
//     }
// }



// Exercise #3
printCount(10); 
printCount(5); 
printCount(1); 

function printCount (a){
    let i = 1;
while (i <= a) {
    printLine (i);
    i++;
}

}

