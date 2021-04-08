import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, LogBox } from 'react-native';
import { database } from '../../Config/firebase';

import Header from '../../Components/Header';
import MyButton from '../../Components/MyButton';
import Card from '../../Components/Cards/Card';
import CardItem from '../../Components/Cards/CardItem';

import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Home = () => {

    LogBox.ignoreLogs([
        'Setting a timer for a long period of time'
    ])

    const [list, setList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        database.collection('alunos').onSnapshot((query) => {
            const discentes = [];
            query.forEach((doc) => {
                discentes.push({ ...doc.data(), id: doc.id })
            });

            setList(discentes);
        })
    }, [])

    function deletar(id) {
        database.collection('alunos').doc(id).delete(id);
    }

    return (
        <View style={styles.container}>
            <Header title='Alunos' />
            <CardItem>
                <MyButton
                    style={{ backgroundColor: '#00a86b' }}
                    onPress={() => navigation.navigate('Add')}
                >
                    Adicionar
                </MyButton>
            </CardItem>
            <ScrollView>
                {list.map((alunos) => {
                    return (
                        <Card>
                            <CardItem style={styles.card}>
                                <Text style={styles.name} key={alunos.id}>{alunos.nome}</Text>
                                <Text key={alunos.id.matricula}>Matrícula: {alunos.matricula}</Text>
                                <Text key={alunos.id.curso}>Curso: {alunos.curso}</Text>
                            </CardItem>
                            <CardItem>
                                <MyButton
                                    style={{ backgroundColor: '#eeb907' }}
                                    onPress={() => {navigation.navigate('Edit')}}
                                >Editar</MyButton>
                                <MyButton
                                    style={{ backgroundColor: '#dd5559' }}
                                    onPress={() => deletar(alunos.id)}
                                >Deletar
                                </MyButton>
                            </CardItem>
                        </Card>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    card: {
        flexDirection: 'column',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#191970',
    }

})

export default Home;