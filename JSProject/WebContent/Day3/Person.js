/**
 * 0726 9시~
 */
console.log('클래스 , 생성자 , 메서드 ');

//function Person(name){
//	this.name = name;
//}
//위가아래로 오버라이딩됐다
function Person(name,age){
	if(name === undefined){
		this.name = '이름없음'
	}else{
		this.name = name;
	}
	if(age === undefined){
		this.age = '나이불명'
	}else{
		this.age = age;
	}
	
	
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






















































































