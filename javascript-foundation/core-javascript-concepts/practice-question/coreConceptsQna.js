//write a func that returns the second largest number in an array
let arr = [23,61,22,57,98,45];
secondLargest(arr);
function secondLargest(arr){
    let first  = 0;
    let second = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            first = arr[i];
            second.push(first)
        } 
    } console.log(second[second.length-2]);
}