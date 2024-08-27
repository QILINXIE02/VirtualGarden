// src/screens/PlantDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantDetails = ({ route }) => {
  const { plant } = route.params || {}; // Destructure the plant from route params

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Plant data not available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.plantName}>{plant.name}</Text>
      <Text style={styles.plantDetails}>Type: {plant.type}</Text>
      <Text style={styles.plantDetails}>Growth Rate: {plant.growthRate}</Text>
      {/* Add more plant details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  plantDetails: {
    fontSize: 18,
    marginTop: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default PlantDetails;
