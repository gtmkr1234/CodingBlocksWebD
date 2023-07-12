let input = document.querySelector('input');
let buttons = document.querySelectorAll('button'); // Returns all buttons in the form of an array

input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        input.value = eval(input.value);
    }
});


for(let button of buttons){
    button.addEventListener('click',(e)=>{
        let value = e.target.innerText;
        if(value==='C'){
            input.value = '';
        }
        else if(value==='='){
            input.value = eval(input.value);
        }
        else{
            input.value += value;
        }
    });
}




