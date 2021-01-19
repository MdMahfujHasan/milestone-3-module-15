var numbers = [3, 5, 7, 4, 5, 4, 3, 9, 11];
var uniqueName = [];
for(i=0; i<numbers.length; i++){
    element = numbers[i];
    var index = uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);