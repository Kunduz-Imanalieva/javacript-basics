// document.write("Users lists:" , "<br>")

// function User(firstName, lastName, prefix = " ") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHello = function() {
//         document.write("Good morning! My name is " + this.prefix + " " + this.firstName + "<br>")
//     }
// }

// let user = new User("Elon", "Musk", "Mr");
// let user1 = new User("Jeff", "Besos");
// let user2 = new User("Will", "Smith");
// let user3 = new User("Jaden", "Smith", "Mr");
// let user4 = new User("Kunduz", "IManalieva", "Mrs");

// user.sayHello();
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();


// document.write (user)




// function Apple(name, weight = 0) {
//     this.name = name
//     this.weight = weight;


//  this.toString = function() {
//         return "Apple type" + this.name;
//     }
//     this.valueOf = function(){
//         return this.weight;
//     }

//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint) {
//             default:
//                 case 'string': return this.name + "apple";
//                 case 'number': return this.weight;
//         }
//     }
// }


// function Tomato(name, weight) {
//     this.name = name;
//     this.write = weight;

// this.toString = function() {
//         return "Tomato type" + this.name;
//     }

//     this.valueOf = function(){
//         return this.weight;
//     }

//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint) {
//             default:
//                 case 'string': return this.name + "tomato";
//                 case 'number': return this.weight;
//         }
//     }
// }
   

// let apple1 = new Apple("Aport", 150);
// let apple2 = new Apple("Nalivka", 100);
// let tomato1 = new Tomato("Cherri", 50);
// let tomato2 = new Tomato("Chernyi prince", 100);


// document.write (apple1 + ", " + tomato1 + ", " + apple2);
// document.write("Total weight:" + (+apple1 + +apple2 + +tomato1 + +tomato2));


// Массивы

// let fruits = ['Apple', "Bananas", "Strawberries", 123, true, undefined, null, {}, []];

// // document.write (fruits[2]);
// fruits.push("Pear");
// fruits.unshift("Lemon");
// fruits.pop();
// fruits.shift();
// // document.write(fruits.length);
// console.log(fruits);


// // первый метод
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// // второй метод
// for (const fruit of fruits) {
//     document.write(fruits[i] + "<br>");
// }




function example(a, b){
for (let i = 0; i < b; i++) {
    const element = b[i];
    
}
}