define(function(){
	var split = function(str,spliter){
		if (typeof str == 'string') {
			return str.split(spliter);
		}else{
			return [];
		}
	};
	return {
		split:split
	};
});