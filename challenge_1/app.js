
var player1 = [];
var player2= [];
var counter = 0;

$('.forground').one("click",function() {
   var number = this.id;
	if(counter %2 === 0){
	  document.getElementById(number).innerHTML="x";
	  player1.push(number); 
	}
	else {
	   player2.push(number);
	 document.getElementById(number).innerHTML="O";  
	}

    console.log(player1);
    // console.log(player2+" "+"player2");

   if((getrows(player1)|| getcolomn(player1)|| getDiago(player1))=== true){
    	console.log("player1 is win");
    	alert("player1 win");
    }
    else if((getrows(player2)|| getcolomn(player2)|| getDiago(player2))=== true){
    	console.log("player2 is win");
    	alert("player2 win");
    }

    	 counter ++;
    if(counter >=9){
    	console.log("Game Over")}
})

function getrows(array){
	var res = false;
	 if (array.includes("1")&& array.includes("2") && array.includes("3")|| array.includes("4")&&array.includes("5") &&array.includes("6") || array.includes("7") && array.includes("8") && array.includes("9")){
	 res = true;
	}
	
	  return res;
}

function getcolomn(array){
	var res = false;
	if(array.includes("1")&& array.includes("4")&& array.includes("7")|| array.includes("2")&& array.includes("5")&& array.includes("8") || array.includes("3")&& array.includes("6")&& array.includes("9")){
	 res =true
	}
	  return res;
	
}

function getDiago(array){
	var res = false;
	if(array.includes ("1")&& array.includes("5")&& array.includes("9") || array.includes ("3")&& array.includes("5")&& array.includes("7")){
	 res = true;
	}
	  return res;
}

function reset(){
	for(var i=1;i<10;i++)
	document.getElementById(i).innerHTML = "";
}
