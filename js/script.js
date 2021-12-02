const num = document.getElementById('number');
const btn = document.getElementById('generate');


const arr = [];


while(arr.length < 20){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
var evens = arr.filter((r) => {
	return r % 2 === 0;
})
console.log(evens)

var odds = arr.filter((r) => {
	return r % 2 === 1;
})
console.log(odds)

btn.addEventListener('click', () => {
	num.innerHTML = arr; 
});