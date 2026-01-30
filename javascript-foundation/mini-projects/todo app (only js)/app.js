let todo = [];
let req  = prompt("Enter the request: ");
while(true){
    if(req=="quit"){
        console.log("quitting app")
        break;
    }

    if(req == "list"){
        console.log("-------------");
        for(let i=0;i=todo.length;i++){
            console.log(i,todo[i])
        }
        console.log("-------------");
    } else if (req=="add"){
        let task = prompt("Enter your task you want to Add");
        todo.push(task);
        console.log("task added");
    } else if(req=="delete"){
        let idx = prompt("Which index you want to delete");
        todo.splice(idx,1);
        console.log("task deleted")
    } else{
        console.log("wrong statement");
    }
    req = prompt("Enter the request: ");
    
}
         