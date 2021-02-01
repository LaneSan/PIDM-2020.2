import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Foto from '../../assets/Foto.jpg';

export default class Perfil extends Component {

    render(){  
        const { navigation } = this.props;
        console.log(navigation)
        
        return(
            <View>
                <Image style={styles.foto} source={Foto} />
                <Text style={styles.titulo}>Nome: <Text style={styles.texto}>{navigation.state.params.nome}</Text></Text>
                <Text style={styles.titulo}>Idade: <Text style={styles.texto}>{navigation.state.params.idade}</Text></Text>
                <Text style={styles.titulo}>E-mail: <Text style={styles.texto}>{navigation.state.params.email}</Text></Text>
                <View style={styles.homeButton}>
                    <Button
                        title="Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        justifyContent: 'center',
    },
    foto: {
        width: 200,
        height: 200,
        margin: 50,
        alignSelf: 'center',
        borderRadius: 100
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: 'center',
        margin: 3,
    },
    texto: {
        fontWeight: "normal"
    },
    homeButton: {
        width: '93%',
        margin: 15,
        alignSelf: 'center',
    }
  });
  