//this - in javascript - has many means as per the context
//it refers to an object that is executing the current peice of code

const student= {
    name:"krishna",
    age:21,
    eng:78,
    phy:68,
    maths:98,
    chem:88,
    getAvg(){
        let avg = (this.eng + this.maths + this.phy + this.chem)/4;
        console.log(`${this.name} got average marks = ${avg}`)
    }
}
student.getAvg();

//try  = allows you to define a block of code to be tested for errors while it is being executed
//catch = if try me error agya then block of code written under 'catch' will be executed
console.log("Helloww");
console.log("Helloww");
try{
    console.log(a);
}
catch{
    console.log("There is an error in Code under try");
}

//Arrows Function - compacts the code
//const func = (arg1,arg2) => {function definition or further code}
const sum = (a,b) => { console.log(a+b) }
sum(20,30);


//setTimeOut(function, timeout) ==== timeout take time in milliseconds 1s=1000ms
//timeout executes the func after given time
console.log("Hii there!");
setTimeout( ()=>{console.log("Welcome to javascript ")}, 1000);
console.log("Krishna")

//let id = setInterval(function, timeout)
// this will execute function mulitple times as per the timeout until stopped 
//clearInterval(id) ===== this command (on js web once passed) will stop the setinterval code
 

//this with arrow function 
// in Arrow === lexical scope 
// in Function ==== calling object scope
const stud = {
    name: "aarav",
    marks:95,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return  this.name
    },
    getMarks: () => {
        console.log(this);
        return this.marks; //parents scope -> window
    },
};
stud.getName();
stud.getMarks();



 
