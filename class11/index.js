let ele = document.querySelector('div');
let h1 = document.createElement('h1');
h1.innerText = "Hello ";
ele.appendChild(h1);

let yu = document.getElementById('yu');

let inputE = document.querySelector('input');
inputE.addEventListener('input', (event)=>{
    yu.innerText = event.target.value; // adds the input to the console
});



yu.addEventListener('click', ()=>{
    yu.style.fontSize = 100px;
});
