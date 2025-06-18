import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const imagens = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Acoustic_guitar.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1b/Electric_Guitar.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/Fender_Stratosphere_Guitar.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/65/Fender_Telecaster.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/94/Dean_Z_Guitar.jpg',
];

const GaleriaScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      {imagens.map((url, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => navigation.navigate('Visualizador', { url })}
        >
          <Image source={{ uri: url }} style={styles.thumbnail} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default GaleriaScreen;
