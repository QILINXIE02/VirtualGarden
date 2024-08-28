import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GardenView from '../components/GardenView';  // Importing GardenView component

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Virtual Garden</Text>
      
      {/* Display GardenView directly on the HomeScreen */}
      <GardenView />

      <Button
        title="Plant Details"
        onPress={() => navigation.navigate('PlantDetails')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Subscribe"
        onPress={() => navigation.navigate('Subscription')}
      />
      <Button
        title="Community Garden"
        onPress={() => navigation.navigate('Community')}
      />
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
    marginBottom: 20,
  },
});

export default HomeScreen;
