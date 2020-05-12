//Expanded form (readable)
javascript:(function(){
	//input
	x = prompt('Please enter: \n - The number of villagers you would keep if they appear, \n - The number of villagers you currently have and, \n - The number of trips, \n - The total number of villagers in the game (optional, if this number is ommitted, 393 will be used)\n Into the input box below IN THAT ORDER, separated by a comma. \n eg: 36, 8, 6, 393');

	//split string into individual numbers in an array
	a = x.split(",").map(item=>{
		return item.trim();
	});

	//check array contains correct number of variables
	if(a.length<3){alert("you need to enter at least 3 numbers separated by commas")};

	//check all variables are positive numbers
	z=0;
	a.forEach(num=>{
			if(isNaN(parseInt(num)) || parseInt(num)<1){
					z +=1;
			}
	})
	if(z>0){alert("you need to enter at least 3 numbers, greater than 0, separated by commas")
	}else{
		if(a.length == 3){
			a.push(393)
		}
		p = a[0]/(a[3]-a[1]) 	//assign probability (keepers/(Total - owned))
		x = 1									//probability of finding 1
		N = a[2]							//number of events = number of trips
		
		//binomial probability of finding 1
		tmp1 = (sFact(N)/(sFact(x)*sFact(N-x)))*Math.pow(p, x)*Math.pow((1-p),(N-x))
		
		//binomial probability of finding 0
		tmp0 = (sFact(N)/(sFact(0)*sFact(N)))*Math.pow(p, 0)*Math.pow((1-p),(N))
		
		//response
		confirm(`You have a ${(tmp1*100).toFixed(2)}% chance of finding a villager you want in ${a[2]} trips. \n You also have a ${(tmp0*100).toFixed(2)}% chance of finding no villagers you want.`)
	}
	
	//Factorial Calculator
	function sFact(num)
	{
			var rval=1;
			for (var i = 2; i <= num; i++)
					rval = rval * i;
			return rval;
	}
})();
	

//minified version
javascript:(function(){
x = prompt('Please enter: \n - The number of villagers you would keep if they appear, \n - The number of villagers you currently have and, \n - The number of trips, \n - The total number of villagers in the game (optional, if this number is ommitted, 393 will be used)\n Into the input box below IN THAT ORDER, separated by a comma. \n eg: 36, 8, 6, 393');a = x.split(",").map(item=>{return item.trim();});if(a.length<3){alert("you need to enter at least 3 numbers separated by commas")};z=0;a.forEach(num=>{if(isNaN(parseInt(num)) || parseInt(num)<1){z +=1;};});if(z>0){alert("you need to enter at least 3 numbers, greater than 0, separated by commas")}else{if(a.length == 3){a.push(393)}p = a[0]/(a[3]-a[1]);x = 1;N = a[2];tmp1 = (sFact(N)/(sFact(x)*sFact(N-x)))*Math.pow(p, x)*Math.pow((1-p),(N-x));tmp0 = (sFact(N)/(sFact(0)*sFact(N)))*Math.pow(p, 0)*Math.pow((1-p),(N));confirm(`You have a ${(tmp1*100).toFixed(2)}% chance of finding a villager you want in ${a[2]} trips. \n You also have a ${(tmp0*100).toFixed(2)}% chance of finding no villagers you want.`);};function sFact(num){var rval=1;for (var i = 2; i <= num; i++)rval = rval * i;return rval;};
})();