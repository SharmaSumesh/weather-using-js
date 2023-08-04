let input = document.querySelector('#inputcity').value;
let btn = document.querySelector(".btn");
let mainbox = document.querySelector(".container-fluid");
async function fetchdata()
{
    let cityname = document.querySelector('#inputcity').value;
    let today = new Date();
    let currentime = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    console.log(currentime);
    let name = document.querySelector('.name');
    let temp = document.getElementById("temp");
    let tempmin = document.getElementById('tempmin');
    let tempmax = document.getElementById('tempmax');
    let descripation = document.getElementById('descripation');
    let Humidity= document.getElementById('Humidity');
    let pressure= document.getElementById('pressure');
    let windspeed= document.getElementById('windspeed');
    let windgust= document.getElementById('windgust');
    let time= document.getElementById('time');
    let countryName= document.getElementById('countryName');
    let def = "Delhi";
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname || def}&appid=37941ef580eff211a7045e9c1d28414d`).then(res=>res.json()).then(data=>{
     console.log(data);   
     name.innerHTML = data.name;
     temp.innerHTML = data.main.temp-273;
     tempmax.innerHTML = data.main.temp_max-273;
     tempmin.innerHTML = data.main.temp_min-273;
     descripation.innerHTML = data.weather[0].description;
     Humidity.innerHTML = data.main.humidity;
     pressure.innerHTML = data.main.pressure;
     windgust.innerHTML = data.wind.windgust;
     windspeed.innerHTML = data.wind.speed;





    })

}
fetchdata();
