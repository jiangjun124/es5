function sayHello(){
    console.log("hello world");
}
sayHello();
var Hello=sayHello;
Hello();
var obj={
    name:"jiangjun",
    sayHello:sayHello
};
obj.sayHello();
