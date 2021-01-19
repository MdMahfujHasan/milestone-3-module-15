var numbers = [21, 14, 8, 12, 3, 17, 10];
var sum = 0;
for(i=0; i<numbers.length; i++){
    element = numbers[i];
    sum = sum + element;
}
console.log("sum of the array elements is:",sum);

function getArraySum(numbers){
    var sum = 0;
    for(i=0; i<numbers.length; i++){
    element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
var result = getArraySum([1,2,3,4]);
console.log("sum of the array elements is:",result);
// console.log("sum of the array elements is:",getArraySum([1,2,3,4]));