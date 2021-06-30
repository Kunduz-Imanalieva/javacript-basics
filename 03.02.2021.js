let header = document.querySelector('h1');
let article = document.querySelector('article');
let paragraphs = document.querySelectorAll('p:nth-child(even)');



// console.log(header.innerText);
// console.log(header.textContent);
// console.log(header.outerHTML);
// console.log(article.innerHTML);



// for (const paragraph of paragraphs) {
//    if (paragraph.className) {
//        console.log(paragraph.className);  
//    }
//    if (paragraph.id) {
//        console.log (paragraph.id);
//    }
// }



// created a html tag with javascript
let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a brand new paragraph added by Javascript";
article.append(newParagraph);    /* добавляет в начале */
// article.prepend(newParagraph);   /* добавляет в конце */
// article.before(newParagraph)     /* добавляет до артикла */
// article.after(newParagraph)      /* добавляет после артикла */
// article.replaceWith(newParagraph)
newParagraph.className = "example-paragraph";
newParagraph.id = "example-id";


let exampleList = ["Apple", "Bananas", "Grapes", "Lemon"];
let ul = document.querySelector('ul');
for (const fruit of exampleList) {
    let li = document.createElement('li');
    li.innerText = fruit;
    ul.append(li);
}



let exampleList2 = [
    {name:"Apple", weight: 20},
    {name:"Bananas", weight: 30},
    {name:"Grapes", weight: 50},
    {name:"Lemon", weight: 10},
];

let ul2 = document.querySelector('#example-ul2');
for (const fruit of exampleList2) {
    let li = document.createElement('li');
    li.innerText = fruit.name + ' - ' + fruit.weight;
    ul.append(li);
}




let exampleList3 = {
    "Apple": 10,
    "Bananas": 20,
    "Grapes": 30,
    "Lemon": 10,
};

let ul3 = document.querySelector('#example-ul3');
for (const name in exampleList3) {
   let li = document.createElement('li');
   li.innerText = name + ' - ' + exampleList3[name];
   ul.append(li);
}



function fruitTable() {
    let data = {
        headers: ["Fruit", "Weight"],
        rows: [
        ["Apple", 10],
        ["Bananas", 20],
        ["Grapes", 30],
        ["Lemon", 10],
    ]
  };
    let container = document.getElementById("tableContainer");
}

let table = document.createElement("table")
document.body.append(table);
let tr = document.createElement("tr");
let td = document.createElement("td");
table.append(tr);
table.append(td)













