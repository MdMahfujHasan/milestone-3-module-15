var marks = [55, 67, 74, 58, 81, 90, 79];
var max = marks[0];
for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("max value of the array is:",max);