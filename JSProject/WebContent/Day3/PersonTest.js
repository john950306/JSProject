/**
 * 
 */


var tacademy1 = new Person('이요한');
var tacademy2 = new Person('안성호');
var tacademy3 = new Person('이문규');

console.log(tacademy1.name);
console.log(tacademy2.name);
console.log(tacademy3.name);
console.log(tacademy1.name);

tacademy1.setName('민요한');
console.log(tacademy1.getName());


console.log(tacademy1);  
console.log(tacademy1.toString());




// 스튜던트 객체 가 펄슨 객체를 상속 

var student = new Student('2015135278');

console.log(student.getHakbun());
console.log(student);

var student2 = new Student('이요한','T0010000');

console.log(student2.getName(),student2.getHakbun());//스튜던트2는  이름과 학번을 넣어서 잘나오지만 


console.log(student.getName(),student.getHakbun());//1은 이름을안넣고 학번만넣어서  학번과 언디파인드가나온다 

//상속을제대로시킨것은 !
var student3 = new Student('민요한',23,'T700');
console.log(student3.getName(),student3.getHakbun(),student3.getAge());

console.log(student3.toString());

