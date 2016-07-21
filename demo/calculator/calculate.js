var show = document.getElementById('show');
var ac = document.getElementById('ac');
var dot = document.getElementById('dot');
var equal = document.getElementById('equal');
var sin = document.getElementById('sin');
var cos = document.getElementById('cos');
var tan = document.getElementById('tan');
var percent = document.getElementById('percent');
var sqrt = document.getElementById('sqrt');
var num = [0];
var number = 0;
var first = 0;
var second;
var operator = [];

ac.onclick = function(e){
	num = [0];
	number = 0;
	first = 0;
	operator = [];
	show.innerText = number;
}

dot.onclick = function(e){
	num.push('.');
	number = num.join('');
	show.innerText = number;
}

function numClick(x){
	num.push(x);
	if(num[0]==0&&num[1]!='.'){
		num.shift();
	}
	number = num.join('');
	show.innerText = number;
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

function operClick(y){
	operator.push(y);
	num = [0];
	if(operator.length == 1){
		first = parseFloat(first) + parseFloat(number);
	}else{
		switch(operator[operator.length-1]){
			case 1: 
				first = parseFloat(first) + parseFloat(number);
				break;
			case 2:
				first = parseFloat(first) - parseFloat(number);
				break;
			case 3: 
				first = parseFloat(first) * parseFloat(number);
				break;
			case 4:
				first = parseFloat(first) / parseFloat(number);
				break;
		}
	}
	show.innerText = Math.round(first*100000000)/100000000;
}

equal.onclick = function(e){
	switch(operator[operator.length-1]){
		case 1: 
			first = parseFloat(first) + parseFloat(number);
			break;
		case 2:
			first = parseFloat(first) - parseFloat(number);
			break;
		case 3: 
			first = parseFloat(first) * parseFloat(number);
			break;
		case 4:
			first = parseFloat(first) / parseFloat(number);
			break;
	}
	show.innerText = Math.round(first*100000000)/100000000;
	num = [0];
	number = 0;
	operator = [];
}






