/**
 *   0724 
 */


console.log('하이');  // ' " 똑같다 문자나 문자열 따로있는게아니고  자바스크립트는 문자열밖에없다

var num = 5;
var num1 = 2;
var num2 = num/num1;
console.log ('num2 : '+num2);
console.log ('floor(num2) : '+Math.floor(num2)); //floor 소숫점자리를다버림 정수로표현가능

var str = '이요한';
console.log('str : '+str);
num2 = str;
console.log ('num2 : '+num2);
//문자일때  0부터 글자하나씩 쓸수있다 num2[0~글자수-1]
console.log('num2 0번째문자 : '+num2[0]);

str[0]='김'; // 0번째에 김이라는 단어를넣었지만
console.log(str); // 여기선 수정된값이아니라 처음 그값이나왔다 
//자바에서는 한번생성된 문자열은 읽기만가능하고 수정은 불가능하다



num2 = 3;
 
//if(num2>=10){
if(num2){ //세미부울린때문에  오류가안뜬다  언디파인트,널,0이아닌것은 모두 참이기때문에  세미불린 참처리가된다
	console.log('맞음');
}else{
	console.log('틀림');
	
}


var a; //값이없으니 언디파인드 타입이자 값도 언디파인드 이다 

console.log(a); 

a= null;
console.log(a);  //널 

//자바스크립트는는 인터프리터
// 자바스크립트오브젝트는 는  {}로 이뤄져있는 문자열을 객체라고한다   json 
var newObject = new Object();
console.log(newObject);
newObject.name='이요한'; //객체안의 값을넣어주는것을 프로퍼티라고함 
newObject.age = 23;
console.log(newObject);
console.log(newObject.age);
console.log(newObject.sex); //값이없고 프로퍼티가 없어서 언디파인드가나왔다(내부적인 프로퍼티가추가된다)


//객체 리터럴 방식 으로 생성하기

var ban = {
	//객체만들기
		name : 'commit', // =말고 콜론으로 
		age : 40,// 프로퍼티와 프로퍼티사이는 , 로구분 
		sex :true // 한줄로써도전혀상관이없다

}; // 자바 스크립트 오브젝트 노테이션  json 
console.log(ban);
ban.name = 'com';
console.log(ban);
console.log(ban['name']); // 이런식으로도 쓸수있다 
console.log(ban.name);
ban['full-name']='ban name'; // 동적생성
console.log(ban['full-name']); //  동적생성한값을불ㄹ옴
console.log(ban.full-name); //  full -name 한값
console.log(ban.full);
console.log(ban.name);
//var name; 
console.log(name); // 언디파인드가안나오고   ''값이나온다 왜그러지 

//http://download.hanbit.co.kr/exam/2065/ 소스코드 

















