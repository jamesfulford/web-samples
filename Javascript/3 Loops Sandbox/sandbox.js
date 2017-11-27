
var i = -10;
while(i <= 19){
	console.log(i);
	i++;
}

for(var i = -10; i <= 19; i++) {
	console.log(i);
}



var e = 10;
while(e <= 40){
	console.log(e);
	e += 2;
}

for(var e = 10; e <= 40; e += 2) {
	console.log(e);
}



var o = 300;
while(o <= 333) {
	if(o % 2 === 1) {
		console.log(o);
	}
	o++;
}

for(var o = 300; o <= 333; o++) {
	if(o % 2 !== 0) {
		console.log(o);
	}
}



var f = 5;
while(f <= 50){
	if(f % 15 === 0) {
		console.log(f);
	}
	f++;
}

for(var f = 5; f <= 50; f++) {
	if(f % 15 === 0) {
		console.log(f);
	}
}
