import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';
import IMCMsg from './IMCMsg';

export default class IMCCalc extends Component {
    render(){
        const {altura, peso} = this.props

        if(!altura || !peso) return null

        const imc = (peso/altura**2).toFixed(2)
        
        return(
            <View>
                <Text style = {styles.baseText}>
                    Seu IMC é: {imc}
                </Text>

                <IMCMsg imc = {imc} />
            </View>
            
            /*<NumberFormat 
                value = {imc}
                decimalScale = '1'
                displayType = 'text'
                renderText={(imc) => <Text style = {styles.baseText}>Seu IMC é: {imc}</Text>}
            />*/
        )   
    }
}

const styles = StyleSheet.create({
    baseText: {
      fontSize: 25,
      fontWeight: "bold"
    }
});