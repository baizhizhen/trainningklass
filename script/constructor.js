define(function(){
	var person = function(name,age){
		this.name = name;
		this.age = age;
		this.getName = function(){
			return this.name;
		};
		this.getAge = function(){
			return this.age;
		}
	};

	return {
		Person:person
	}
});