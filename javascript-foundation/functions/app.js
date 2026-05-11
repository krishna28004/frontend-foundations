function printPoem(){
    console.log("Midnight hums in silver light,\n" +
    "Quiet streets hold dreams so tight,\n" +
    "Windows glow with stories old,\n" +
    "Whispers drift in shades of gold,\n" +
    "Footsteps fade on restless stone,\n" +
    "Hearts beat softly, not alone,\n" +
    "Stars lean close to hear the breeze,\n" +
    "Night unfolds with silent ease.\n"
    );
}

printPoem();    

//Dice Game function
function dice(){
    let dicenum = Math.floor(Math.random()*6+1);
    console.log("Dice number is: "+dicenum);
};
dice();

//functions with arguments
//calculate cgpa from 4 semester's sgpa
function cgpa(sem1,sem2,sem3){
    console.log(((sem1+sem2+sem3)/3)+" is your CGPA");
};
cgpa(8.12,8.00,8.31);

//write a function to print sum till n
function getsum(n){
    sum =0;
    for(let i=1;i<=n;i++){
        sum = sum + i;
    };
    return sum;
};
console.log(getsum(3));

//concatinate all strings of array
function strcon(array){
    let result = ""
    for(let i=0;i<array.length;i++){
    result = result + array[i];
    }
    return result;
};
let arr = ["hii","hello","bye"];
console.log(strcon(arr));


//global scope = function ke bahar vala variable jo 
//function scope = sirf function ke andar work krne vala variable
//block scope = variable declared inside a { }.....WORKS only inside block
//Lexical Scode = nested functions (hoisting) 

let greet = "hello";           //global scope
function changeGreet(){
    let greet = "namaste";     //function scope
    console.log(greet);
    function innerFunction(){
        console.log(greet);    //lexical scope
    }
}
console.log(greet);
changeGreet();