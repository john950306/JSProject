/**
 *  0727 카페 추가 자바스크립트 예제
 */


//var str  = '이요한\n안성호\n이문규';


var str  = 
`이요한
안성호
이문규`;  //` 팩틱(그레이브 악센트) 을 써준다 
//엔터가 그냥 먹어버린다 \n같은거안써도알아서 엔터취급해줌 

console.log(str);


var name = '홍길동';
var age = 30;
var address = '서울';

//이름  : 홍길동 , 나이 : 30 , 주소 : 서울 으로 표현하고싶다면
//투스트링하면 제일좋지만! 

//console.log('이름 : '+name+' 나이 : '+age +' 주소 : '+address);//라고도 쓸수있는뎅! 여기서도 ``을쓸수있다

console.log(`이름 : ${name} 나이 : ${age} 주소 : ${address} `); //이렇게도 사용가능 !!!! 
//투스트링을 이렇게 하면 좀더 편리할거같다 !!



//간결한 구문 람다표현식    (함수축약기법)

function func(f){
	console.log('f1');
	f();//f라는 변수를받는데 f는 함수다 
	console.log('f2');
}



//func(function(){
//	console.log(`뻥 쎤 !`);
//});
//축약 할수있다  어떻게하냐 !
func(()=>{
	console.log(`뻥 쎤 !`);
});
//요로코롬.



var arr = [];
arr.push(5);
arr.push(3);
arr.push(2);
arr.push(6);
arr.push(8);


// 배열 전체 출력
//arr.forEach(function(value){
//	console.log(value);
//});
//이걸또 람다로 바꾸면 !
arr.forEach((value)=>{
	console.log(value);
});



//multi = function (x,y){
//	return x*y;
//}
//이것도 축약해보자 !

//multi =(x,y)=>{
//	return x*y;
//}//근데 한줄짜리면 더 축약을 할수있는데 !!!!

multi = (x,y)=>  x*y;    //이렇게!!!!!  근데 그게 값이면 리턴도 지워주면 그냥 리턴시켜준다 



console.log(multi(3,4));



//함수의 초기값 설정하기

function add(a= 0,b = 0 ){ // 함수 초기화값   b= 0 은 b에누가 값을넣으면 그걸쓰고 안넣는다면 0을쓴다 
	return a + b ;
}

console.log('-----------------------------');
console.log(add());
console.log(add(3));
console.log(add(3,5)); 
//함수초기화 값은   디폴트로 ()안에 쓸수있다 ! 넣으면 그값을쓰고 안쓰면 디폴트 값을 쓴다 

 






























