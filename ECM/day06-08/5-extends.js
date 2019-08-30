//工厂函数模式
// function Dog(name,age){
// 	var obj=new Object();
// 	obj.name=name;
// 	obj.age=age;
// 	obj.sayName=function(){

// 	};
// 	return obj;
// };
// var d1=Dog("xiaomiao",21);
// console.log(d1);
// var d2=Dog("jiangjun",18);
// console.log(d2);

// 问题：
// 	1) 类型无法细分
// 		obj是Object类型
// 	2) 函数会重复创建/破坏封装性

// 构造函数模式
// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// 	this.sayName=function(name,age){
// 		console.log("my name is ",this.name)
// 	}
// }
// function person(name,age){
// 	this.name=name;
// 	this.age=age;
// 	this.sayName=function(name,age){
// 		console.log("my name is ",this.name)
// 	}
// }
// var d1=new Dog("xiaomiao",18);
// console.log(d1);
// d1.sayName();
// var d2=new person("jiangjun",18);
// console.log(d2);
// d2.sayName();


// 第二种
// var sayName=function(name,age){
// 		console.log("my name is ",this.name);
// 	}
// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// 	this.sayName=sayName;
// 	}
// function person(name,age){
// 	this.name=name;
// 	this.age=age;
// 	this.sayName=sayName;
// }
// var d1=new Dog("xiaomiao",18);
// console.log(d1);
// d1.sayName();
// var d2=new person("jiangjun",18);
// console.log(d2);
// d2.sayName();
// 问题：
// 1) 函数会重复创建/破解封装性




// 构造函数模式与原型相结合模式
// 第一种 直接在原型函数中加方法
// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// function person(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// Dog.prototype.sayName=function(){
// 	console.log("my name is ",this.name);
// }
// person.prototype.sayName=function(){
// 	console.log("my name is ",this.name);
// }
// var d1 = new Dog("xiaomiao",19);
// console.log(d1);
// d1.sayName();
// var d2 = new person("dengww",18);
// console.log(d2);
// d2.sayName();

// 第二种，引用其他对象方法，抛弃旧原型函数，
// 但对象的constructor必须指回prototype

// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// function person(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// Dog.prototype={
// 	constructor:Dog,
// 	sayName:function(){
// 		console.log("my name is ",this.name);
// 	}
// }
// person.prototype={
// 	constructor:person,
// 	sayName:function(){
// 		console.log("my name is ",this.name);
// 	}
// }
// var d1 = new Dog("xiaomiao",19);
// console.log(d1);
// d1.sayName();
// var d2 = new person("dengww",18);
// console.log(d2);
// d2.sayName();

// 继承
// 第一种原型链继承
// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// function person(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// Dog.prototype.sayName=function(){
// 	console.log("my name is ",this.name);
// }
// person.prototype= new Dog();
// person.prototype.constructor=person;
// person.prototype.sayName=function(){
// 	console.log("my name is ",this.name);
// }
// var d1 = new Dog("xiaomiao",19);
// console.log(d1);
// d1.sayName();
// var d2 = new person("dengww",18);
// console.log(d2);
// d2.sayName();


// // 借用构造函数
// function Dog(name,age){
// 	this.name=name;
// 	this.age=age;
// }
// function person(name,age){
// 	Dog.call(this,name,age);
// }
// person.prototype= new Dog();
// person.prototype.constructor=person;
// Dog.prototype.sayName=function(){
// 	console.log("my name is ",this.name);
// }
// var d1 = new Dog("xiaomiao",19);
// console.log(d1);
// d1.sayName();
// var d2 = new person("dengww",18);
// console.log(d2);
// d2.sayName();