function calcuate(a,b) {
	console.log(a+b);
}



function callBack(a,call) {
	var b = 50;
	call(a,b);
}


callBack(50, calcuate);