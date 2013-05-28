function produceAvailableOperationEnteros(validOperations){
	var num=0;
	do{num=genRangeNumber(1,4)}while(validOperations[num]==0)
        return num;
}

function GenQuestionEnteros(startRange,finishRange,Operations,time,validOperations){
 	//decide the operations and the numbers
 	Operations++;
 	var arr = new Array(Operations);
 	var ope = new Array(Operations-1);
 	for (var i = 0; i < Operations; i++) {
                if(i!=0){
                        ope[i-1]=produceAvailableOperationEnteros(validOperations);
                        if(ope[i-1]==1){
                            var aux = genRangeNumber(startRange,finishRange);
                            arr[i-1] = aux*arr[i-1];
                            arr[i]= aux;
 			}
                        else{
                            arr[i]=genRangeNumber(startRange,finishRange);
                        }
 		}
 		else{
 			arr[i]=genRangeNumber(startRange,finishRange);
 		}
  	}
  	//back up the strings used
  	var arrOld = arr;
        var opeOld = ope;

  	//Calculate the LaTex string used

  	var LaTexString = strStart();
  	LaTexString = LaTexString + arr[0];
  	
  	for (i = 1; i < arr.length; i++) {
  		if(ope[i-1]==1){LaTexString=strCatDiv(LaTexString,arr[i]);}
  		if(ope[i-1]==2){LaTexString=strCatMul(LaTexString,arr[i]);}
                if(ope[i-1]==3){LaTexString=strCatSub(LaTexString,arr[i]);}
                if(ope[i-1]==4){LaTexString=strCatSum(LaTexString,arr[i]);}
  	}

        LaTexString=strFinish(LaTexString);
  	//compute the result according to operator precedence
  	//first iteration
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==1){
  			arr[i+1]=(arr[i]/arr[i+1]);
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  		if(ope[i]==2){
  			arr[i+1]= arr[i]*arr[i+1];
  			arr[i]=0;
  			ope[i]=4;
                        if(i>0){
                            if(ope[i-1]==3){
                                ope[i]=3;
                            }
                        }
  		}
  	}
  	//second iteration
  	var output=0;
  	for (i = 0; i < ope.length; i++) {
  		if(ope[i]==3){
                        arr[i+1] = arr[i] - arr[i+1];
  		}
  		if(ope[i]==4){
                        arr[i+1] = arr[i] + arr[i+1];
  		}
  	}
        output = arr[arr.length - 1];
  	//crear arreglo de numeros de desfase
  	var numDesfase=0;
        var numDesfase1=0;
 	var numDesfase2=0;

 	while((numDesfase==numDesfase1)||(numDesfase==numDesfase2)||(numDesfase1==numDesfase2)||(numDesfase==0)||(numDesfase1==0)||(numDesfase2==0)){

            numDesfase = Math.round((0-8)*Math.random()+4);

            numDesfase = numDesfase*10;

            numDesfase1 = Math.round((0-8)*Math.random()+4);
            
            numDesfase1 = numDesfase1*10;

            numDesfase2 = Math.round((0-8)*Math.random()+4);
            
            numDesfase2 = numDesfase2*10;
	}

	var optionArray = new Array(4);

	//poner la respuesta correcta en los numeros de desfase
	var rightPosition=genRangeNumber(0,3);
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

 function LevelQuestionEnteros(level) {
 	var arr = new Array(4);

 	switch(level){
 		case 1:
 		arr = [0,0,0,1];
 		return GenQuestionEnteros(10,100,1,5,arr);
 		break;
 		case 2:
 		arr = [0,0,1,1];
 		return GenQuestionEnteros(10,100,1,5,arr);
 		break;
 		case 3:
 		arr = [0,1,0,0];
 		return GenQuestionEnteros(0,100,1,7,arr);
 		break;
 		case 4:
 		arr = [1,0,0,0];
 		return GenQuestionEnteros(0,100,1,7,arr);
 		break;
 		case 5:
 		arr = [0,1,1,1];
 		return GenQuestionEnteros(0,100,2,7,arr);
 		break;
 		case 6:
 		arr = [1,0,1,1];
 		return GenQuestionEnteros(0,100,2,7,arr);
 		break;
 		case 7:
 		arr = [1,1,1,1];
 		return GenQuestionEnteros(0,100,2,7,arr);
 		break;
 		case 8:
 		arr = [0,1,0,0];
 		return GenQuestionEnteros(100,1000,1,10,arr);
 		break;
 		case 9:
 		arr = [1,0,0,0];
 		return GenQuestionEnteros(10,10000,1,10,arr);
 		break;
 		default:
 		arr = [0,0,0,1];
 		return GenQuestionEnteros(10,100,1,5,arr);
 		break;

 	}
 }
 