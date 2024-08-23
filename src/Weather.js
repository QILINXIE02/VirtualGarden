import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=YOUR_API_KEY`);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {weather ? (
        <Text>Current Temperature: {weather.main.temp}°C</Text>
      ) : (
        <Text>Loading Weather...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E0F7FA',
  },
});

export default Weather;
