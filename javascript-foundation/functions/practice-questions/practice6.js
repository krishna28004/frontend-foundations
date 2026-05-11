//1. Write a JavaScript function that returns array elements larger than a number.
function larger(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i])
        }
    }
}
let arr = [2,5,7,8,9];
let num = 5;
larger(arr,num);

//2. Write a js function which exrract unique elements
function unique(str){
    let result = "";
    for(let i=0;i<str.length;i++){
        let ch = str[i];
        if (!result.includes(ch)) {
            result += ch;
        }
    } console.log(result);
}
str = "Avengersdoomsday"
unique(str);

//waf in js which takes list of country and return longest name
function longchar(countries){
    let longestCountry = "";
    let maxLength = 0;
    for(let i = 0; i < countries.length; i++){
        if(countries[i].length > maxLength){
            maxLength = countries[i].length;
            longestCountry = countries[i];
        }
    }
    console.log("Country:", longestCountry);
    console.log("Characters:", maxLength);
}

let arrayis = [];
let n = Number(prompt("Enter number of inputs: "));
for(let i = 1; i <= n; i++){
    let insert = prompt("Enter country name: ");
    arrayis.push(insert);
}
console.log(arrayis);
longchar(arrayis);

//count vowel from string
let stringis = "Hello Coder";
let vow = "aeiou"
let count = 0;
for(let i=0;i<stringis.length;i++){
    for(let j=0;j<vow.length;j++){
        if(stringis[i]==vow[j]){
            count = count + 1;
        }
    }
}
console.log("Number of vowels are: "+ count)

// to generate random numbers within the given range
let min = Number(prompt("Enter the min value of range: "));
let max = Number(prompt("Enter the max value of range: "));
if (min <= max) {
    let numb = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numb);
} else {
    console.log("Min should be less than or equal to Max");
}


