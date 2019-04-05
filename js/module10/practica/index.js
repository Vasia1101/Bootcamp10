let iconID = document.querySelector('.icon');
let locationTimezone = document.querySelector('.location-timezone');
let temperatureDegree = document.querySelector('.temperature-degree');
let temperatureDescription = document.querySelector('.temperature-description');
let tempSection = document.querySelector('.temp-section');
let temperatureUnit = document.querySelector('.temperature-unit');
let tempBuf;
let onLoad = ()=>{
    let lat;
    let long;
    let celus;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            let proxy = 'https://cors-anywhere.herokuapp.com/'
            let api = `${proxy}https://api.darksky.net/forecast/71112812e101a60980d3b37a2f524b59/${lat},${long}`;
            fetch (api)
            .then(response => response.json())
            .then (data => {console.log(data);

const {icon, summary, temperature} = data.currently;
temperatureDegree.textContent = temperature;
tempBuf = temperature;
celus = parseInt((temperature-32)/1.8);
tempSection.addEventListener('click', setTempAction)
temperatureDescription.textContent = summary;
locationTimezone.textContent = data.timezone;
setIcon (icon, iconID);

});
            });
        }
        function setTempAction (){
if (temperatureUnit.textContent === 'F') {
    temperatureUnit.textContent = 'C';
    temperatureDegree.textContent = Math.floor(celus);
}else {
    temperatureUnit.textContent = 'F';
    temperatureDegree.textContent = tempBuf;
}
        }
        function setIcon(icon, iconID) {
const skycons = new Skycons({color:'white'});
const currentIcon = icon.replace(/-/g, "_").toUpperCase();
skycons.play();
return skycons.set(iconID, Skycons[currentIcon]);
        }
    }
     
    
window.addEventListener('load', onLoad);
