

//Grab search button
const apiKey = '4ac86df4f18613e348b72e2f16a8bbaf'

const searchBtn = document.getElementById('searchBtn')

//function to fetch data
function fetchData(cityName){    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then((weatherdata)=>{
        
        displayData(weatherdata);        
 
    })
    //catch an error
    .catch((err)=>{
        document.querySelector('.weather-container').innerHTML=''
        //display the error message
        document.querySelector('.weather-container').textContent=err.message
    })
        
    
}

//function to get city name from user
//this is the one to be passed to an event listener
function getCityName(event){
    event.preventDefault();
    //get input city name
    const cityName=document.getElementById('input-city-name').value;
    fetchData(cityName)
    return cityName;
}



//fetchDta function ends here
function displayData(weatherdata){    

    console.log(weatherdata)
    

    const city = document.getElementById('city')
    city.innerHTML=''
    city.textContent=weatherdata.name

    //date
    const dtime = document.getElementById('dtime')
    dtime.innerHTML=''
    dtime.textContent= new Date(weatherdata.dt * 1000).toDateString();//convert to date
    console.log(new Date(weatherdata.dt * 1000))


    const clouds = document.getElementById('clouds')
    clouds.innerHTML=''
    clouds.textContent=weatherdata.weather[0].main
    
    // const sunSet=document.getElementById('rise')
    // sunSet.innerHTML=''
    // sunSet.textContent=new Date(weatherdata.dt * 1000).toTimeString();

    const img = document.querySelector('img')
    img.innerHTML=''
    img.src=`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`


    var timeRegex = /\d{2}:\d{2}:\d{2}/; // Regular expression to match HH:MM:SS format
    //sunrise data
    const sunRise=document.getElementById('rise')
    sunRise.innerHTML=''
    sunRise.textContent="Sunrise : " + new Date (weatherdata.sys.sunrise * 1000).toTimeString().match(timeRegex)[0];
    const riseImg = document.getElementById('sun-rise').querySelector('img')    
    riseImg.innerHTML=''
    riseImg.src='images/sunrise.jpg'
    
    //sunset data
    const sunSet=document.getElementById('set')
    sunSet.innerHTML=''
    sunSet.textContent="Sunset : " + new Date (weatherdata.sys.sunset * 1000).toTimeString().match(timeRegex)[0];
   
    const setImg = document.getElementById('sun-set').querySelector('img')
    setImg.innerHTML=''
    setImg.src='images/sunset.jpg'

    const temp = document.getElementById('temp')
    temp.innerHTML=''
    temp.textContent="Temp : " + weatherdata.main.temp.toFixed(2) + " °C"
//Maximi temperature observed
    const tempMax = document.getElementById('temp-max')
    tempMax.innerHTML=''
    tempMax.textContent="Max Temp : " + weatherdata.main.temp_max.toFixed(2) + " °C"
//Minimum temperature observed
    const tempMin = document.getElementById('temp-min')
    tempMin.innerHTML=''
    tempMin.textContent="Min Temp : " + weatherdata.main.temp_min.toFixed(2) + " °C"

//Wind
    const wind = document.getElementById('wind')
    wind.innerHTML=''
    wind.textContent="Wind Speed : " + weatherdata.wind.speed +"km/h"

    //Humidity
    const humidity = document.getElementById('humidity')
    humidity.innerHTML=''
    humidity.textContent="Humidity : " + weatherdata.main.humidity + "%"

    //Pressure
    const pressure = document.getElementById('pressure')
    pressure.innerHTML=''
    pressure.textContent="Pressure : " + weatherdata.main.pressure + " hPa"
}


//addEvent Listener on search button
searchBtn.addEventListener('click',getCityName)

//add event listener on an "ENTER" keydown




document.addEventListener('DOMContentLoaded', function() {
        // Get the div element by its ID
        var divToHide = document.querySelector('.weather-container');
        
        // Get the button element by its ID
        var showButton = document.getElementById('searchBtn');
        
        // Add click event listener to the button
        addEventListener('click', function() {
            // Toggle the div's visibility by changing its display property
            if (divToHide.style.display === 'none' ) {
                divToHide.style.display = 'block'; // or 'inline', 'flex', etc. based on your layout needs
            } else {
                divToHide.style.display = 'none';
            }
        });
    });