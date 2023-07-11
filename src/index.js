import './style.css';
import getData from './fetchweather';
import displayInfo from './displayinfo';
import clearAll from './clear';



function generate(info){
  getData(info).then((data) => displayInfo(data))
  .catch((err) => handleErr(err));
}

function handleErr(err){
  const body = document.querySelector("#container");
  const msg = document.createElement("h2");

  msg.innerText = "No results, sorry! Try Again!";

  msg.classList.add("app-wrapper");
  msg.classList.add("error-text");

  body.appendChild(msg);

}
function getCityName(){
 let val = document.querySelector('#input');
  return val.value;
}

const btn = document.querySelector('#button');
btn.addEventListener('click', displayCityWeather);


function displayCityWeather() {
  clearAll();
  generate(getCityName());

  }