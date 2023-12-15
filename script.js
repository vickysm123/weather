const apikey ="d186764d635614ff550f5386ad566dc1";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(name){
   const response = await fetch(apiurl + name +`&appid=${apikey}`);
   var data = await response.json();
   console.log(data);
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
   document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ;
  
   if(data.weather[0].main=="clouds"){
      weatherIcon.src="images/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){
      weatherIcon.src="images/clear.png";
   }
   else if(data.weather[0].main=="Rain"){
      weatherIcon.src="images/rain.png";
   }
   else if(data.weather[0].main=="Drizzle"){
      weatherIcon.src="images/drizzle.png";
   }
   else if(data.weather[0].main=="Mist"){
      weatherIcon.src="images/mist.png";
   }
   document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click", ()=>{
 checkWeather(searchbox.value); 
})