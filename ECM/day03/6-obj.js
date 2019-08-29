var obj={
    name:"jiangjun",
    age:12,
    gender:"mole"
};
console.log(obj);
var json = JSON.stringify(obj);
console.log("json字符串:");
console.log(json);


var str='{"name":"jiangjun","age":12,"gender":"mole"}';
var student = JSON.parse(str);
console.log(str);
console.log(student);
