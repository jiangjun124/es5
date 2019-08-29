var str = "hellow world";
console.log('length',str.length);
console.log('charAt',str.charAt(4));
console.log('charCodeAt',str.charCodeAt(4));
console.log('charCodeAt',str.charCodeAt(6));
console.log('indexof',str.indexOf('l'));
console.log('lastIndexOf',str.lastIndexOf('l'));
console.log('concat',str.concat(' hello js'));
console.log('slice',str.slice(1,4));
console.log('substring',str.substring(1,4));
console.log(parseInt(12.5));
//正则表达式
var rr="my1 name2 is3 jiangjun4 ";
var pattern=/[a-z]\d/igm;
var result=pattern.exec(rr);
console.log(result);
var result=pattern.exec(rr);
console.log(result);




// var jj="next to meet you ,too";
// var pattern=/[a-z]{3}/img;
// var result;
// while((result=pattern.exec(jj) )!= null){
// 	console.log(result);
//  }




//  静态网页的部署地址为：http://134.175.154.93:80/lianjia,svn服务器的地址为：svn://134.175.154.93/web1902/group0,ftp服务的地址为 ftp://134.175.154.93:22/

// url统一资源定位符
// 	协议://ip:port/path

// 	1) 获取所有的url
// 	2) 分别获取每个url的 协议,ip,port,path
// var str="静态网页的部署地址为：http://134.175.154.93:80/lianjia,svn服务器的地址为：svn://134.175.154.93/web1902/group0,ftp服务的地址为 ftp://134.175.154.93:22/"
// var pattern=/([a-z]{3,5}):\/\/([a-z0-9.]*):?(\d{0,6})(\/[a-z]{0,})/img;
// var result;
// while((result=pattern.exec(str))!=null){
// 	console.log("url:",result[0]);
// 	console.log("xieyi:",result[1]);
// 	console.log("ip:",result[2]);
// 	console.log("port:",result[3]);
// 	console.log("path:",result[4]);
// }
