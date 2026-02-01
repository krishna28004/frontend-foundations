//objects literals
const item = {
    snacks : "doritos",
    drinks :  "coco-cola",
    meal: "shahi-paneer & naan",
    icecreams : "butterscotch"
};
console.log(item);

//to access a key from (key-value pairs)
let key = item["drinks"];
console.log(key)  //or
let nextkey = item.meal;
console.log(nextkey);

//we can convert keywords into stings
const obj = {
    null : "kuchh nahi",
    2:"number",
    undefined:"amaanniya"
};
console.log(obj);

//add or update your object
const student = {
    name: "rahul",
    class: "12th",
    rollno: 22,
    city: "mumbai"
};
console.log(student);
console.log(student.city);
console.log(student.city = "delhi");
console.log(student.city);
console.log(student);

console.log(student.gender = "male");
console.log(student);

//to delete
console.log(delete student.rollno);
console.log(student);


//Nested Objects - object ke andar objects
const generalinfo = {
    reyan:{
        age:23,
        city:"uttrakhand",
        profession:"family buisness"
    },
    ankit:{
        age:26,
        city:"gurugram",
        profession:"engineer"
    },
    shreyansh:{
        age:20,
        city:"delhi",
        profession:"intern"
    }
};
console.log(generalinfo)

//array of objects
const classinfo = [
    { name: "karan",
      class: "4th",
      rollno: 17
    },
    { name: "dev",
      class: "4th",
      rollno: 16},
    { name: "ravi",
      class: "4th",
      rollno: 19},
];
console.log(classinfo);
console.log(classinfo[1]);
console.log(classinfo[0].name);  //access
console.log(classinfo[2].name="aman");  //update

//math functions
console.log(Math);
console.log(Math.E);
console.log(Math.pow(2,5));
console.log(Math.PI);
console.log(Math.floor(3.5));
console.log(Math.floor(-4.5));
console.log(Math.ceil(-6.5980982222));
console.log(Math.ceil(6.0000000022));
console.log(Math.abs(5));
console.log(Math.random());

//random integers 
let num = Math.random();
num = num*10;
num = Math.floor(num);
num = num+1;
console.log(num);
//or 
let random = Math.floor(Math.random()*10)+1; //10 is the range till
console.log(random);
