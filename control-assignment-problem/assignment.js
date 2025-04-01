const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const r2 = Math.random();


if (randomNumber > 0.7 && r2 > 0.7
	|| randomNumber <= 0.2 || r2 <= 0.2) {
	alert("ALERT ALERT");
}

function creation() {
	let arr = [];
	for (let i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	console.log(arr);
	return arr;
}

const createdArray = creation();

for (const num of createdArray) {
	console.log(num);
}

console.log('------------------------');

for (let i = createdArray.length - 1; i >= 0; i--) {
	console.log(createdArray[i]);
}

console.log('------------------------');

let counter = 0;
while (counter < createdArray.length) {
	console.log(createdArray[counter]);
	counter++;
}

console.log('------------------------');
console.log(`1st number ${randomNumber} 2nd number ${r2}`);
