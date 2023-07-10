import './style.css';
import getData from './fetchweather';
import displayInfo from './displayinfo';



function generate(info){
  getData(info).then((data) => displayInfo(data));
}

function getCityName(){
 let val = document.querySelector('#input');
  return val.value;
}

const btn = document.querySelector('#button');
btn.addEventListener('click', displayCityWeather);
  //generate("");

function displayCityWeather() {
  generate(getCityName());
  }