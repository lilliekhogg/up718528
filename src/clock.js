function currentTime(){
				var date = new Date();
				var currentHour = date.getHours();
				var currentMinute = date.getMinutes();
				var currentSecond = date.getSeconds();
				var amOrPm = "AM"; //set to default as am

				if(currentHour == 0){
					currentHour = 12;
				}

				if(currentHour > 12){ //if hour passes 12 then it is PM
					currentHour = currentHour - 12;
					amOrPm = "PM";
				}

				currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
				currentMinute = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
				currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond;


				var showTime
				showTime = currentHour + ":" + currentMinute + ":" + currentSecond + " " + amOrPm; //function to display current time
				document.getElementById("MyClockDisplay").innerText = showTime;
				document.getElementById("MyClockDisplay").textContent = showTime;

				setTimeout(currentTime, 1000);
			}
currentTime();
