import React from 'react';
import { Button } from 'react-native';

const BotaoContador = ({title, onPress}) => {
  return(
    <Button
      title={title}
      onPress={onPress}
    />
  );
}

export default BotaoContador;