
async function getData (location = "New York") {
  const key = 'ae97ffa5fd484ce4991153204232205';
  const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=';
  const loc = '&q=' + location.toString() + '&aqi=no';

  const fullUrl = baseUrl + key + loc;

  const response = await fetch(fullUrl, {mode: "cors"});
  const data = await response.json();

  return {
    City: data.location.name,

    Weather: data.current.condition.text,
    Temp: parseInt(data.current.temp_f) + "°F",
    FeelsLike: parseInt(data.current.feelslike_f) + "°F",
    Humidity: parseInt(data.current.humidity) + "%",
    Wind: data.current.wind_mph + " mph",
    Icon: data.current.condition.icon,

  };
}

export default getData



