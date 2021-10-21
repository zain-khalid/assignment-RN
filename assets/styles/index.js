import React from 'react'
import { StyleSheet } from 'react-native'

export const SPACING = 30

const colors = {
    white: 'white',
    lightWhite: 'ghostwhite',
    success: 'papayawhip',
    successBtn: 'navajowhite',
    deleteBtn:'orange',
    editBtn:'mintcream'
}

const styles = StyleSheet.create({
    main:{
        padding:SPACING/3
    },
    topMenu:{
        padding:SPACING/3,
        flexDirection:'row',
        backgroundColor:colors.white,
        borderRadius:5
    },
    searchInput:{
        padding:SPACING/3,
        backgroundColor:colors.lightWhite,
        borderRadius:5
    },
    Heading:{
        fontSize:15,
        fontWeight:'bold'    
    },
    smallShadow:{
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    smallBtn:{
        padding:SPACING/3,
        backgroundColor:colors.success,
        borderRadius:5
    },
    welcomeMain:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    welcomeHeading:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom:SPACING
    },
    list:{
        padding:SPACING/4
    },
    listItem:{
        marginTop:SPACING/2,
        backgroundColor:'white',
        borderRadius:SPACING/4,
        padding:SPACING/2
    },
    successBtn:{
        padding:SPACING/4,
        backgroundColor:colors.successBtn,
        borderRadius:5
    },
    completeBtn:{
        padding:SPACING/4,
        backgroundColor:'white',
        borderRadius:5
    },
    deleteBtn:{
        padding:SPACING/4,
        backgroundColor:colors.deleteBtn,
        borderRadius:5
    },
    editBtn:{
        padding:SPACING/4,
        backgroundColor:colors.editBtn,
        borderRadius:5
    }
})

export default styles