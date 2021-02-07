let h1 = document.createElement('h1');
h1.innerText = "JavaScript Styling";
document.body.append(h1);

let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
  let li = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = "Example";
  button.id = "example" + i;
  
  li.append(button);
  ul.append(li);
}
document.body.append(ul)




let example1 = document.querySelector('#example1');
example1.style.backgroundColor = "rgba(200, 100, 0, .5)";
example1.style.border = "none";
example1.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
example1.className = "hello world"
example1.addEventListener('click', function() {
    example1.style.backgroundColor = "red"
})


let style1 = document.querySelector('.style1');
style1.style.border = "2px solid black";
style1.style.width = "90px";
style1.style.height = "40px";
style1.style.padding = "5px";


let style2 = document.querySelector('.style2');
style2.style.border = "2px solid coral";
style2.style.backgroundColor = "coral"
style2.style.width = "60px";
style2.style.height = "30px";
style2.style.marginTop = "10px";
style2.style.padding = "5px";


let style3 = document.querySelector('.style3');
style3.style.border = "3px dashed red";
style3.style.width = "60px";
style3.style.height = "30px";
style3.style.marginTop = "10px";
style3.style.padding = "5px";



let style4 = document.querySelector('.style4');
style4.style.border = "5px dotted green";
style4.style.width = "100px";
style4.style.height = "30px";
style4.style.marginTop = "10px";
style4.style.padding = "5px";



let style5 = document.querySelector('.style5');
style5.style.border = "10px solid green";
style5.style.borderLeftColor = "blue";
style5.style.borderRightColor = "black";
style5.style.borderBottomColor = "pink";
style5.style.width = "70px";
style5.style.height = "15px";
style5.style.marginTop = "10px";
style5.style.padding = "5px";


