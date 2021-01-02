import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import {AlbumType} from "../../types";


export type AlbumHeaderProps={
    album:AlbumType
}

const AlbumHeader=(props:AlbumHeaderProps)=>{
    const {album}=props;
    console.log('albumm',album);
    return(
        <View style={styles.container}>
            <Image source={{uri:album.imageUri}} style={styles.image}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.by}>{album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        PLAY
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;
