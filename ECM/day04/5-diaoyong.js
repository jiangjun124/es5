function foo(){
    console.log("my name is :",this.name);
}
var p1={
    name:"jiangjun",
    foo:foo
};
var p2={
    name:"dengww",
    foo:foo
};
foo();
p1.foo();
p2.foo();
p1.foo.call({name:"aaa"});
p2.foo.apply({name:"aaa"});
