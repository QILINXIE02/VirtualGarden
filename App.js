import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PlantDetails from './src/screens/PlantDetails';
import GardenView from './src/screens/GardenView';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import CommunityGarden from './src/screens/CommunityGarden';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantDetails" component={PlantDetails} />
        <Stack.Screen name="GardenView" component={GardenView} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Community" component={CommunityGarden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
