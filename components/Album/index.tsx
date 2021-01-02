import React from "react";
import {View,Image,Text,TouchableWithoutFeedback} from 'react-native'
import styles from './styles'
import {AlbumType} from "../../types";
import {useNavigation} from '@react-navigation/native'
export type AlbumProps={
    album:AlbumType
}

const AlbumComponent=(props:AlbumProps)=>{
    const {album}=props;
    const navigation=useNavigation();
    const onPress=()=>{
        navigation.navigate('AlbumScreen',{id:album.id});
    }
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{uri:album.imageUri}} style={styles.image}/>
                <Text style={styles.text}>{album.artistHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent;
