function a(fn){
    console.log('a');
    fn()
}
function b(){
    console.log('b');
}
a(b);