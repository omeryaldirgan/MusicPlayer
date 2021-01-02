import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native'
import {useEffect} from "react";
import {albumDetails} from "../data/data";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen=()=>{

    const route=useRoute();

    useEffect(()=>{
        console.log(albumDetails);
    },[]);

   return(
       <View>
           <FlatList
               data={albumDetails.songs}
               renderItem={({item})=>(<SongListItem song={item}/>)}
               keyExtractor={(item)=>item.id}
               ListHeaderComponent={()=>(<AlbumHeader album={albumDetails}/>)}
               stickyHeaderIndices={[0]}
           />
       </View>
   )
}
export default AlbumScreen;
