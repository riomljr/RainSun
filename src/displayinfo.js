import cloudy from "./icons/cloudy.svg";
import lightning from "./icons/lightning-bolt.svg";
import partly from "./icons/partly.svg";
import sunny from "./icons/sunny.svg";
import thunder from "./icons/Thundery.svg";
import wind from "./icons/wind.svg";
import rainy from "./icons/Rainy.svg";
import compass from "./icons/compass.svg";
import mist from "./icons/mist.svg";
import clear from "./icons/clear.svg";

function displayInfo(info) {
  const container = document.getElementById('container');
  const subContainer = document.createElement('weather')
  container.appendChild(subContainer);
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
        subContainer.appendChild(element);
        }
      }
    }

  function getIcon(type){
    var icons = {
      'overcast': cloudy,
      'cloudy': cloudy,
      'partly cloudy': partly,
      'sunny': sunny,
      'mist': mist,
      'rainy': rainy,
      'thunder': thunder,
      'clear': clear,
      'default': compass,
    };
    return (icons[type] || icons['default']);
  }
//get time to adjust sun or moon animation
  //let d = new Date();
//console.log( d.getHours());

  getInfo(info);

  const img = document.querySelector("img");
  let icon = getIcon(weather);
  img.src = icon;

  const box = document.querySelector('.searchBox');
  const d = document.createElement('time');
  d.innerText = new Date().toDateString();
  box.appendChild(d);
}

export default displayInfo