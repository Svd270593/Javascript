function array_range(start, len) 
     {
    	var newArr = new Array(len);
    	console.log("outside loop"+len);
		for (var i = 0; i < len; i++ 
        {
        	
			newArr[i] = start;
			start++
		
		}
      	
      		document.getElementById("arry_data").innerHTML= newArr;

};