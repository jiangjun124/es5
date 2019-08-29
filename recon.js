// 重构sort-------------------------
// Array.prototype.mysort=function(handler){
// 	for(var i=0;i<this.length-1;i++){
// 		for(var j=i+1;j<this.length;j++){
// 			var a=this[i];
// 			var b=this[j];
// 	 		var result=handler(a,b);

// 	 		if(result < 0){
// 	 			result= 0;
// 	 		}
// 	 		 if(result){
// 	 		 	var t=this[i];
// 	 		 	this[i]=this[j];
// 	 		 	this[j]=t;
// 	 		 }else{
// 	 		 	continue;
// 	 		 }
// 		}
// 	}
// 	return this;
// }

// var arr=[16,25,18,42,3];

// var result = arr.mysort(function(a,b){
// 	if(a > b){
//            return 1;
// 	}else{
// 		 return  -1;
// 	}
// })
// console.log(result);


// 重构forEach-------------------------
// Array.prototype.myforEach=function(handler){
// 		for (var i = 0; i < this.length; i ++){
// 			handler(this[i],i,this);
// 		}
// 	}
// var arr1=[1,2,3,4,5,6];
// arr1.myforEach(function(item,index,arr){
//      console.log(item,index,arr);
// });
// 重构every----------------------
//数组中所有的数都是奇数吗？

// Array.prototype.myevery=function(handler){
// 	var flag=true;
// 	for(var i=0;i<this.length;i++){
// 		var item=this[i];
// 		var result=handler(item,i,this);
// 			if (result) {
// 				continue;
// 			}else{
// 				flag=false;
// 		 		break;
// 			}
		
// 	}
// 	return flag;
// }
// console.log(arr.myevery(function(item){
// 	return item %2 !=0;
// }))

// 重构some----------------------------
// Array.prototype.mysome=function(handler){
// 		var flag=false;
// 		for(var i = 0 ; i < this.length ; i++){
// 		var	result=handler(this[i],i,this);
// 			if(!result){
// 				continue;
// 			}else{
// 				flag=true;
// 				break;
// 			}
// 		}
// 		    return flag;
// 	}
// var arr1=[1,2,3,4,5,6];
// var res=arr1.mysome(function(item){
// 	return item>5;
// });
// console.log(res);

// 重构filter----------------------------
// Array.prototype.myfilter=function(handler){
// 	var narr=[];
// 	var j=0;
// 	for(var i=0;i<this.length;i++){	
// 		var result=handler(this[i],i,this);
// 		if(result){
// 			narr[j]=this[i];
// 			j++;
// 		}else{
// 			continue;
// 		}
// 	}
// 	return narr;
// }
// var arr1=[1,2,3,4,5,6];
// var res=arr1.myfilter(function(item){
// 	return item>3;
// });
// console.log(res);
// Array.prototype.myfilter=function(handler){
// 	var narr=[];
// 	var j=0;
// 	for(var i=0;i<this.length;i++){	
// 		var result=handler(this[i],i,this);
// 		while(result){
// 			narr[j]=this[i];
// 			j++;
// 			break;
// 		}
// 	}
// 	return narr;
// }
// var arr1=[1,2,3,4,5,6];
// var res=arr1.myfilter(function(item){
// 	return item>3;
// });
// console.log(res);

//重构map-------------------------------
// Array.prototype.mymap=function(handler){
// 	var narr=[];
// 	for(var i=0;i<this.length;i++){	
// 		narr[i]=handler(this[i],i,this);
// 	}
// 	return narr;
// }
// var arr1=[{name:"xiaomiao",id:1},
// {name:"jiangjun",id:2},
// {name:"dengww",id:3}
// ];
// var res=arr1.mymap(function(item){
// 	return item.name;
// });
// console.log(res);