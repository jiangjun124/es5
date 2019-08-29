
function handler (key){
	return function(a,b){
		var value1 = a[key];
		var value2 = b[key];
		if(value1>value2){
			return 1;
		}else{
			return -1;
		}
	}
}
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
		grade:85
	}
]
console.log("id的排序");
console.log(student.sort(handler("id")));
console.log("grade的排序");
console.log(student.sort(handler("grade")));
console.log("age的排序");
console.log(student.sort(handler("age")));
console.log("name的排序");
console.log(student.sort(handler("name")));
