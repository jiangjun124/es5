function buywater(money){
    var result;
    switch(money){
        case 2.5:
            result="农夫山泉";
             break;
        case 3:
            result="百事可乐";
             break;
        case 5:
            result="红牛";
            break;
        default:
            result="水";
    }
    return result;
}

result=buywater(3);
console.log(result);

var obj=new Object();
    obj.name="jiangjun";
    obj.age=22;
    obj.buywater=buywater;
console.log(obj);
console.log(obj.buywater(5));


