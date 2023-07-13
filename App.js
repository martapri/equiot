import { StatusBar } from 'expo-status-bar';
import { React, useCallback, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CalibrationScreen from './screens/CalibrationScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import useFonts from './useFonts';

const Stack = createNativeStackNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown : false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown : false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown : true}} name="CalibrationScreen" component={CalibrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
