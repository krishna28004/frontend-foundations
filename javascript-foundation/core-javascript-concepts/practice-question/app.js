// 1. Write an arrow function named arrayAverage that accepts an array of numbers and returns 
// the average of those numbers
const arrayAverage = (arr) => {
    let count = 0;
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        count = count + 1;
        sum = arr[i] + sum;
    }
    let avg = sum/count;
    console.log(avg);
};
let arr = [2, 5, 6, 7, 8, 9];
arrayAverage(arr);



//2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
const isEven = (num) => {if(num%2==0){console.log("Even number")}else{console.log("odd")}};
let num = 23451;
isEven(num);



//3. predit the output
const object = {
    message: 'Hello World',

    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);  //undefined



//fix the problem below code
// const user = {
//   name: "Krishna",
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };
// user.greet();
const user = {
  name: "Krishna",
  greet: function () {
    const self = this;
    //console.log(this.name);
    setTimeout(function () {
      console.log(self.name);
    }, 1000);
  }
};
user.greet(); //in branch



//write a func that returns the second largest number in an array
let arrayis = [23,61,22,57,98,45];
secondLargest(arrayis);
function secondLargest(arr){
    let first  = 0;
    let second = [];
    for(let i=0;i<arrayis.length;i++){
        if(arrayis[i]>first){
            first = arr[i];
            second.push(first)
        } 
    } console.log(second[second.length-2]);
}
