// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const plant = {
    name: 'Rose',
    type: 'Flower',
    growthRate: 'Fast',
    // Add more plant properties here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Virtual Garden</Text>
      <Button
        title="View Plant Details"
        onPress={() => navigation.navigate('PlantDetails', { plant })}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
