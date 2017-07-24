/**
 *   0724 
 */


var foo = {
		name : '안성호',
		age :20,
		major : 'compuer'
};

// foo.name 
// foo['name'] 으로도 접근가능 


//for in 연산자 ,함수 

for(var name in foo){ // 자바에서 for : 이랑비슷  여기서 name 은 프로퍼티의 이름이 나온다
	
//	console.log(name);
	//이름이 나오니까 응용하면
	console.log(name+' : '+foo[name]);  // 여기선 ''없이 변수명처럼사용하면 다나온다 
	//foo.name 으론안나오고 []를사용 
};

console.log(document); // document 는 웹에서 내부적으로 만들어져있는 객체변수다   (내장객체)
// 인베디드 
//빌드인 

for(var name in document){ // 도튜먼트 사용예제 
	
	console.log(name+' : '+document[name]);  
};



var a =100;
var b =100;

var obja = {
		value : 40
};// json 리터럴 

var objb = {
		value : 40
};// json 리터럴 

var objc = objb ;

console.log(a==b); // 100 100이면 트루가나올거같고 
console.log(obja == objb); // 내부적인값은 같지만  객체가다르니까 펄스가나올거같고
console.log(objb == objc);// c는 b를가르키니까 똑같으니 트루가나올거다 

// = 값넣는것,== 실제적인값 비교,=== 실제적인값과 타입 비교//자바스크립트 에서는 ===이것도있다 
var num1 = 10;
var num2 = '10';

if(num1 == num2){ // 실제적인값이같으면 트루
	console.log('같음');
}else{
	console.log('다름');
}

if(num1 === num2){  // 위에는 내용적인게같으면 트루  이거는 좀다르게 실제적인값과 타입까지 같아야 트루 
	console.log('같음');
}else{
	console.log('다름');
}




// 참조에의한 함수 호출

var a =100;
var objd = {value :100};

console.log('a : '+a);
console.log('objd.balue : '+objd.value);

//aaa();
function aaa(b,objt){//함수만들기  ()매게변수
	b= 90;
	objt.value = 30;
	console.log('aaa');
	console.log('b : '+b);
	console.log('objt.balue : '+objt.value);
} // 세미콜론 생략
aaa(a,objd);
console.log('a : '+a);
console.log('objd.balue : '+objd.value);
//기본형은 값이안변하지만
// 객체를전달해주고 그객체에 . 찍어서 값을수정하면 그값이 바뀐다 
//기본형과 객체 의차이 

//자바스크립트에선 인터프리터기때문에 자바(컴파일러) 와는 다르게 위에있는게있어야 아래 값이나온다 
//함수는 먼저정의한 후에 불러라 
























