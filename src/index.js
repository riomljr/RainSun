import './style.css';
import getData from './fetchweather';
import displayInfo from './displayinfo';



getData().then((data) => displayInfo(data));
  

