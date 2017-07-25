/**
 * 0725
 */


console.log('test');

var obj = {
		name : '안성호',
		setName : function(name){
			this.name = name
		}
};

//function fna(){// 함 수 리터럴
//	name : '이요한';
//}
var fna = function(){ // 함수 표 현 식  무기명함수 어나니머스펑션
	name : '김또깡';
}


fna();




var foo = function(a){
	a();
//	console.log(a);
}

var num =function(){
	console.log('aaa');
};   //함수도 값이다!!!!!!!!!!!!!!!!!!!!!
//foo(num);
foo(function(){
	console.log('aaa');
});




var foo1 =function(){
//	var fn = function(){
//		console.log('fn');
//	};
//	
//	return fn ;
	return function(){
		console.log('fn');
	};
	 
};


var foo2 = foo1();


foo2();


var  foo3  = function(a,b,c){
	return 3+2;
};

console.dir(foo3)

//2교시






























































































