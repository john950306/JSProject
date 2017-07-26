/**
 * 0726 2시~
 */

var arr = [3,5,6,7,7,8,9] ;

//
//var brr = arr.sort(function(a,b){return b-a}).slice(0,5);
//console.log(brr);


arr.sort(function(a,b){return b-a});
var brr = arr.slice(2,5);//arr 의 2번째부터 5개 를잘라와서 리턴시켜준다   소트를하고난후 실행하면 정렬된것부터 0 ~4까지 
console.log(brr);

//arr.sort();

//arr.forEach();

//arr.reverse();

//arr.push(1);
//arr.push(2);
//arr.push(3);
//arr.push(4); //배열 제일끝에 넣어짐 
//console.log(arr);

//arr.pop(); // 배열 제일끝에껄 빼옴 
//console.log(arr);

//var s = arr.join('-'); // 배열마다 연결해줄것  안입력해주면 , 
//console.log(s); 

//console.log(arr[0]);























