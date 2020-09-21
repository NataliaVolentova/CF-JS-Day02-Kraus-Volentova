var randomNum = Math.floor(Math.random() * 25) - 5;

if (randomNum >=5 && randomNum<10){
	document.getElementById("text").innerHTML += "The weather is cold and has " + randomNum + " degrees";
	document.getElementById("image").src = "img/boi.jpg";
	document.getElementById("image2").src = "img/download.jpg";
} 
else {
	document.getElementById("text").innerHTML +="The weather is moderate" + randomNum + " degrees";
	document.getElementById("image").src = "img/warm(1).jpg";
	document.getElementById("image2").src = "img/boi.jpg";
}

