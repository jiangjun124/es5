//重构push
Array.prototype.mypush =function(){
   var len = this.length;
    for(var key in arguments){
        var aaa = arguments[key];
        this[len + (+key)] = aaa;
    }
    return this.length;
}
//重构pop
Array.prototype.mypop =function(){
    var item = this[this.length-1];
    this.length--;
    return item;
}
//重构shift
Array.prototype.myshift =function(){
    var item = this[0];
    for(i=0;i<this.length;i++){
        this[i]=this[i+1];
    }
    this.length--;
    return item;
}
//重构unshift
Array.prototype.myunshift =function(){
    var aaa=[];
	for(var key in arguments){
		aaa[key]=arguments[key];
	}
	var len=aaa.length;
	for(var j in this){
		aaa[len+(+j)]=this[j];
	}
     for(var x=0;x<aaa.length;x++){
        this[x]=aaa[x];
     }
     return this.length;
}
//重构排序sort
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
//	return function comparator(){
//		for(var y=0;)
//	}
}

function handler (name){
	return function(a,b){
		var value1 = a[name];
		var value2 = b[name];
		return value1 - value2;
	}
}
//function dddd(age){
//	return function(a,b){
//		var value1 = a[age];
//		var value2 = b[age];
//		return value1 - value2;
//	}
//}
var arr=[
"jiangjunm",
"xiaomiao"
];
console.log(arr);
console.log(arr.mypush("hedajiba","lidajiba"),arr);
console.log(arr1.mysort());
console.log(arr.mypop(),arr);
console.log(arr.myshift(),arr);
console.log(arr.myunshift("pengdb","dengww"),arr);
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
var student=[
	{
		id:1,
		name:"terry",
		age:12,
		grade:89
	},
	{
		id:3,
		name:"larry",
		age:9,
		grade:92
	},
	{
		id:2,
		name:"tom",
		age:13,
		grade:99
	},
	{
		id:4,
		name:"jacky",
		age:11,
		geade:85
	}
]
//console.log(student.sort(dddd("age")));
console.log(student.sort(handler("name")));
