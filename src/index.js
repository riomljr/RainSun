import './style.css';
import getData from './fetchweather';



getData().then(function(data) {
  console.log(data.feelsLike);
});
