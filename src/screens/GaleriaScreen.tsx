import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const imagens = [
  { id: '1', source: require('../../assets/guitarra1.jpg') },
  { id: '2', source: require('../../assets/guitarra2.jpg') },
  { id: '3', source: require('../../assets/guitarra3.jpg') },
  { id: '4', source: require('../../assets/guitarra4.jpg') },
  { id: '5', source: require('../../assets/guitarra5.jpg') },
];

const GaleriaScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {imagens.map((imagem) => (
          <TouchableOpacity 
            key={imagem.id} 
            onPress={() => navigation.navigate('Visualizador', { source: imagem.source })}
          >
            <Image source={imagem.source} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
  thumbnail: {
    width: 110,
    height: 110,
    margin: 5,
    borderRadius: 8,
  },
});

export default GaleriaScreen;