function add(a,b){
    console.log(arguments);
    var result =0;
   // return result;
    for(var key in arguments){
    val=arguments[key];
        result+=val;
    }
    console.log(arguments.length);
    return result;
}
var result=add(19,22,22,33,44,55);
console.log(result);
