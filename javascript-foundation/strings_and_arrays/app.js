//trim method
let nameis = "                 Elon Musk    ";
console.log(nameis);
let newstr = nameis.trim();
console.log("after trim : "+newstr);

//uppercase and lower case 
let firstname = "elon ";
let sirname = "MUSK"
console.log(firstname.toUpperCase() + sirname.toLowerCase());

//seperate the word "coder" from string "hello Coder how's going" and 
//replace i with e
let str = "hello Coder how's going";
let seperated = str.slice(6,11);
let replaced = str.replace("i","e");
console.log(seperated);

//arrays creation and accessing elemnts length
let info = ["krishna", 21, "CSE", 161];
let nameLength = info[0].length;
console.log(nameLength);

//arrays are mutable
let months = ["jan","feb","march","april"];
console.log(months.pop())
console.log(months.push("may"))
console.log(months.unshift("Months: "));