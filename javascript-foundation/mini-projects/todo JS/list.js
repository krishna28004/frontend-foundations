let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let item = document.createElement("li"); 
    console.log(inp.value);
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
})

inp.addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        btn.click();
    }
})



