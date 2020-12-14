import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import BotaoContador from './src/components/BotaoContador.jsx';
import Dados from "./src/components/Dados.jsx";

/*const useCounter = () => {
  const [value, setValue] = useState(0);

  const setCounter = () => {
    setValue(value + 1);
  };

  return [value, setCounter];
};

const Counter = () => {
  const [counter, setCounter] = useCounter(0);

  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Votar" onPress={() => setCounter()} />
    </View>
  );
};*/

export default function App() {

  const [count1, setCount1] = useState(0);
  const increment1 = () => setCount1(count1 + 1);

  const [count2, setCount2] = useState(0);
  const increment2 = () => setCount2(count2 + 1);

  const [count3, setCount3] = useState(0);
  const increment3 = () => setCount3(count3 + 1);

  const [count4, setCount4] = useState(0);
  const increment4 = () => setCount4(count4 + 1);

  return (
    <View style={{flex: 0.4}}>

      <View style={styles.container}>
        <Text>FORTALEZA: {count1}</Text>
        <BotaoContador title={'VOTAR'} onPress={increment1}/>
      </View>

      <View style={styles.container}>
        <Text>QUIXADA: {count2}</Text>
        <BotaoContador title={'VOTAR'} onPress={increment2}/>
      </View>

      <View style={styles.container}>
        <Text>LIMOEIRO: {count3}</Text>
        <BotaoContador title={'VOTAR'} onPress={increment3}/>
      </View>

      <View style={styles.container}>
        <Text>JUAZEIRO: {count4}</Text>
        <BotaoContador title={'VOTAR'} onPress={increment4}/>
      </View>

      <Dados
        resultado = {[
          {cidade: 'Fortaleza', votos: count1},
          {cidade: 'Quixada', votos: count2},
          {cidade: 'Limoeiro', votos: count3},
          {cidade: 'Juazeiro', votos: count4},
        ]}
      />

    </View>
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
