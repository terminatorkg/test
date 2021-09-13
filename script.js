'use strict';

/*function hello(name){
	let phrase = `Hello, ${name}!`;

	say(phrase);
}
function say(phrase){
	alert(`** ${phrase} **`);
}*/
/*let age   =  prompt('Enter name ',100);
alert(`You is ${age} years old`);*/
/*function test(name,age){
    console.log(name,`Your ${age} years old`);
}

 let res =  prompt('Как тебя звать? ', '');
 alert(res);*/
/*
let a = prompt("Первое число",1);
let b = prompt("Второе число",7);

alert(+a + +b);*/
//alert('Сонный'< 'Сон');
/*function test(){
	alert("Test");
}
let btn  = document.getElementById('btn');
//btn.addEventListener("click",test);
btn.onclick = function() {
	alert('Hello')
	// body...
}
*/
/*let name = prompt("Какое официальное название JavaScript?","");
let message = "ECMAScript";
if (message == name) {
	alert('Верно');
}else {
	alert("Не знаете? ECMAScript");
}*/
/*let number = prompt('Enter number','');
if (number > 0) {
	alert(1);
}else if (number < 0 ) {
	alert(-1);
}else if (number == 0) {
	alert(0)
}
*/
/*let age = prompt('Возраст?',18);
let message = (age <3) ? 'Здраствуй малыш!' :
(age < 18) ? 'Привет':
(age <100) ? 'Здраствуйте':
'Какой необычный возраст';
alert(message);
*/

/*let res;
res = (a + b < 4 )? 'Мало': 
'Много';
*/
/*
let login = prompt('Введите логиин','');
let message = (login == 'Сотрудник')?'Привет':
(login == 'Директор')? 'Здраствуйте':
(login == '')?'Нет логина':
(login == login)?login:
'';
alert(message);
*//*
alert(1 || 0);
alert(true || 'no matter what');
alert(null || 1 || 0 || undefined || 2);
*//*
let a = 1;
let b = '2';

alert(+b);*/
//alert('nkdnv')
/*for (let a = 1, b=3, c=a*b; a<10; a++){
	alert(a);
}*/
/*
let a = prompt("первое число","1");
let b = prompt("Второе число", "2");
alert(+a + +b); 
*/
/*let age;
if (age >= 14 || age >=90  ) {

}
if (!(age >=14 && age <=90)) {

}
if (age<14 || age >90) {

}*/

/*if (-1 || 0 ) {
	alert(-1 || 0);
}*/

/*if (-1 && 0) alert('second');
if (-1 && 1) {
	alert(-1 && 1);*/


/*let admin = prompt('Кто там','');
let neznaiu = 'Я вас незнаю';
let login = 'Админ';
if (admin == login) {
       let parol = prompt('Пароль?','');
       let yaGlavnyi = 'Я Главный';

        if (parol == yaGlavnyi ) {
        	alert('Здраствуйте');
        }else if(parol == undefined || parol ==''){
        	alert('Отменено');
        }
         else if (parol != yaGlavnyi) {
        	alert('Неверный пароль')
        }
        
	}
	else if (admin == null || admin == '') {
	alert('Отменено');
	console.log(null)
}
    else if (admin != login ) {
	alert(neznaiu);

}

*/
/*
let a = prompt('Введите число','');
if(a == 1){
	alert('OK')
}else if(a == undefined){
	alert('Отменено');
} else if (a != 1) {
	alert('Неправильно')
}
*/
/*let sum = 0;
while (true) {
 let value =+prompt("Enter number", '');
 if (!value) break;
 sum+=value;
}
alert('Сумма ' + sum);
*/
/*
for (let i=0; i<10; i++){
 
 if(i % 2 ==0)
	continue;
alert(i);
}

console.log(typeof 0);*/
//alert(typeof null);
/*let num;
do{
	num = prompt("Enter the number big 100",0);

}while(num <=   100 && num);*/
/*let div = document.querySelector('div');

for (let i =0; i < 2; i++) {

	for(let k =0; k<5; k++){
		div.innerHTML+= '*';
	}
	div.innerHTML+= ' ';
}*/
/*let browser;
if (browser == 'Edge') {
		alert('You have got the Edge!');
} else if (browser =='Chrome' || browser == 'Firefox' || browser=='Safari' ) {
alert('Okey we suuport these browsers too');
}else {
	alert('We hope that this page  looks ok!');
}
*/
/*const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
	case 0:
		alert('Вы ввели число 0');
		break;
		case 1:
		alert('вы ввели число 1');
		break;
		case 2 :
		alert('Вы ввели число 2, а может и 3');
		break;
		case 3 :
		alert('Вы ввели число 2, а может и 3');
		break;

	default:
		alert('вы ввели число'+number);
		break;
}*/
/*
var userName = 'Василий';
function getAge(a, b= 'no text'){
      
//var userName = 'Вася';
	alert(a + b);
}
getAge(userName, 'ect');*/
/*	var a= +prompt('Enter the number ', '');
var b = +prompt('Enter the number','');
var res;
function pow (a, b) {
    if(a < 1 || b < 1 ) return false;
    else
	alert(res = a**b);

}
pow(a,b)*/
/*let age = prompt('Enter','0');

function one(){
	alert('One');
}
one();*/
/*let funk = (a,b)=>a*b;
alert(funk(2,2));

let f = g =>alert(g);
f(9)

let tel = ()=>alert('Hi');
tel()
*/
/*let ask = (question, yes, no) =>
     confirm(question) ?yes(): no();
     
ask('Вы согласны?',
 ()=>
	alert("Вы согласились")
, ()=>
    alert("Вы отменили")
);
*/
/*function test(call){
	call();
}
test(()=>
	console.log('test'));
*/
/*
let a = 7;
console.log(a);

const b = new Promise(function(resolve, reject){
              setTimeout(function(){
              	resolve(a =99);
              }, 5000);
});
b.then(function(){
	console.log(a)
})
*/
/*
function t(a,b){
   setTimeout(function(){
   	a();
   }, 3000)
   b();
}
t(()=>{
	console.log('a');
}, ()=>{
	console.log('b')
	});
*/

