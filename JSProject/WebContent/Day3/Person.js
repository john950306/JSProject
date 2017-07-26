/**
 * 0726 9시~
 */
console.log('클래스 , 생성자 , 메서드 ');

function Person(name){
	this.name = name;
}
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype.setName = function(name){
	this.name = name
}
Person.prototype.getName = function(){
	return this.name;
}

Person.prototype.setAge = function(age){
	this.age = age
}
Person.prototype.getAge = function(){
	return this.age;
}

//투스트링 재정의
Person.prototype.toString = function(){
return 'name : '+ this.name ;
}






















































































