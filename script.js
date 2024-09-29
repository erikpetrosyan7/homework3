// 1
let n = 2345;
let sum = 0;

while (n > 0) {
	console.log(n % 10);

	n = (n - (n % 10)) / 10;
	sum += n % 10;
}
console.log(sum);

let a = 1099;
let sum2 = 0;

for (; a > 0; a = Math.floor(a / 10)) {
	console.log(a % 10);
	sum2 += a % 10;
}
console.log(sum2);

// 2

let num = 1222;
let sum3 = 1;

for (; num > 0; num = Math.floor(num / 10)) {
	console.log(num % 10);
	sum3 *= num % 10;
}
console.log(sum3);
let num2 = 45;
let sum4 = 1;

while (num2 > 0) {
	console.log(num2 % 10);
	sum4 *= num2 % 10;

	num2 = Math.floor(num2 / 10);
}
console.log(sum4);

// 3

let number1 = 455;
let sumOfNumber1 = 0;
let product1 = 1;

for (; number1 > 0; number1 = Math.floor(number1 / 10)) {
	sumOfNumber1 += number1 % 10;
	product1 *= number1 % 10;
}

let number2 = 1233;
let sumOfNumber2 = 0;
let product2 = 1;

while (number2 > 0) {
	sumOfNumber2 += number2 % 10;
	product2 *= number2 % 10;

	number2 = Math.floor(number2 / 10);
}
console.log(sumOfNumber2);
console.log(product2);

if (sumOfNumber2 === 0) {
	console.log('Cannot calculate.');
} else if (product2 % sumOfNumber2 === 0) {
	console.log(`Quotient is ${product2 / sumOfNumber2}.`);
} else if (product2 % sumOfNumber2 !== 0) {
	console.log(`Remainder is ${product2 % sumOfNumber2}.`);
}
