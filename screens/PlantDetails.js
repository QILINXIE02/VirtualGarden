import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantDetails = ({ route }) => {
  const { plant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plant.name}</Text>
      <Text style={styles.description}>{plant.description}</Text>
      <Text style={styles.healthStatus}>Health: {plant.healthStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  healthStatus: {
    fontSize: 18,
    color: '#4CAF50',
  },
});

export default PlantDetails;
