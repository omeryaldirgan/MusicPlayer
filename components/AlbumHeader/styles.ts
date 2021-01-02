import {StyleSheet} from "react-native";
const styles=StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
        backgroundColor:'#000'
    },
    name:{
        color:'white',
        fontWeight:'bold',
        fontSize:21,
        marginTop:5,
    },
    creatorContainer:{
       flexDirection:'row',
        margin:5,
        fontSize:20,
        marginBottom:10
    },
    by:{
        marginRight:5,
        color:'lightgray',

    },
    likes:{
        color:'lightgray',
    },
    button:{
        backgroundColor:'#1ED760',
        height:50,
        width:150,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    buttonText:{
     color:'white'
    }
    ,
    image:{
        height:200,
        width:200
    },

})
export default styles;
