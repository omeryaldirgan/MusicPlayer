import React, {useEffect, useState} from "react";
import {View,Text,Image} from 'react-native'
import styles from './styles'
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import { Audio, Video } from 'expo-av';
const song={
    id:'1',
    uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    imageUri:'https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5',
    title:'High on You',
    artist:'Vadim'
}

const PlayerWidget=()=>{
     const [sound, setSound] = useState<Sound|null>(null)
      const onPlaybackStatusUpdate=(status)=>{
         console.log(status);
      }
    const playCurrentSong=async ()=>{
        const { sound } = Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: true },
             onPlaybackStatusUpdate
        )
        setSound(sound)
    }

    useEffect(()=>{
        playCurrentSong();
    },[]);

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
