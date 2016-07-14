var show = document.getElementById('show');
var ac = document.getElementById('ac');
var num_0 = document.getElementById('num_0');
var num_1 = document.getElementById('num_1');
var num_2 = document.getElementById('num_2');
var num_3 = document.getElementById('num_3');
var num_4 = document.getElementById('num_4');
var num_5 = document.getElementById('num_5');
var num_6 = document.getElementById('num_6');
var num_7 = document.getElementById('num_7');
var num_8 = document.getElementById('num_8');
var num_9 = document.getElementById('num_9');
var num_0 = document.getElementById('num_0');
var dot = document.getElementById('dot');
var equal = document.getElementById('equal');
var add = document.getElementById('add');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var sin = document.getElementById('sin');
var cos = document.getElementById('cos');
var tan = document.getElementById('tan');
var percent = document.getElementById('percent');
var sqrt = document.getElementById('sqrt');
var num = [0];
var number = num.join('');
var first = 0;
var second;
var operator;
ac.onclick = function(e){
	num = [0];
	show.innerText = num.join('');
}
num_0.onclick = function(e){
	num.push(0);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_1.onclick = function(e){
	num.push(1);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_2.onclick = function(e){
	num.push(2);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_3.onclick = function(e){
	num.push(3);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_4.onclick = function(e){
	num.push(4);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_5.onclick = function(e){
	num.push(5);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_6.onclick = function(e){
	num.push(6);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_7.onclick = function(e){
	num.push(7);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_8.onclick = function(e){
	num.push(8);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
num_9.onclick = function(e){
	num.push(9);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
}
dot.onclick = function(e){
	num.push('.');
	number = num.join('');
	show.innerText = number;
}
add.onclick = function(e){
	first = number;
	operator = 1;
	num = [0];
}
minus.onclick = function(e){
	first = number;
	operator = 2;
	num = [0];
}
multiply.onclick = function(e){
	first = number;
	operator = 3;
	num = [0];
}
divide.onclick = function(e){
	first = number;
	operator = 4;
	num = [0];
}
equal.onclick = function(e){
	num = [0];
	switch(operator){
		case 1: 
			first = parseFloat(first) + parseFloat(number);
			number = first;
			break;
		case 2:
			first = parseFloat(first) - parseFloat(number);
			number = first;
			break;
		case 3: 
			first = parseFloat(first) * parseFloat(number);
			number = first;
			break;
		case 4:
			first = parseFloat(first) / parseFloat(number);
			number = first;
			break;
	}
	console.log(number);
	show.innerText = Math.round(number*100000000)/100000000;
}
sin.onclick = function(e){
	num = [0];
	number = Math.sin(parseFloat(number) * (Math.PI / 180));
	show.innerText = Math.round(number*10000000000)/10000000000;
}
cos.onclick = function(e){
	num = [0];
	number = Math.cos(parseFloat(number) * (Math.PI / 180));
	show.innerText = Math.round(number*10000000000)/10000000000;
}
tan.onclick = function(e){
	num = [0];
	number = Math.tan(parseFloat(number) * (Math.PI / 180));
	show.innerText = Math.round(number*10000000000)/10000000000;
}
percent.onclick = function(e){
	num = [0];
	number = parseFloat(number) * 0.01;
	show.innerText = Math.round(number*10000000000)/10000000000;
}
sqrt.onclick = function(e){
	num = [0];
	number = Math.sqrt(parseFloat(number));
	show.innerText = Math.round(number*10000000000)/10000000000;
}




