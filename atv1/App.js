import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Shelida Crislane' curso='Design Digital'/>
      <Corpo />
      <Text style={{fontWeight: 'bold'}}>Disciplinas Matriculadas:</Text>
      <Disciplina disciplina='Matemática Básica'/>
      <Disciplina disciplina='Projeto de Interface para Dispositivos Móveis'/>
      <Disciplina disciplina='Design e Inovação'/>
      <Disciplina disciplina='Projeto Integrado 4'/>
      <Disciplina disciplina='Concepção e Desenvolvimento de Produto'/>
      <Disciplina disciplina='Empreendedorismo'/>
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
