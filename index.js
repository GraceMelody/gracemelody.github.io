$(document).ready(()=>{
	var currentDate = new Date();
	var currentHour = currentDate.getHours();
	console.log(currentDate);
	if (currentHour >17 || currentHour<5){
		$("body").addClass("body-inverted");
		$("#celestialObject").attr("src","images/night.png");
		$("#favicon").attr("href","images/favicon-night.png");
	}
	else{
		$("#celestialObject").attr("src","images/cloudysun.png");
		$("#favicon").attr("href","images/favicon-day.png");
	}
	
	//greeting settings
	if (currentHour > 5 && currentHour <= 10){
		greeting="Good morning!";
	}
	else if (currentHour > 10 && currentHour <= 14){
		greeting="Good afternoon!";
	}
	else if(currentHour > 14 && currentHour <= 20){
		greeting="Good evening!";
	}
	else {
		greeting="Good night!";
	}

	
	
	document.getElementById("greeting").innerHTML = greeting;
})