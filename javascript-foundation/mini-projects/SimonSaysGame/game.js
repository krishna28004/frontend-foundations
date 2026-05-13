let gameSeq = [];
let userSeq = []; 

let started = false;
let level = 0;

let btns = ["blue", "yellow", "pink", "green"];
let h2 = document.querySelector("h2")

document.addEventListener("keydown", function(){
    if(started == false){
    console.log("game started"); 
    started = true;

    levelUp();
    } 
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log("game sequence")
    gameFlash(randBtn);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userflash(btn); 
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx) {
    // console.log("current level: ", level );
    
    console.log(gameSeq[idx]);
    console.log(userSeq[idx]);
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
        console.log("same value");
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> press any key to start.`;
        document.querySelector("h1").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("h1").style.backgroundColor="";
        }, 250)
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level = 0;
}