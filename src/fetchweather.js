
async function getData (location = "New York") {
  const key = 'ae97ffa5fd484ce4991153204232205';
  const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=';
  const loc = '&q=' + location.toString() + '&aqi=no';

  const fullUrl = baseUrl + key + loc;

  const response = await fetch(fullUrl, {mode: "cors"});
  const data = await response.json();

  return {
    name: data.location.name,
    weather: data.current.condition.text,
    temp: parseInt(data.current.temp_f),
    feelsLike: parseInt(data.current.feelslike_f),
    humidity: parseInt(data.current.humidity),
    wind: data.current.wind_mph,
  };
}

export default getData