/*let aziz = 'aziz';
function outName(){
	alert(aziz);
}
outName();
*/
/*
let aziz = {
    name:'Aziz',
    age:'37',
    'likes bird':'street',
}
let aziz2 = {
    name:'Aziz2',
    age:'55',
    'likes bird':'street',
    run:function(){
    	alert("run")
    }
}
let key = prompt('Что вы хотите узнать ','')
alert(aziz2[key]);

let fruit = prompt('Какой фрукт купить?','');
let bag = {
	[fruit]:5,
};
alert(bag[fruit]);
*/
/*
let obj = {name:'Aziz', age:22};
delete obj.name;
alert('age' in obj);
*/
/*
let n = '4';
alert(typeof n);
let n2 = '+4';
alert(typeof n);
*/

/*let codes = {
	'49':'Germany',
	'41':'Shwesarland',
	'1':'USA'
}
for(let code in codes){
	alert('+' + code);
*/
/*
const user ={
	name:"Aziz",
	age:37
}
user['name'] = 'Pete';
alert(user.name);
*/
/*
let sal = {
	John:100,
	Ann:160,
	Pete:130
}
let sum=0;
  for(let key in sal){
  	
  sum += sal[key];

}
alert(sum);*/

/*let menu = {
	width: 200,
	height: 300,
	title: 'My menu'
}*/
/*
function multiNum(obj){
       
	for(let key in obj){
    if(typeof obj[key] == 'number')
    	obj[key] = obj[key] *2;
    // let t = obj[key];
     alert(obj[key] );
 } 
}

multiNum(menu)*/

/*let user = {
	name:'Aziz',

};

let admin = user;
admin.name = 'Petr';
console.log(user.name);
/*let a = {};
let b = {};
alert(a == b)*/

/*let user2 = {
	name:'Aziz',
	age : 37,
}
let clone = {};

  for(let key in user2){
	clone[key] = user2[key];
}

clone.name = 'Petr';
alert(user2.name);
*/
/*let user2 = {
	name:'User2',
	age : 37,
	sizes: {
		height: 174,
		width:60
	}
}
let clone = _.cloneDeep(user2);
console.log(user2.sizes.height);

let got = {
	name:'got'};
got = null;
alert(got);
*/
// let athis = {
// 	name:'Aziz',
// 	age:'37',
// };
/*console.log('In programm')
console.log(this);*/

/*function abc(){
	console.log('In function abc');
	console.log(this);
	this.style.background = 'red';
}*/

//abc();
/*
let p = {
	name:"Petr",
	age:37,
	func: function(){
		console.log('p');
		console.log(this);
	},
	t:abc
};
p.t();*/

//let p = document.querySelector("p").onclick = abc;
/*let p = document.querySelectorAll('p');
p.forEach(function(event){
     event.onmousemove = abc;
})
p.forEach(function(event){
     event.onclick = white;
})
*/
/*var block = document.querySelector('.block');

block.addEventListener('mouseenter', function () {
    block.classList.add('color1');
});
block.addEventListener('mouseleave', function () {
    block.classList.remove('color1');
});

let calculator = {
	a:+prompt('a',''),
	b:+prompt('b',''),
     read(){
     	return calculator;
     },
     sum(){
     	return this.a + this.b;
     },
     mul(){
         return this.a * this.b;
     }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

*/
/*let ladder = {
	step:0,
	up(){
	 this.step++;
	 return this;
		
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function(){
		alert(this.step);
		return this;
	}
};
 ladder.up().up().down().up().showStep();
 alert(ladder.up());
 console.dir(ladder);*/

let objects = [{aziz:37}, {nura:12}];
console.log(objects.length)
let deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);


let audi = {
   name:'Audi 80',
   maxSpeed:200,
   pioneer:{
   	width:100,
   	height:200
   }
}
let bmw = Object.assign({}, audi);
//let bmw = _.cloneDeep(audi);
//let bmw = audi;
bmw.pioneer.width = 800;
console.log(bmw.pioneer.width);
console.log(bmw === audi);
alert('Alert')



