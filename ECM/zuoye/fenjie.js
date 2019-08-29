
    var num4 =90;
    for(var n=2;n<=num4;n++){
        if(num4/n==1){
            console.log(n);
        }else{
            while(num4%n==0){
                num4=num4/n;
                console.log(n);
            }
        }
    }

