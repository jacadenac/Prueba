function genFractionaryNumber(start,finish){
	var num1 = (Math.round((finish-start)*Math.random())+start);
	var num2 = (Math.round((finish-start)*Math.random())+start);

	var arr = new array(2);
	arr[0]=num1;
	arr[1]=num2;
	return arr;
}

function strCatSum(str2,num){
	str2 = str2 + " + " + "("+num[0] +"\\over" + num[1]+")";
	return str2;
}

function strCatSub(str2,num){
	str2 = str2 + " - " + "("+num[0] +"\\over" + num[1]+")";
	return str2;
}

function strCatMul(str2,num){
	str2 = str2 + " \\times " + "("+num[0] +"\\over" + num[1]+")";
	return str2;
}

function strCatDiv(str2,num){
	str2 = str2 + " \\over " + "("+num[0] +"\\over" + num[1]+")";
	return str2;
}

function strStart(num){
	return "${\\Huge  "+"("+num[0] +"\\over" + num[1]+")";
}

function strFinish(str){
	return str+"}$"
}

function FractSum(i,j){
	var res = new array(2);
	res[0]=(i[0]*j[1])+(i[1]*j[0]);
	res[1]=i[1]*j[1];
	return res;
}
function FractRes(i,j){
	var res = new array(2);
	res[0]=(i[0]*j[1])-(i[1]*j[0]);
	res[1]=i[1]*j[1];
	return res;
}

function FractMul(i,j){
	var res = new array(2);
	res[0] = i[0]*j[0]
	res[1] = i[1]*j[1]
	return res;
}

function FractDiv(i,j){
	var res = new array(2);
	res[0] = i[0]*j[0]
	res[1] = i[1]*j[1]
	return res;
}

function FractEqTest(i,j){
	return(i[0]==j[0]&&i[1]==j[1]);
}

function genRangeInteger(start,finish){
  return (Math.round((finish-start)*Math.random())+start);
}

function produceAvailableOperation(validOperations){
	var num=0;
	do{num=genRangeInteger(1,4)}while(validOperations[num]==0)
        return num;
}

function GenQuestion(startRange,finishRange,Operations,time,validOperations){
 	//decide the operations and the numbers
 	Operations++;
 	var arr = new Array(Operations);
 	var ope = new Array(Operations-1);
 	for (var i = 0; i < Operations; i++) {
 				//iterations initialize an operation and a number
                if(i!=0){
                        ope[i-1]=produceAvailableOperation(validOperations);
                        if(ope[i-1]==1){
                        	//for division
                            var aux = genFractionaryNumber(startRange,finishRange);
                            arr[i-1] = FractMul(aux,arr[i-1]);
                            arr[i]= aux;
 			}
                        else{
                        	//Not a division
                            arr[i]=genFractionaryNumber(startRange,finishRange);
                        }
 		}
 		else{
 			//First iteration
 			arr[i]=genFractionaryNumber(startRange,finishRange);
 		}
  	}

  	//back up the strings used
  	var arrOld = arr;
    var opeOld = ope;

  	//Calculate the LaTex string used

  	var LaTexString = strStart(arr[0]);
  	LaTexString = LaTexString + arr[0];
  	for (i = 1; i < arr.length; i++) {
  		if(ope[i-1]==1){LaTexString=strCatDiv(LaTexString,arr[i]);}
  		if(ope[i-1]==2){LaTexString=strCatMul(LaTexString,arr[i]);}
      if(ope[i-1]==3){LaTexString=strCatSub(LaTexString,arr[i]);}
      if(ope[i-1]==4){LaTexString=strCatSum(LaTexString,arr[i]);}
  	}

        LaTexString=strFinish(LaTexString);
        console.log(LaTexString);
  	//compute the result according to operator precedence
  	//first iteration (division and multiplication)
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==1){
  			arr[i+1]=(FractDiv(arr[i],arr[i+1]));
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  		if(ope[i]==2){
  			arr[i+1]= FractMul(arr[i],arr[i+1]);
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  	}
  	//second iteration (sums and rests)
  	var output=0;
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==3){
                        arr[i+1] = FractRes(arr[i],arr[i+1]);
  		}
  		if(ope[i]==4){
                        arr[i+1] = FractMul(arr[i],arr[i+1]);
  		}
  	}
        output = arr[arr.length - 1];
  	//crear arreglo de numeros de desfase
  	var zeroArr = new array(2);
  	zeroArr[0]=0;
  	zeroArr[1]=0;

  	var numDesfase=zeroArr;
    var numDesfase1=zeroArr;
 	var numDesfase2=zeroArr;
	zeroArr[0]=10;
  	zeroArr[1]=1;

 	while((FractEqTest(numDesfase,numDesfase1))||FractEqTest((numDesfase,numDesfase2))||FractEqTest((numDesfase1,numDesfase2))||(numDesfase==0)||(numDesfase1==0)||(numDesfase2==0)){

            numDesfase[0] = Math.round((0-8)*Math.random()+4);
            numDesfase[1] = Math.round((0-8)*Math.random()+4);

            numDesfase = FractMul[numDesfase,zeroArr];

            numDesfase1[0] = Math.round((0-8)*Math.random()+4);
            numDesfase1[1] = Math.round((0-8)*Math.random()+4);
            
            numDesfase1 = FractMul[numDesfase1,zeroArr];

            numDesfase2[0] = Math.round((0-8)*Math.random()+4);
            numDesfase2[1] = Math.round((0-8)*Math.random()+4);
            
            numDesfase2 = FractMul[numDesfase2,zeroArr];
	}

	var optionArray = new Array(4);

	//poner la respuesta correcta en los numeros de desfase
	var rightPosition=genRangeInteger(0,3);
	optionArray[rightPosition]=output;
        
        optionArray[(rightPosition + 1)%4]=(output+numDesfase);
	optionArray[(rightPosition + 2)%4]=(output+numDesfase1);
	optionArray[(rightPosition + 3)%4]=(output+numDesfase2);

	var questionArray= new Array(7);
	questionArray[0]=LaTexString;
	questionArray[1]=arrOld;
	questionArray[2]=opeOld;
	questionArray[3]=output;
	questionArray[4]=optionArray;
	questionArray[5]=rightPosition;
	questionArray[6]=time;
	return questionArray;
 }

function LevelQuestion (level) {
 	var arr = new Array(4);

 	switch(level){
 		case 1:
 		arr = [0,0,0,1];
 		return GenQuestion(10,100,1,5,arr);
 		break;
 		case 2:
 		arr = [0,0,1,1];
 		return GenQuestion(10,100,1,5,arr);
 		break;
 		case 3:
 		arr = [0,1,0,0];
 		return GenQuestion(0,100,1,7,arr);
 		break;
 		case 4:
 		arr = [1,0,0,0];
 		return GenQuestion(0,100,1,7,arr);
 		break;
 		case 5:
 		arr = [0,1,1,1];
 		return GenQuestion(0,100,2,7,arr);
 		break;
 		case 6:
 		arr = [1,0,1,1];
 		return GenQuestion(0,100,2,7,arr);
 		break;
 		case 7:
 		arr = [1,1,1,1];
 		return GenQuestion(0,100,2,7,arr);
 		break;
 		case 8:
 		arr = [0,1,0,0];
 		return GenQuestion(100,1000,1,10,arr);
 		break;
 		case 9:
 		arr = [1,0,0,0];
 		return GenQuestion(10,10000,1,10,arr);
 		break;
 		default:
 		arr = [1,0,0,0];
 		return GenQuestion(10,100,1,5,arr);
 		break;

 	}
 }