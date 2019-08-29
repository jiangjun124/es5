//while
var n=10;
var f=1;
while(n>1){
    f=f*n;
    n--;
}
console.log(f);

//do while
var a=10;
var b=1;
do{
    b=b*a;
    a--;
}while(a>1)
console.log(b);
// for
var a=1;
for(var i=10;i>=1;i--){
    a=a*i;

}
console.log("10!="+a);
// 递归函数
function digui(x){
    if(x==1){
        return 1;
    }
    return x*digui(x-1);
}
var result=digui(10);
console.log(result);


