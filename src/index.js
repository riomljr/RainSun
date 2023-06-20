import './style.css';
import getData from './fetchweather';
import displayInfo from './displayinfo';



getData("Houston").then((data) => displayInfo(data));
  

