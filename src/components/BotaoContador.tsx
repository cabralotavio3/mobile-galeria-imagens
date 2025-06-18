import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const BotaoGaleria = ({ onPress, onLongPress }: any) => {
  const [corBotao, setCorBotao] = useState('blue');

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: corBotao,

      }}
      onPress={onPress}
      onPressIn={() => setCorBotao('green')}
      onPressOut={() => setCorBotao('blue')}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white' }}>Clique Aqui</Text>
    </TouchableOpacity>
  );
};

export default BotaoGaleria;
