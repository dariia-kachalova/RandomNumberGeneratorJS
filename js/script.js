const num = document.getElementById('number');
const btn = document.getElementById('generate');
const evens = document.getElementById('evens');
const odds = document.getElementById('odds');


const arr = [];


while (arr.length < 20) {
	var r = Math.floor(Math.random() * 100) + 1;
	if (arr.indexOf(r) === -1) arr.push(r);
}
//console.log(arr);


var lol = [] = arr.filter((r) => {
	return r % 2 === 0;
})
arr.push[lol]

lol.sort(function (a, b) {

	return a - b;
});


var olo = [] = arr.filter((r) => {
	return r % 2 === 1;
})
arr.push[olo]

olo.sort(function (a, b) {

	return a - b;
});


					


btn.addEventListener('click', () => {
//num.innerHTML = arr;
	evens.innerHTML = lol;
	odds.innerHTML = olo;
	
});