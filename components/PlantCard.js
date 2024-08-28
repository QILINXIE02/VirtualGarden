import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlantCard = ({ plant, onCare }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.status}>Health: {plant.healthStatus}</Text>
      <TouchableOpacity style={styles.button} onPress={onCare}>
        <Text style={styles.buttonText}>Care</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#e6ffe6',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PlantCard;
