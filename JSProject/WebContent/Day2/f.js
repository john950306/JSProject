/**
 * 0725  this 
 */




//var a = 10 ; 

////var obj = {};
////obj.a =20;


//function foo(){
////var a = 20; // 함수의 a
////a = 20 ; // 8번째줄의 a
//this.a = 20 ;  // 함수내의 디스는 전역 변수를 가르킨다 

//};

//console.log(this.a);//이자리에서 this는   8번째 줄의 a를 가르킨다   
//foo();

//console.log(a);
//console.log(window.a); // 노드 로가면 윈도우가 안나온다 대신  global이나온다    
//console.log(this.a);//이자리에서 this는  윈도우를 가르킨다    
////함수에서 this와 객체에서 this는 다르다 


////함수내에서 this는 전역에있는 것이된다 



//this바인딩

//var value =100;


//var obj = {
//value : 1 ,
//func1 : function(){
//this.value+=1;
//console.log('func1 value :'+this.value );
//},
//func2 : function(){
//this.value+=1;
//console.log('func1 value :'+this.value );
//}

//};

//obj.func1();
//위는 밸류 1을 가르키지만 !

//var value =100;
//
//
//var obj = {
//		value : 1 ,
//		func1 : function(){
//			this.value+=1;
//			console.log('func1 value :'+this.value );
//
//			func2 = function(){// 함수 안의 함수는 1밸류를 가르키는게 아니고 100의 밸류를 가르킨다 쒸바 
//				this.value+=1;
//				console.log('func2 value :'+this.value );
//				func3 = function(){// 얘도 100을가르킴 함수안의 함수 안의 함수끼때문에 
//					this.value+=1;
//					console.log('func3 value :'+this.value );
//
//				}
//				func3();
//			}
//			func2();
//		}
//
//};
//
//obj.func1();
//
////참조를 못하니까   내가원하게 1만 참조하도록만들어보자


// 수저어어엉

var value =100;


var obj = {
		value : 1 ,
		func1 : function(){
			
			mythis=this;  //mythis 는 obj 를가르키는 것이다
			this.value+=1;
			
			console.log('func1 value :'+this.value );

			func2 = function(){// 함수 안의 함수는 1밸류를 가르키는게 아니고 100의 밸류를 가르킨다 쒸바 
				mythis.value+=1;
				console.log('func2 value :'+mythis.value );
				func3 = function(){// 얘도 100을가르킴 함수안의 함수 안의 함수끼때문에 
					mythis.value+=1;
					console.log('func3 value :'+mythis.value );

				}
				func3();
			}
			func2();
		}

};

obj.func1();









































