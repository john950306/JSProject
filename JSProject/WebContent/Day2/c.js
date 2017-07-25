/**
 * 0725 
 */

function f1 (){
	
}
function f2 (x){
	return x;
}
function f3 (x,y){
	return x+y;
}
function f4 (x,y,z){
	console.log('f4매개변수갯수 '+ this.length);
	return x+y+z;
}
f4(1,2,3);

//f4.iname = '이요한'; // 함수도객체기때문에 프로퍼티를  추가해줄수있음 
//함수의 랭쓰는 매게변수의 갯수를 센다 
console.log(f1.length);
console.log(f2.length);
console.log(f3.length);
console.log(f4.length);



































































