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

