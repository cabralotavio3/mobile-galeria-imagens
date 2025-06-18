import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const VisualizadorScreen = ({ route, navigation }: any) => {
  const { url } = route.params; 

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default VisualizadorScreen;
