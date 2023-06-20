import cloudy from "./icons/cloudy.svg";
import lightning from "./icons/lightning-bolt.svg";
import partly from "./icons/partly.svg";
import sunny from "./icons/sunny.svg";
import thunder from "./icons/Thundery.svg";
import wind from "./icons/wind.svg";
import rainy from "./icons/Rainy.svg";
import compass from "./icons/compass.svg";
import mist from "./icons/mist.svg";





function displayInfo(info) {
  const container = document.getElementById('container');
  let weather = (info.Weather).toLowerCase();


  function getInfo(object){
    for (const data in object){
      if (data == "Icon") {
        var smallIcon = object[data];
        continue
      } else {
        let element = document.createElement('sub-weather');
        element.className = data;
        element.textContent = `${data}: ${object[data]}`;
        container.appendChild(element);
        }
    }
    /*
    const currentWeather = document.getElementsByClassName("Weather");
    const imgSm = document.createElement("img");
    imgSm.src = smallIcon;
    currentWeather.appendChild(imgSm);
    
    */
    }
  
    function getIcon(type){
      var icons = {
        'cloudy': cloudy,
        'party cloudy': partly,
        'sunny': sunny,
        'mist': mist,
        'rainy': rainy,
        'default': compass,
      };
      return (icons[type] || icons['default']);
    }

  
  getInfo(info);


  const img = document.querySelector("img");
  let icon = getIcon(weather);
  img.src = icon;

  
 

}

export default displayInfo