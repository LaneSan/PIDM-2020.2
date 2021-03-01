import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './card/Card';
import CardItem from './card/CardItem';
import MyButton from './MyButton';

export default class AlbumDetail extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <View style={ styles.avatar }>
                        <Image style={ styles.avatarDetails }
                            source={{ uri: 'https://i.pinimg.com/originals/4a/2e/70/4a2e7065a22a573233764c0c7dd0da4d.jpg' }} />
                    </View>
                    <View style={ styles.albumTitle }>
                        <Text style={ styles.albumName }>{this.props.album.name}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardItem>
                <CardItem style={ styles.imageAlbum }>
                    <Image style={ styles.sizeImageAlbum }
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.album.image }} />
                </CardItem>
                <CardItem style={ styles.button }>
                    <MyButton
                        onPress={
                            () =>this.props.navigation.navigate(
                                'Modal',
                                {albumName:this.props.album.name,
                                albumArtist:this.props.album.artist,
                                albumTracks:this.props.album.links.tracks}
                            )
                        }
                    >
                        Veja Playlist
                    </MyButton>
                    <MyButton
                        style={{ backgroundColor: 'lightgreen' }}
                        onPress={() => alert( 'Parbéns! Você fez uma ótima aquisição comprando o álbum ' + this.props.album.name + '. Agora divirta-se!')}
                    >
                        <Text style={{ color: 'green' }}>Comprar agora!</Text>
                    </MyButton>
                </CardItem>
            </Card>

        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        marginLeft: 1, 
        marginRight: 15       
    },
    avatarDetails: {
        width: 50, 
        height: 50,
        borderRadius: 50
    },
    albumTitle: {
        justifyContent: 'space-around'
    },
    albumName: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    imageAlbum: {
        justifyContent: 'center'
    },
    sizeImageAlbum: { 
        width: 300, 
        height: 300 
    },
    button: {
        borderColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})