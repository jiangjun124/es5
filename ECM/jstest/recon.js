// 重构sort
// 重构forEcah
// 重构every
var arr=[1,2,5,6,7];
//数组中所有的数都是奇数吗？
Array.prototype.myevery=function(handler){
	var flag=true;
	for(var i=0;i<this.length;i++){
		var item=this[i];
		var result=handler(item,i,this);
	if (result) {
		continue;
	}else{
		flag=false;
		 break;
	}
    }
	return flag;
};
console.log(arr.myevery(function(item){
	return item %2 !=0;
}))
// 重构some
// 重构filter
//重构map
