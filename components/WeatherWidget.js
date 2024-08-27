import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherWidget = ({ weather }) => {
  return (
    <View style={styles.widget}>
      <Text style={styles.weatherText}>Current Weather: {weather.type}</Text>
      <Text style={styles.weatherText}>Temperature: {weather.temperature}°C</Text>
      {/* Add additional weather simulation effects here */}
    </View>
  );
};

const styles = StyleSheet.create({
  widget: {
    padding: 15,
    backgroundColor: '#87CEFA',
    borderRadius: 10,
  },
  weatherText: {
    fontSize: 16,
    color: 'white',
  },
});

export default WeatherWidget;
