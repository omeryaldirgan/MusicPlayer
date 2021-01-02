import React from "react";
import {View,Text,FlatList} from 'react-native'
import styles from './styles'
import {AlbumType} from "../../types";
import AlbumComponent from "../Album";

export type AlbumCategoryProps={
    title:string,
    albums:[AlbumType]
}

const AlbumCategory=(props:AlbumCategoryProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                     data={props.albums}
                     renderItem={({item})=><AlbumComponent album={item}/>}
                     keyExtractor={(item)=>item.id}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
             />

        </View>
    )
}

export default AlbumCategory;
