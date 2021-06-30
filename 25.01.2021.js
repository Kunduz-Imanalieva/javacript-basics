// let i = 5;
// while (i >= 1) {
//     document.write(i + "<br>");
// }



// let i2 = 5;
// do {
//     document.write(i2 + "<br>");
//     i2--;
// } while (i2 >= 1);


// for (let i3 = 5; i3 >= 1; i3--) {
//     document.write (i3 + "<br>");
// }

// let i = 100;
// let stop = +prompt("What number?");

// while (i >= 1) {
//     document.write (i + "<br>");


//     if (i == stop){
//         break;
//     }
//  i--;
// }



let i = 1;
while (i <= 20){
    if (i % 2 == 1){
        document.write(i + "<br>");
    }
    i++;
}


let x = 1;
while (x <= 20){
    x++;
    if (x % 2 != 1){
        continue;
    }
    document.write(x + "<br>");
    
}
