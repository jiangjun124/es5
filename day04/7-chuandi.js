function change(a){
    a={
        name:"jiangjun",
        age:12
    }
    a.age++;
    console.log(a.age);
}
var obj={
    name:"jiangjun",
    age:12
};
console.log(obj.age);
change(obj);
console.log(obj.age);

