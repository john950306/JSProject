/**
 * 0725 
 */

//함수는값으로 사용된다
//매개변수로 전달될수있다 (함수가)



var foo = function(a){
	console.log('foostart')
	a();
	console.log('foo1stop')
	
}
// 1 함수변수를선언한다
var num =function(){
	console.log('인생');
};

//2 함수를 호출 
// foo (num) // 함수는 값 

foo(function(){//함수는매게변수
	console.log('aaa');
});






//함수가 반환값으로 사용될수있다.

var foo1 = function(){
	console.log('t1');
	var f= function(){
		console.log('fff');
	};
	console.log('t2');
	
	
	// 로직구현
	return f;  //f함수가 반환됨
};



var foo2 = foo1();  //foo1 은 f함수를 반환하는 함수
foo2();
//console.log(foo2);


//소트
var arr = [3,2,5,4,8];

arr.sort(function(a,b){
	return b-a; //내림차
	return a-b; //오름차
});
console.log(arr);
//console.dir(arr);
//배열도 객체다 








































































