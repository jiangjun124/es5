 var a;
Array.prototype.mysort=function(){

	for(var x=0;x<this.length;x++){
		this[x]=String(this[x]);
	}
	for(i=0;i<this.length-1;i++){
		for(j=i+1;j<this.length;j++){
console.log(arr1.mysort());
			if(this[i]>this[j]){
				var t;
			    t=this[i];
				this[i]=this[j];
				this[j]=t;

			}
		}
	}
	return this;
}
//	return function comparator(){
//		for(var y=0;)
//	}
var arr1=[
	15,
	23,
	17,
	56,
	3
]
console.log(arr1.mysort());
console.log(arr1.mysort(function(a,b){
	if(a>b){
		return 1;
	}
	else{
		return -1;
	}
}));
//console.log(arr1);
//console.log(arr1.sort(comparator);