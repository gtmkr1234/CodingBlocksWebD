function a(){
    console.log('a');
    function b(){
        console.log('b');
    }
    return b;
}

// function b(){
//     console.log('b');
// }
// a(b);  Higher Order Functions


// a()(); // Calling the function b that is returned by function a 

let arr = [1,2,3,4, 'hello', 'gla', true, false];

function fun(arr){
    var res = []
    for(let i of arr){
        if(typeof i === 'number'){
            res.push(i);
        }
    }
    return res;
}

console.log(fun(arr));