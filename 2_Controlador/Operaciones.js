function genRangeNumber(start,finish){
	return (Math.round((finish-start)*Math.random())+start);
}

function strCatSum(str2,num){
	str2 = str2 + " + " + num;
	return str2;
}

function strCatSub(str2,num){
	str2 = str2 + " - " + num;
	return str2;
}

function strCatMul(str2,num){
	str2 = str2 + " \\times " + num;
	return str2;
}

function strCatDiv(str2,num){
	str2 = str2 + " \\over " + num;
	return str2;
}

function strStart(){
	return "${\\Huge  ";
}

function strFinish(str){
	return str+"}$"
}
