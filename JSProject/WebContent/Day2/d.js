/**
 * 0725  생성자를이용한 객체생성
 */
// 뉴오브젝트 
var obj  = new Object();

// json 으로 객체생성하기
var car1 = {
		model : '람보르기니',
		speed : 400,
		color : 'red',
		break : function(){
			this.speed -= 10;
		},
		accel : function(){
			this.speed += 10;
		}
		
};

// 생성자 객체만들기
//function Car(model,speed,color){//일반적인 메서드는 소문자 객체생성하는 클래스의 이름앞자리는 대문자로 쓰는것을권장  //제이슨이아니기때문에  제이슨이랑은 다른방법으로사용
//	this.model = model;
//	this.speed = speed;
//	this.color = color;
//	this.brake = function(){
//		this.speed -= 10;
//
//	};
//	this.accel = function(){
//		this.speed += 10;
//
//	};
//};
//var car01 = new Car('아반떼',50,'red');
//car01.brake();
//console.log(car01.speed);
//var car02 = new Car('소나타',80,'green');
//car02.brake();
//console.log(car02.speed);
//var car03 = new Car('그랜져',100,'blue');
//
//console.log(car01.model);
//console.log(car02.model);
//console.log(car03.model);



// 메서드를 공용으로 만들자 프로토타입을 써서 

function Car(model,speed,color){
	this.model = model;
	this.speed = speed;
	this.color = color;
};

Car.prototype.brake = function(){//프로토타입에 추가 
	this.speed -= 10;
};
Car.prototype.accel = function(){
	this.speed += 10;
};
var car01 = new Car('아반떼',50,'red');
car01.brake();
console.log(car01.speed);
var car02 = new Car('소나타',80,'green');
car02.accel();
console.log(car02.speed);
var car03 = new Car('그랜져',100,'blue');


console.log(car03.toString());


console.log(car01.model);
console.log(car02.model);
console.log(car03.model);





















































