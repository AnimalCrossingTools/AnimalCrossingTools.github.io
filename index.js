document.addEventListener("DOMContentLoaded",()=>{
		document.getElementById("pCalc").addEventListener("click", ()=>{
			//Get entered values (this step could be removed but it helps with clarity)
			Keep = document.getElementById("vKeep")
			Owned = document.getElementById("vOwned")
			Total = document.getElementById("vTotal")
			Trips = document.getElementById("vTrips")
			Variables = [Keep, Owned, Total, Trips]
			
			//check values are positive numbers
			Variables.forEach(v=>{
				if(v.value == "" || v.value <0){
					v.classList.add("unfilled")
				}else{
					if(v.classList.contains("unfilled")){
						v.classList.remove("unfilled")
					}
				}
			})
			
			//if values are positive numbers (find and display probabilities): 
			if(document.getElementsByClassName("unfilled").length==0){
				Variables.forEach((v, i)=>{
					Variables[i] = parseInt(v.value)
				})
				document.getElementById("vProbResT").innerHTML = "Outcome:"
				document.getElementById("vProbResB").style.display = "inherit"
				outcome = calculate(Variables)
				document.getElementById("vProbPC").innerHTML = `Percentage Chance: ${(100-outcome[2]).toFixed(3)} %`
			document.getElementById("vProbP").innerHTML = `P(X=1) = ${outcome[0].toFixed(3)}, P(X>=1)= ${((100-outcome[2])/100).toFixed(3)}<br><br>There is also a ${outcome[2].toFixed(3)} % chance of not finding a villager you like.`
				document.getElementById("vProbOutcome").style.display = "inherit"
				
				//if values are NOT positive numbers (show error message):
			}else{ 
				console.log('a')
				document.getElementById("vProbResT").innerHTML = "Enter a number larger than 0 in all fields"
				document.getElementById("vProbResT").style.display = "block"
				document.getElementById("vProbResB").style.display = "none"
				document.getElementById("vProbOutcome").style.display = "inherit"
			}
			
		})
	
})

//Factorial Calculator
function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

//Binomial probability calculator
function calculate(V){ //V=k, n, T, N
	p = V[0]/(V[2]-V[1]) //assign probability (keepers/(Total - owned))
	x = 1								//probability of finding 1
	N = V[3]						//number of events = number of trips

	//binomial probability of finding exactly 1
	tmp1 = (sFact(N)/(sFact(x)*sFact(N-x)))*Math.pow(p, x)*Math.pow((1-p),(N-x))
	
	//binomial probability of finding 0
	tmp0 = (sFact(N)/(sFact(0)*sFact(N)))*Math.pow(p, 0)*Math.pow((1-p),(N))
	
	//binomial probability of finding at least 1 (until you find one, then you have to recalculate)
	//tmp0 = 1-tmp1
	
	return [tmp1, tmp1*100, tmp0*100]
}