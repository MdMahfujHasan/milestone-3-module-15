var a = 6;
var b = 7;
var c = 8;
if(a>b){
    if(a>c){
        console.log("a is biggest");
    }
    else{
        console.log("c is biggest");
    }
}
else if(b>c){
    console.log("b is biggest");
}
else{
    console.log("c is biggest");
}

var x = 6;
var y = 7;
var z = 8;
var max = Math.max(x, y, z);
console.log(max);