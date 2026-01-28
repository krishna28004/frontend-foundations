//.Write a Java Script program to get the first n elements of an array.
// [n can be any positive number].For example: for array [7,9,0,-2] and n=3 Print, [7,9,0]
let num=[3,5,6,-6,2,-8,3]
let numPos = [];
for(let i=0;i<num.length;i++){
    if (num[i]>=0){
        numPos.push(num[i]);
    }
}
console.log(numPos);


//Write a Java Script program to get the last n elements of an array.
//[n can be any positive number].For example: for array [7,9,0,-2] and n=3 Print,[9,0,-2]
let arr=[12,4,57,2,6,86,45]
let n=2;
let results = [];
for(let i=arr.length;i>=(arr.length-n);i--){
    results.push(arr[i]);
}
console.log(results);

//Write a Java Script program to check whether a string is blank or not
let arrayis = []
if(arrayis.length==0){
    console.log("empty array")
}

//Write a JavaScript program to test whether the character at the given (character) index is lowercase
let str = "hello Coder";
let i = 7;
    if(str[i]==str[i].toLowerCase){
        console.log("Yes Lower")
    } else {
        console.log("not lowercase");
    }

//Write a Java Script program to check if an element exists in an array or not
let sent = "Here is the Sample sentence";
let search = "is";
for(let i=0;i<=sent.length;i++){
    
}
