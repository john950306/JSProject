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
var drr = new Array(5);//5개의배열이만들어짐

console.log(drr.length);























