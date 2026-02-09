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

 
