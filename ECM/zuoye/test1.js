var jiangjun=function(){
    console.log("这个函数的this为:",this);
}
jiangjun();
var obj={
    name:"jiangjun",
    jj:jiangjun
}
obj.jj();
var arr=[
    "dengww",
    jiangjun
]
arr[1]();
var name="xiaomiao";
var dd=jiangjun;
var arr1=[
    name,
    dd
]
arr1[1]();
