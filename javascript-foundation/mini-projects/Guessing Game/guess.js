while(true){
let req = Number(prompt("Enter Your Request:\nPress 1 to Start\nPress 2 to Quit): "));
    if(req==1){
        let num = Number(prompt("Enter your limit for guess"));
        let guess = Number(prompt("Enter your guess"));
        
        console.log("You Guessed: "+guess);
        let random = Math.floor(Math.random()*num)+1;
        console.log("computer generated: "+random);
        
        if(guess === random){
            console.log("Congrats...You WON!!!");
        }      
        else{
            console.log("Better luck next time!!!");
        }
    }
    else if(req===2){
        break;
    }
    else{
        console.log("Enter Valid Request")
    }
}