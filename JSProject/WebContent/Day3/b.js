/**
 * 0726 12시~
 */


function foo(){
	num = 10 ;   //var 가없으면 num 은 전역변수로 만들어진다 
	console.log('a');
	console.log('b');
	console.log('c');
}

function bar(){
	try{
		console.log('num : '+num);
		console.log('정상실행');
	}catch(e){
		console.log('오류발생'+e.message);

	}
	console.log('이요한');
}


//foo();
//bar();

var arr = [4,9,2,7,5];




//arr.sort();
//console.log(arr);


//arr.forEach(func){} // 전체만큼 내부함수가호출    배열에 잇는 갯수만큼 함수를 실행할수있는것은 포이치 함수   배열에만있는 메소드

arr.forEach(function(num){
	console.log('ab function : '+num);
});



//var ab = function(num){
//console.log('ab function : '+num);
//}


//for(i = 0 ;  i< arr.length; i++){
//ab(arr[i]);
//}

//console.log(arr);


function aaa(){
	var num =30;
	console.log('num : '+ num);
	return;
	num =40;
	console.log('num : '+ num);
}


aaa();

var num1 = '100 px'; 
var num2 = '200 px';

//   var num3 = num1 +num2 ;
var num3 = parseInt(num1)+parseInt(num2);  //스트링100을 인트 100으로 바꿈  숫자가아닌것이오면 다 버리고 숫자만 사용 



console.log(num3);


// eval 함수 

var str = '3*2*6+4';
//수식을 가지고있는 문자열  

console.log(str);
console.log(eval(str)); // 문자열에있는 수식을 연산해서 int값이나온다 



var su1 ='34';
var opt ='*';
var su2 ='21';

var su3 = eval(su1+opt+su2);


console.log(su3);

//숫자 나누기 0을했을때  Infinity 가나온다  자바는 아리스메틱 익셉션 
var su4 = 4;
var su5 ;

var su6 = su4/ su5;
if(isNaN(su6)){
	console.log('NaN발생')
	su6=0;
}else{
	console.log(su6);
	
}


//if(isFinite(su6)){
//	console.log('su6은 무한대수 ');
//	
//}else {
//	console.log(su6);
//	
//} 무한대수 검출 



































