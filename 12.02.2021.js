document.body.addEventListener('mousedown', function(event){
   let div = document.createElement('div');
div.style.width = "30px";
div.style.height = "30px";
div.style.borderRadius = "15px";
div.style.backgroundColor = "red";
div.style.position = "absolute";
div.style.left = event.clientX + "px";
div.style.top = event.clientY + "px";
document.body.append(div);

 if (event.which == 2 ){
     div.style.backgroundColor = "green";
 }


 if (event.which == 3 ){
    div.style.backgroundColor = "blue";
}



if (event.ctrlKey) {
    div.style.borderRadius = "0px";
}
  

if (event.shiftKey) {
    div.style.width = "60px";
    div.style.borderRadius = "0px";
}


if (event.altKey) {
    div.style.width = "60px";
    div.style.borderRadius = "60px";
}



scale = 1;
    interval = setInterval(function(){
        div.style.transform = `scale(${scale})`;
        scale += .1;
    })
document.body.addEventListener('mouseup', function(event){
    clearInterval(interval);
})

});

document.oncontextmenu = function() {return false}






  






