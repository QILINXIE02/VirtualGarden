import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantDetails = ({ plant }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plant.name} Details</Text>
      <Text>Growth Stage: {plant.growthStage}</Text>
      <Text>Watering Needs: {plant.watering}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PlantDetails;
