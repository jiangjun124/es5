
for(var i=101;i<=200;i++){
    var f=1;
    for(var j=2;j<i/2;j++){
        if(i % j== 0){
            var f=0;
            break;
        }
        }
    if(f==0){
        continue;
    }

    console.log(i);
}
