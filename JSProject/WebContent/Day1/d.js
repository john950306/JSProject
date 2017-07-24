/**
 *   0724 
 */

//-------
//function sum (x,y){ // 함수리터럴 
//var tot = x+y;
////console.log(tot);
//return tot;
//}

//var num = sum(3,4);
////[] 배열 리터럴  new Array();
////{} 객체 리터럴  new Object();
//console.log(num);
//-------

var sum = function (x,y){ //함수 표현식    어떤값에 함수를 대입   어나니머스 함수 
	var tot = x+y
	return tot;

}
console.log(sum(5,3));
var sum2 = sum;
var sum3 = sum2;  // 위처럼만들면 함수가 값이될수있다 

//이런것도가능하다
var obj = {};
obj.name = '이요한';
//obj.sum = sum;  혹은 
obj.sum=function (x,y){
	var tot = x+y
	return tot;
}


//위와  아래는같다 
//var obj2 = {name : '이요한',sum : sum};혹은
var obj2 = {name : '이요한',
		sum : function (x,y){  //함수 프로퍼티 
			var tot = x+y
			return tot;
		}
};


var num = obj2.sum(10,4);
console.log(num);
//결국 함수도 값이될수있다 



















