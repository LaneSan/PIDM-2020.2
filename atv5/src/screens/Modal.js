import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import Card from '../components/card/Card';
import CardItem from '../components/card/CardItem';
import MyButton from '../components/MyButton';

export default class Modal extends Component {

    constructor(props){
        super(props)
        this.state = {tracks:[], loading: true}
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.route.params.albumTracks)
        .then(response => response.json())
        .then(responseJson => this.setState({ tracks:responseJson.tracks, loading:false }))
    }

    renderTracks(){

        if(this.state.loading === true){
            return (
                <View style={ styles.containerTracks }>
                    <ActivityIndicator size='larger' color='red'/>
                </View>
            )
        }

        return (
            <FlatList
                style={{marginTop: 10}}
                data = {this.state.tracks}
                renderItem = {
                    ({item,index})=>{
                        return(
                            <View>
                                <Text style={{ fontSize: 17 }}>
                                    {(index+1<10) ? '0'+(index+1) : index+1 } - {item.title} - {item.duration}
                                </Text>
                            </View>
                        )
                    }
                }
                keyExtractor = {
                    (index,item) => {
                        return index+item
                    }
                }

            />
        )
    }
    
    render() {
        return (
            <Card>
                <CardItem style={ styles.textCard }>
                    <Text style={ styles.text }>
                        {this.props.route.params.albumName}
                    </Text>
                    <Text>
                        {this.props.route.params.albumArtist}
                    </Text>    
                </CardItem>
                <CardItem>
                   {this.renderTracks()}
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={() => this.props.navigation.goBack()}
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>
        )
    }
}


const styles = StyleSheet.create({
    containerTracks: {
        flex:1,
        alignItems:'center'
    },
    textCard: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:18,
        fontWeight:'bold'
    }
});
