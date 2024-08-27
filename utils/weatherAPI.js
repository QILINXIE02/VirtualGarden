const fetchWeather = async (location) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
    const data = await response.json();
    return {
      type: data.current.condition.text,
      temperature: data.current.temp_c,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export default fetchWeather;
