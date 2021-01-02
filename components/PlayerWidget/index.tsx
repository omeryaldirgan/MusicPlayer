import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './styles'
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const song={
    id:'1',
    imageUri:'https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5',
    title:'High on You',
    artist:'Helen'
}

const PlayerWidget=()=>{
    return(
        <View style={styles.container}>
            <Image source={{uri:song.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name='hearto' size={25} color={'#fff'}/>
                    <FontAwesome name='play' size={25} color={'#fff'}/>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;
