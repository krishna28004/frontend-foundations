console.log("-----------------------------------------------------------");

//count the digits of a numbers and also sum it
let Numb = 9876859;
console.log(Numb)
let numcount = 0;
let numsum = 0;
while(Numb>0){
    let digit = Numb%10;
    numsum = numsum + digit;
    numcount++; 
    Numb=Math.floor(Numb/10);
}
console.log("the number of digits: " +numcount);
console.log("the sum of the digits: " + numsum);

console.log("-----------------------------------------------------------");

//to print the number from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
}

console.log("-----------------------------------------------------------");

//print even numbers between 1 to 50 
for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("-----------------------------------------------------------");

//print reverse numbers from 10 to 1
for(let i=10;i>0;i--){
    console.log(i)
}
console.log("-----------------------------------------------------------");

//print the sum of numbers from 1 to n
let num = 5;
let sum = 0;
for(let i=0;i<num;i++){
    sum = sum + i;
}
console.log(sum)

console.log("-----------------------------------------------------------");

//to print the multiplication table of 5
let table = 5;
for(let i=1;i<=10;i++){
    console.log("5"+"*"+i+"="+(5*i))
}

console.log("-----------------------------------------------------------");

//count how many numbers between 1 to 100 are devisble by 3
let number =3;
let count = 0;
for(let i=0; i<100;i++){
    if(i%3==0){
        count = count + 1;
    }
}console.log("the count for the numbers are "+count)

console.log("-----------------------------------------------------------");

//print all the elements using the loop
let arr = [10, 20, 30, 40];
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("-----------------------------------------------------------");

//count the numbers of vowels in a string
let str = "hii coders"
let vow = "aeiou";
let countis = 0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<vow.length;j++){
        if(str[i]==vow[j]){
            countis=countis + 1;
        }
    }
}console.log(countis)

console.log("-----------------------------------------------------------");

//print a right triangle 
let row = 5;
for(let i=1;i<=row;i++){
    let star = "";
    for(let j=1;j<i;j++){
        star = star + ("*");
    }
    console.log(star);
}
console.log("-----------------------------------------------------------");

//write a programm to reverse a string
let strr = "rakshit";
let same="";
for(let i=strr.length-1; (i+1)>0;i--){
    same = same + strr[i];
}console.log(same)

console.log("-----------------------------------------------------------");

//find a factorial of a number using loop
let nums=10;
let fact = 1
for(let i=1;i<=nums;i++){
    fact= i*fact; 
}console.log(fact)

console.log("-----------------------------------------------------------");

//prime or not  (nums=10)
let counts = 1;
for(let i=2;i<nums;i++){
    if(nums%i==0){
        counts++;
    }
}
if (counts == 1){
    console.log("prime")
} else {
    console.log("not prime")
}


console.log("-----------------------------------------------------------");