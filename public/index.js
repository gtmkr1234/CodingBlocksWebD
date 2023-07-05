// const a = document.getElementsByTagName('h1');

const a = document.querySelectorAll('h1');
a.forEach(s => {
    s.style.color = 'red';
});

console.log(a);


// document.querySelector returns a single element
// but document.querySelectorAll returns an array