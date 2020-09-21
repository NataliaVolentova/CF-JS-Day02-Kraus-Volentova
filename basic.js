
getRandomNumber(int min, int max, int rand) {
	int min=-5;
	int max=25;
	var rand="";
	var rand=((Math.random() * (max - min)) + min);
    return rand;
}

if (rand=>5 && rand<10){
	console.log("The weather is cold and has " + rand + "degrees")
} 
else {
	console.log("The weather is moderate" + rand + "degrees")
}

