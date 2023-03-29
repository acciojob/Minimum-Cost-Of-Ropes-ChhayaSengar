function calculateMinCost() {
  //your code here
  var inputData = document.querySelector("#rope-lengths").vlaue;
	var inputArr = inputData.split(",");
	// alert(typeof inputArr[0]);
	for (let i = 0; i < inputArr.length; i++) {
		inputArr[i] = Number(inputArr[i]);
	}

	var cost = 0;
	inputArr.sort(function (a,b) {return a-b;});
   while (inputArr.length>1) {
   	 var newRope = inputArr[0] + inputArr[1];
	   cost +=newRope;

	   //delete first two element
	   inputArr.splice(0,2);
	   inputArr.push(newRepo);

	   inputArr.sort(function (a,b) {return a-b;})
   }
	document.querySelector("#result").value =cost;
  
}  
