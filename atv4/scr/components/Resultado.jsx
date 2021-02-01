import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Resultado extends Component {

    render(){  
        const { navigation } = this.props;
        
        return(
            <View>
                <Text style={styles.titulo}>Seu IMC é </Text>
                <Text style={styles.titulo}></Text>
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