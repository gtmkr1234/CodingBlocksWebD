let ip = document.querySelector('input');
let bt = document.querySelector('button');
let ul = document.querySelector('ul');

bt.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.innerText = ip.value;
    ul.appendChild(li);
    ip.value = "";

    li.addEventListener('click',()=>{
        li.remove()
    });
});
