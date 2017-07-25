/**
 * 0725  콜백함수
*/

//console.log('aaa');
////alert('확인') //창뜨는것 
////console.log('bbb');
//
//
//
//
//window.onload = function(){
//	alert('확인');
//	
//};//내웹페이지가 다읽혀졌을때 발생하는  이벤트
//
//console.log('bbb');
//
//alert('ccc');

////이미디아타 
//(function aaa(name){
//	console.log('aaa'+name);
//})('korea');





////내부함수 
//function parent (){
//	var a = 100; //클로벌 변수 전체에서 사용가능 
//	var b = 200;
//
//	console.log(a);
//	console.log(b);
//	
//	function child(){
//		var c =300;
//		console.log(a);
//		console.log(c);
//	};
//	child();
//};
//// 이너함수는  그밖에함수에서 만 호출할수있고   이너함수가 부모함수의 변수를 사용할수있다   
//
////function child(){
////	var c =300;
//////	console.log(a);
////	console.log(c);
////};
//
//parent();
////child();
//이너함수는 함수밖에서호출할수없었지만 리턴시키면 밖에서도 시킬수있다 


//내부함수 외부에서도 쓸수있도록 리턴시켜보자

//function p1(){
//	var name = 'korad'
//	var c1 = function (){
//		console.log(name);
//	};
//	
//	return c1;
//};
//
//
//var c2 =p1();
//
//
//c2();





//// 자바스크립트의 짱짱맨 기능
//function sum(){
//	console.log('args 랭쓰 : '+arguments.length); //모든함수는  arguments를가지고있다 
//	var tot = 0 ;
//	for (i = 0 ; i < arguments.length; i++){
//		console.log(arguments[i]);
//		tot += arguments[i];
//	};
//	
//	return tot;
//};
//sum();
//sum(1);
//sum(1,2);
//sum(1,2,3);
//tot = sum (1,2,3,54,5,1,2,4,5,1,2,5,3,1);
//console.log('합계 : '+tot);



//객체의 메서드 호출할때 this 바인딩 

var obj1 = {
		name : '이요한',
		getName : function(){
			return this.name;
		}
};
var obj2 = {
		name : '안성호',
		address : '서울'
		
};


obj2.getName = obj1.getName;

//console.log(obj1.name);
console.log(obj1.getName());

console.log(obj2.address);
console.log(obj2.getName()); // this 는 실행되는 시점에 this를 참조한다































































