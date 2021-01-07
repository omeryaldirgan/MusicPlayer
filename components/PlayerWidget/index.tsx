import React, {useEffect, useState} from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {Sound} from 'expo-av/build/Audio/Sound';

const song={
    id:'1',
    uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    imageUri:'https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5',
    title:'High on You',
    artist:'Vadim'
}

const PlayerWidget=()=>{
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying,setIsPlaying]=useState<boolean>(true);
    const [duration,setDuration]=useState<number|null>(null);
    const [position,setPosition]=useState<number|null>(null);

    const onPlaybackStatusUpdate=(status)=>{
         setIsPlaying(status.isPlaying);
         setDuration(status.durationMillis);
         setPosition(status.positionMillis);
    }

    const playCurrentSong=async ()=>{
         if(sound){
          await sound.unloadAsync();
         }
        const { sound:newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
             onPlaybackStatusUpdate
        )
        setSound(newSound)
    }


    const onPlayPausePress=async ()=>{
        if(!sound){
            return;
        }
        if(isPlaying){
            await sound.stopAsync();
        }else{
            await sound.playAsync();
        }
    }

    const getProgress=()=>{
        if(sound===null || duration===null || position===null){
           return 0;
        }
        return (position/duration)*100;
    }

    useEffect(()=>{
        playCurrentSong();
    },[]);

    return(
        <View style={styles.container}>
            <View style={[styles.progress,{width:`${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{uri:song.imageUri}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign name='hearto' size={25} color={'#fff'}/>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying?'pause':'play'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;
