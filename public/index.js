// const a = document.getElementsByTagName('h1');

const a = document.querySelectorAll('h1');
a.forEach(s => {
    s.style.color = 'red';
});
const b = document.querySelector('h1');

console.log(a);
console.log(b.innerText);

// document.querySelector returns a single element
// but document.querySelectorAll returns an array