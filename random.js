var num1 = 5.99;
var result1 = Math.floor(num1);
console.log(result1);

var num2 = 5.01;
var result2 = Math.ceil(num2);
console.log(result2);

var num3 = 5.49;
var result3 = Math.round(num3);
console.log(result3);

for (i=0; i<10; i++){
var dice = Math.random() * 6;
dice = Math.round(dice);
console.log(dice);
}