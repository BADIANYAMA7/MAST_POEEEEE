import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Screens/WelcomeChef';
import Menu from './Screens/SecondScreen';
import { Icon } from 'react-native-screens';

const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hello" component={Stacknavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  )
}

function Stacknavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name="Welcome" component={Welcome} />
    </stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}






