import {StyleSheet} from "react-native";
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#1c1c1c',
        position:'absolute',
        bottom:75,
        width:'100%',
        borderWidth:2,
        borderColor:'black',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginRight:10
    },
    rightContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    artist:{
        color:'gray',
        fontSize:17,
    },
    image:{
        height:75,
        width:75,
        marginRight:10
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'space-around'
    }

})
export default styles;