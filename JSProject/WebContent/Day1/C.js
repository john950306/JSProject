/**
 *   0724 
 */


var arr = ['a','b','c','d']; // 배열
console.log(arr);
console.log(arr.length); // length 사용가능 
console.log('arr 2번째 : '+arr[2]);
console.log('arr 마지막번째 : '+arr[arr.length-1]);
console.log(arr[2352523]); //오류는안나고 언디파인드가나온다  이런다고 랭쓰가 증가하진않는다

console.log(arr.length); 
arr.length =10; // 이러면  랭쓰가증가한다
console.log(arr.length) ; 
console.log('arr 마지막번째 : '+arr[arr.length-1]);

arr[20] = 'black'; // 얘도증가
console.log('arr 마지막번째 : '+arr[arr.length-1]);
console.log(arr.length) ; 
//배열에 가변적으로 값을 넣을수 있다 

arr.length =10;
console.log(arr); //언디파인드가 없는곳에만채워짐 


var brr = [2,3];
var num = brr[0]+brr[2]; // 언디파인드와 연산을하면 NaN(낫 어 넘버)값이나온다
console.log(num);
var num = brr[0]+'앙';
console.log(num);

// push() 매서드
var crr = ['a','b','c','sa'];
//배열은 객체다 

crr.name = '이요한';
for(c in crr ){
//	console.log(c);//배열의 번호    응용해보자
	console.log(c+' : '+crr[c]);
}
console.log(crr);
console.log('crr length : '+crr.length); //위에 프로퍼티는 길이는 늘어나지않는다

for(i = 0 ; i< crr.length;i++){
	console.log(i +" : "+crr[i]);
}


crr.push('f');

for(i = 0 ; i< crr.length;i++){
	console.log(i +" : "+crr[i]);
}
//아까 프로퍼티는 증가안했지만 푸쉬는 증가한다 

console.log(crr);
console.dir(crr);


//배열 생성자 함수 
var drr = new Array(5);//5개의배열이만들어짐 배열의 초기값은 언디파인드다 

console.log(drr.length);
console.log(drr);


var err = new Array(5,5,5,5);// 배열을만들면서 초기값을 넣어줄수있다 
console.log(err.length);
console.log(err);
//2차원배열
var frr = [[2,3,4],[5,6,7,8]];

console.log(frr.length);
console.log(frr[0].length);
console.log(frr[1].length);


// frr 배열의 전체 합을 구하여 출력하라 

var sum = 0;
for (i = 0 ; i< frr.length;i++ ){
	for(j = 0 ; j < frr[i].length ; j++){
		sum+= frr[i][j];
	}
};

console.log(sum);

//배열 만드는방법 2가지

//var 배열명 = [값,값];
//var 배열명 = new Array(길이);
//var 배열명 = new Array(값,값,값);


//2차원배열만드는방법 2가지 
//var 배열명 = [[값,값],[값,값,값]];

//var 배열명 = new  Array (3);
//배열명[0] = new Array(4);  
//배열명[1] = new Array(4);  
//배열명[2] = new Array(4);  

//값을지정안하면 무조건 값은 언디파인드 

//2차원배열 생성
var grr = new Array(3);
grr[0] = new Array(5);
grr[1] = new Array(5);
grr[2] = new Array(5);



console.log(typeof grr ); //배열의 타입은  객체다    타입오브 연산자 
console.log(typeof(grr) ); //배열의 타입은  객체다  타입오브 함수 (펑션)


console.log('=====');
var hrr = [1,'ㅅ',true,{}]; // {} 객체

for(i in hrr){
	console.log(typeof(hrr[i]));
}


function aaa(){
	return 'a';
}

console.log(typeof aaa); // 함수의 타입은 펑션
console.log(typeof aaa()); // 이건 함수의 리턴타입을알아볼때...



var month = 4; 
//월의 마지막 날을 구해서 출력하라 
var lastday=30;
switch(month){
case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
	lastday =31;
	break;
	
case 2: 
lastday =28;
	break;
	
default : 
	lastday =30;
	break;
	
}
console.log(month+"월은 "+lastday+" 일 까지있습니다");


var jumsu = 78;


//점수에 따른 수우미양가 구하기
var ranking='수';
switch(Math.floor(jumsu/10)){ //Math.floor 같은 Math 는 내장객체 라고 한다 
case 10 : case 9 :
	ranking = '수';
	break;
case 8 :
	ranking = '우';
	break;
case 7 :
	ranking = '미';
	break;
case 6 :
	ranking = '양';
	break;
default : 
	ranking = '가';
	break;
}
console.log(jumsu+" 점수의 등급은 "+ranking);


var num = 4.3; 
num = '이요한'; 
num = true; 
num = 100; 
num = '100'; 
switch(num){
case 4.3 : 
	console.log('된다');
	break;
case '이요한' :
	console.log(num);
	break;
case true :
	console.log(num);
	break;
case '100' :
	console.log(num);
	break;
}


//자바스크립트는 스위치에서 소숫점까지 case 로 쓸수있다
//자바스크립트에 스위치는 여러가지를 비교해서 쓸수있다 
// 하지만 숫자 100과 문자 100은 타입이달라서 안된다
// 스위치 케이스문은 데이터와 타입 을 비교한다 === 랑 같은비교 식


























