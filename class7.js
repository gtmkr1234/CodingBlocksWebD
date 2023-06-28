// Map reduce Filter

let arr = [1,2,3,4,5,6,7];
let a = arr.map((ele,index,arr)=>{
    return ele;
});
// console.log(a);


let filter = arr.filter((ele)=>{
    return ele>3;
});
// console.log(filter);


let sum = arr.reduce((a,b,index, arr)=>{
    return a+b;
});
// console.log(sum);



