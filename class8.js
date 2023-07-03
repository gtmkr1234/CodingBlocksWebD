//Promise
let promise = new Promise((resolve, reject)=>{
    var isBool = true;
    if(isBool){
        resolve('gla resolved');
    }
    else{
        reject('gla rejected');
    }
});


promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

