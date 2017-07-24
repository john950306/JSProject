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
	var tot = x+y;
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
	var tot = x+y;
	return tot;
}


//위와  아래는같다 
//var obj2 = {name : '이요한',sum : sum};혹은
var obj2 = {name : '이요한',
		sum : function (x,y){  //함수 프로퍼티 
			var tot = x+y;
			return tot;
		}
};


var num = obj2.sum(10,4);
console.log(num);
//결국 함수도 값이될수있다 









//함수리터럴과 함수 표현식 과 함수생성자를 이용한 함수 생성

//function aaa(x,y,z){ // 함수리터럴 
//return x+y+z;
//}

//var aaa = function (x,y,z){ // 함수표현식
//return x+y+z;
//}

//var aaa = new Function('x','y','z','return x+y+z;'); // 함수생성자 

//var x = aaa(2,3,4);
//console.log(x);


//function abc(x,y){
//return x+y;
//}
//abc.iname = '함수맹애애앤';
//console.log(abc); //함수의 안에있는소스가 보여진다 
//console.log(abc.iname);
////abc.name //함수명이나옴


//-------------- 새로정리해서만듬 
//var name1 = 'Tacademy';
//var obj1 = {
//name1 : '이요한',
//doPrint : function(){
////var name1 = '안성호';
////console.log(name1);  // name1 : 이요한 이라는게 아직 정의가 끝나지않았으므로 밖에있는 티아카데미를 가르킨다  그렇다면 해결법은?!
//console.log(this.name1); // 이렇게하면 자기자신의 name1을 참조해서  이요한이 출력된다 
//}//함수도 값으로 
//};

//console.log(obj1.name1);
//obj1.doPrint();
//console.log(obj1);
//------------------


var name1 = 'Tacademy';
var obj1 = {
		name1 : '이요한',
		doPrint : function(name1){
			console.log('this : '+this.name1); 
			console.log('name1 : '+name1);
		}
};
console.log(obj1.name1);
obj1.doPrint('이문규');


//이름이 Data  프로퍼티x,y  메소드  doSum()x,y 값 합구하기 
//x,y 값을 할당하는 메소드와 얻어 오는 메소드를 객체 리터럴 로 만드시오


var Data = {
		x : 0,
		y : 0,
		setX : function(x){
			this.x=x;
		},
		setY : function(y){
			this.y=y;
		},
		getX : function(){
			return this.x;
		},
		getY : function(){
			return this.y;
		},
		doSum : function(){
			return this.x+this.y;
		}

};
//json 문자열로 만들어줄때 콜론뒤에 값이 무조건 있어야함  없으면 null이라도 있어야함 
//json 만들때는 네임 : 밸류  
Data.setX(30);
Data.setY(70);
var tot = Data.doSum();
console.log('x : '+Data.getX()+' y : '+Data.getY()+' tot : '+tot);




//1번 

for (i = 0 ; i < 9 ;i++){
	for(j=0 ; j < 9 ; j++){
		if(i!=0){
			console.log(i+1 +' * '+(j+1) +' = ' + (i+1)*(j+1) );
		}
	}
}



//2번 

var student = new Array(6);
for(i=0;i<5;i++){
	student[i]= {
			hakbun : 0,
			name : '',
			age : 0,
			kor : 0,
			eng : 0,
			mat : 0,
			sum : 0,
			avg : 0,
			status : '',
	doSum : function(){
		return Math.floor(this.kor+this.eng+this.mat);
	},
	doAvg : function(){
		return Math.floor(doSum()/3);
	},
	doStatus : function(){
		switch(doAvg()){
		case 10: case 9:
			status ='A';
			break;
		case 8:
			status ='B';
			break;
		case 7:
			status ='C';
			break;
		case 6:
			status ='D';
			break;
		default : 
			status ='F';
			break;
		}
	},
	sInfo : function(){
		return 'hakbun : '+this.hakbun+' name : '+this.name +' age : '+this.age +
		' kor : '+this.kor+ 'eng : '+ this.eng +' mat : '+this.mat
		+' sum : '+ this.sum  +' avg : '+this.avg +' status : '+this.status
	},
	getHakbun : function(){
		return this.hakbun;
	},
	getName : function(){
		return this.name;
	},
	getAge : function(){
		return this.age;
	},
	getKor : function(){
		return this.kor;
	},
	getEng : function(){
		return this.eng;
	},
	getMat : function(){
		return this.mat;
	},
	getSum : function(){
		return this.sum;
	},
	getAvg : function(){
		return this.avg;
	},
	getStatus : function(){
		return this.status;
	},
	setHakbun : function(hakbun){
		this.hakbun=hakbun;
	},
	setName : function(name){
		this.name=name;
	},
	setAge : function(age){
		this.age=age;
	},
	setKor : function(kor){
		this.kor=kor;
	},
	setEng : function(eng){
		this.eng=eng;
	},
	setMat : function(mat){
		this.mat=mat;
	},
	setSum : function(sum){
		this.sum=sum;
	},
	setAvg : function(avg){
		this.avg=avg;
	},
	setStatus : function(status){
		this.status=status;
	}
			
	};
	
}

















