import React, { Component } from 'react';
import { FlatList } from 'react-native';

import AlbumDetail from './AlbumDetails';

export default class AlbumList extends Component {

    constructor(props) {
        super(props)
        this.state = { albuns: [] }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then(response => response.json())
        .then(responseJson => this.setState({ albuns: responseJson.albums }))
    }

    render() {
        return (
            <FlatList 
                style={{marginTop: 10}}
                data={this.state.albuns}
                renderItem = {
                    ({item})=>{
                        return (
                            <AlbumDetail album={item} {...this.props}/>
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
}