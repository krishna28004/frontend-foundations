//.forEach()
let arr = [2,4,6,7,9];
let print =  function (el){
    console.log(el)
}
arr.forEach(print);



let arrayis = [
    {
        name:"raman",
        marks:67
    },
    {
        name:"aarav",
        marks:98
    },
    {
        name:"sumit",
        marks:87
    }
];
console.log(arrayis);
arrayis.forEach((student) => {
    console.log(student.marks);
})


//.map()
let num = [2,4,6,8,9];
let double = num.map((el) => {
    return (el*2);
})
console.log(double)


let gpa = arrayis.map((el) => {
    return el.marks / 10;
});
console.log(gpa)

//.filter
let nums = [1,2,3,4,5,6,7,8];
let ans = nums.filter((el) => {
    return el%2==0; //even
})
console.log(ans)


//.every -> Returns true if every element of array gives true for some function. else return false
console.log(  [2,4,6,8,10].every((el) => el%2==0)  );
console.log(  [2,4,6,8,1].every((el) => el%2==0)  );

//.reduce -> reducer function with 2 variable for (accumulator, element);
// (0, 1) -> 1
// (1, 2) -> 3
// (3, 3) -> 6
// (6, 4) -> 10
// (10, 5)-> 15
console.log(  [1,2,3,4,5].reduce((result,el) => result + el));



//.reduce -> finding max in an array
console.log(arr)
let max = arr.reduce((max,el ) =>{
    if(max<el){
        return el;
    } else {
        return max;
    }
})
console.log(max)


//default  parameter -> giving a default value to an argument  
// value by order assign hoti hai 
//func1(1,5)  -> func1(a=2,b)         is valid
//func2(1)  -> func2(a=2,b)         is not valid


//spread(array literal ) = exapand an iterable into multiple values 
console.log(Math.min(1,2,3));
console.log(arr);
console.log(Math.min(...arr));

//spread(object literal ) = exapand an iterable into multiple values
const data =  {
    email: "krk28@gmail.com",
    password: "9348fjkd"
};
const dataCopy = {...data,}
console.log(dataCopy)


//rest = allows a function to take an indefinite number of arguments and bundle them in array
function printval(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us: "+ args[i])
    }
}
console.log(sum(1,2,3))


function sum(...args){
    return args.reduce((sum,el) => sum+el) ;
};
console.log(sum(1,2,4,5));

//Destructuring =  storing values of array into multiple variables
let names = ["aarav", "luv", "rishi", "karan"];
let [winner, runnerup, ...others] = names;
console.log(runnerup)

//Destructuring for objects
const student = {
    name:"ayansh",
    branch:"cse",
    username:"ayansh2345",
    password:"92384kas"
};
let {username : user, password} = student;
console.log(user)
console.log(password)
