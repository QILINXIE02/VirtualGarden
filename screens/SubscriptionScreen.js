import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubscriptionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Subscription</Text>
      <Text style={styles.description}>
        Get access to exclusive plants, advanced features, and more!
      </Text>
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  subscribeButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ff4500',
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SubscriptionScreen;
