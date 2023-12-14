const apikey ="d186764d635614ff550f5386ad566dc1";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function checkWeather(city){
   const response = await fetch(apiurl + city +`&appid=${apikey}`);
   var data = await response.json();
   console.log(data);
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
   document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
   document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ;
}  

searchbtn.addEventListener("click", ()=>{
 checkWeather(searchbox.value); 
})