for(var i=100;i<1000;i++){
    var a=parseInt(i/100);
    var b=parseInt((i-a*100)/10);
    var c=i-b*10-a*100;
    if(a*a*a+b*b*b+c*c*c==i){
        console.log(i);
    }
}
