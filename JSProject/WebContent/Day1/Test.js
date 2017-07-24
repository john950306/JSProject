/**
 *   0724 
 */






//1번 

for (i = 0 ; i < 9 ;i++){
	for(j=0 ; j < 9 ; j++){
		if(i!=0){
			console.log(i+1 +' * '+(j+1) +' = ' + (i+1)*(j+1) );
		}
	}
}



//2번 

var student = new Array(5);
for(i=0;i<5;i++){
	student[i]= {
			hakbun : null,
			name : null,
			age : 0,
			kor : 0,
			eng : 0,
			mat : 0,
			sum : 0,
			avg : 0,
			status : null,
	doSum : function(){
		this.sum = this.kor + this.eng + this.mat;
		return this.sum;
	},
	doAvg : function(){
		avg = Math.floor((this.doSum())/3);
		this.avg=avg
		return this.avg;
	},
	doStatus : function(){
		switch(this.doAvg()/10){
		case 10: case 9:
			this.status ='A';
			break;
		case 8:
			this.status ='B';
			break;
		case 7:
			this.status ='C';
			break;
		case 6:
			this.status ='D';
			break;
		default : 
			this.status ='F';
			break;
		}
		return this.status;
	},
	Info : function(){
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

console.log(student.length);
student[0].setHakbun('201513570');
student[0].setName('이요한');
student[0].setAge(23);
student[0].setKor(50);
student[0].setEng(80);
student[0].setMat(80);
student[0].doSum();
student[0].doAvg();
student[0].doStatus();


//var Info =student[0].Info();
console.log(student[0].Info());





