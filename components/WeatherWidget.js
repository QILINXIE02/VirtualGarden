import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate fetching weather data
    setWeather({
      temperature: 72,
      condition: 'Sunny',
    });
  }, []);

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text style={styles.temperature}>{weather.temperature}°F</Text>
          <Text style={styles.condition}>{weather.condition}</Text>
        </>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    marginTop: 5,
    fontSize: 18,
    color: '#555',
  },
  loading: {
    fontSize: 16,
    color: '#888',
  },
});

export default WeatherWidget;
