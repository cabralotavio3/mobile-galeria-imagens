import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const VisualizadorScreen = ({ route, navigation }: any) => {
  const { source } = route.params; 

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
});

export default VisualizadorScreen;