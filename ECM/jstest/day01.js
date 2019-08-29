// 合并
var arr1=[1,2,3,];
var arr2=[4,5,6];
var arr3=[7,8,9];
// 输出合并，返回合并后的值，不改变原值
console.log(arr1.concat(arr2,arr3));
// 截取
var arr4=[1,2,3,4,5,6,7,8];
// 输出截取，返回截取的片段，不改变原值
console.log(arr4.slice(2,5));
// 替代，改变原值
var arr5=[1,2,3,4,5,6,7,8];
// 输出的是改变后的数据
console.log(arr5.splice(1,3,9,9),arr5);
var arr6=[3,4,5,2,43,765];
// 遍历item代表this[i]，index代表索引，arr6代表原数组
arr6.forEach(function(item,index,arr6){
	console.log(item,index,arr6);
})
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
console.log(student.every(function(item,index,arr){
	return  item.id>2;
}));
console.log(student.some(function(item,index,arr){
	return item.id>2;
}));
console.log(student.filter(function(item,index,arr){
	return item.id>2;
}));
console.log(student.map(function(item,index,arr){
	return item.name
}));