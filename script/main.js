require.config({
	paths:{
		"jquery":"../lib/jquery/dist/jquery.min",
		"Vue":'../lib/vue/dist/vue.min',
		"lodash":'../lib/lodash/dist/lodash.min'
	}
});

require(['math','string','Vue','jquery','lodash'],
	function (math,string,Vue,$,_) {
	console.log(math.add(2,2));
	console.log(string.split('jason_bai','_'));
	console.log($('#app'));
	console.log(_);
	var objA ={
		'name':'jason'
	};
	var objB = _.cloneDeep(objA);
	console.log(objB)
	console.log(objA == objB);
	var vm = new Vue({
		el:'#app',
		data:{
			message:'hello world!'
		}
	});
})