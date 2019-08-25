var obj1=new Object();
obj1.name="jiangjun";
obj1.age=12;
obj1.grader="mole";
console.log(obj1);
var obj2 = {};
obj2.name="jiangjun";
obj2.age=12;
obj2.grader="mole";
console.log(obj2);

console.log("name",Object.prototype.name);
console.log("name",obj1.name);
console.log("constructor",obj1.constructor);
console.log("name",obj1.hasOwnProperty('name'));
console.log("constructor",obj1.hasOwnProperty('constructor'));
console.log("name",obj1.propertyIsEnumerable("name"));
console.log("constructor",obj1.propertyIsEnumerable("constructor"));
