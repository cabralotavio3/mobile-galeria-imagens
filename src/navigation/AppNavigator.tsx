import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GaleriaScreen from '../screens/GaleriaScreen';
import VisualizadorScreen from '../screens/VisualizadorScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Galeria">
        <Stack.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{ title: 'Galeria de Imagens' }}
        />
        <Stack.Screen
          name="Visualizador"
          component={VisualizadorScreen}
          options={{ title: 'Visualizador de Imagem' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
