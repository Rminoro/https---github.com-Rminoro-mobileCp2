import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jaca from './src/components/mainScreen/index';
import CalculadoraScreen from './src/components/calculadoraScreen/index';
import AgiotaBonzinho from './src/components/resultadosScreen/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Jaca">
        <Stack.Screen name="Jaca" component={Jaca} options={{ headerShown: false }} />
        <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
        <Stack.Screen name="Resultado" component={AgiotaBonzinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
