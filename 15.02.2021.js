let fruits = ["Apple", "Bananas", "Grapes", "Orange"];
let ul = document.createElement("ul");

for (const fruit of fruits) {
  let li = document.createElement("li");
  let span = document.createElement('span');
  span.addEventListener ('click', function(){
    span.classList.toggle("done") 
})
  let button = document.createElement("button");
  button.innerText = "-";
  span.innerText = fruit;
  ul.append(li);
  li.append(span);
  li.append(button);
  button.addEventListener("click", function () {
    li.remove();

  });
}
document.body.append(ul);

let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  if (input.value) {
    let li = document.createElement("li");
    let span = document.createElement('span');
    span.addEventListener ('click', function(){
        span.classList.toggle("done") 
    })
    let button = document.createElement("button");
    button.innerText = "-";
    span.innerText = input.value
    input.value = " ";
    ul.append(li);
    li.append(span);
    li.append(button);
    

    button.addEventListener("click", function () {
      li.remove();
    });
  }
});
