/**
 * 스튜던트객체가 펄슨 객체를 상속받는다 
 */




function Student(hakbun){
	this.hakbun=hakbun;
};
function Student(name,age,hakbun){
	
//	this.name = name;    //퍼슨이라는 함수를 호출해줘라 ! 
	Person.call(this,name,age);  // 부모의네임을 가지고와서 name이라는 값을넣어준다 
	
	this.hakbun=hakbun;
};
Student.prototype = new Person(); //스튜던트의 프로토타입을  펄슨으로 바꾼다    그렇게되면 퍼슨에있는 객체와 퍼슨에있는 메서드를 가져올수있다 

Student.prototype.setHakbun = function(hakbun){
	this.hakbun=hakbun;
};
Student.prototype.getHakbun = function(){
	return this.hakbun;
};