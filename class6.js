function outer(){
    let user = 'gla';
    function inner(){
        console.log(user);
    }
    return inner;
}

let inner = outer();
inner();


// It is the example of closure..
 // In it, the function can access the variable outer of it's scope
 
 