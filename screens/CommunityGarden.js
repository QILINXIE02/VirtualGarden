import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CommunityGarden = () => {
  const gardens = [
    { id: '1', name: 'Alice\'s Garden', plants: 5 },
    { id: '2', name: 'Bob\'s Garden', plants: 8 },
    // Add more community gardens here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Gardens</Text>
      <FlatList
        data={gardens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gardenItem}>
            <Text style={styles.gardenName}>{item.name}</Text>
            <Text style={styles.gardenPlants}>{item.plants} plants</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gardenItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  gardenName: {
    fontSize: 18,
  },
  gardenPlants: {
    marginTop: 5,
    fontSize: 16,
    color: '#888',
  },
});

export default CommunityGarden;
