var arr=[
    "terry",
    12,
    function hell(){
        console.log("jiangjun")
    }
]
arr[2]();
//for
var arr1=[13,15,27,14,19];
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
//while
var j=0;
while(j<arr1.length){
    console.log(arr1[j]);
    j++;
}
//do-while循环
var k=0;
do{
    console.log(arr1[k]);
    k++
}while(k<5)
//增强for循环
for(var key in arr1){
    console.log(arr1[key]);
}
var a=arr1.push(6,7,8);
console.log(arr1);
console.log(a);
var b=arr1.pop();
console.log(arr1);
console.log(b);

var c=arr1.shift();
console.log(arr1);
console.log(c);

var d=arr1.unshift(1,2,3);
console.log(arr1);
console.log(d);

var e=arr1.sort();
console.log(arr1);


var f=arr1.sort(dddd);
var x;
var y;
function dddd(x,y){
    if(x>y){
        return 1;
    }
    else{
        return -1;
    }
}
console.log(arr1);
