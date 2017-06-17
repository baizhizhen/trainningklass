// require.config({
// 	paths:{
// 		jquery:'../lib/jquery-3.2.1.min.js'
// 	}
// });

require(['math','string'],function (math,string) {
	console.log(math.add(2,2));
	console.log(string.split('jason_bai','_'));
})