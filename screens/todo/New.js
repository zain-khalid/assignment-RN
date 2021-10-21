import React, { useState, useContext, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles, {SPACING} from "../../assets/styles";
import dataState from "../../context/actions/dataState";
import newData from "../../context/actions/newData";
import { GlobalContext } from "../../context/Provider";

export default New = ({navigation}) => {
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [err, setErr] = useState({})

    const {dataDispatch, dataState:{newData_error, newData_loading, newData_success}} = useContext(GlobalContext)

    const sendData = () => {
        if(title && desc){
            newData({title:title, description:desc})(dataDispatch)
        } else {
            if(!title) setErr({...err, title:true})
            else setErr({...err, title:false})
            
            if(!desc) setErr({...err, desc:true})
            else setErr({...err, desc:false})
        }
    }
    const clearAll = () => {
        dataState(dataDispatch)
        setTitle(null)
        setDesc(null)
    }
    useEffect(() => {
        clearAll()
        if(newData_success) navigation.goBack()
    }, [newData_success])
    return (
        <View style={{padding:SPACING, backgroundColor:'white', flex:1}}>
            <View style={{marginTop:SPACING}}>
                <Text>Title</Text>
                <TextInput 
                    style={[styles.searchInput, {borderColor:'red', borderWidth:err.title ? 1 : 0}]}
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={(value)=>setTitle(value)}
                />
                {err.title && <Text style={{color:'red'}}>Title is required.</Text>}
            </View>
            <View style={{marginTop:SPACING}}>
                <Text>Description</Text>
                <TextInput 
                    style={[styles.searchInput, {borderColor:'red', borderWidth:err.desc ? 1 : 0}]}
                    placeholder="Enter Description"
                    multiline={true}
                    numberOfLines={5}
                    value={desc}
                    onChangeText={(value)=>setDesc(value)}
                />
                {err.desc && <Text style={{color:'red'}}>Description is required.</Text>}
            </View>
            <View style={{marginTop:SPACING, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={()=> navigation.goBack()}
                    disabled={newData_loading}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={sendData}
                    disabled={newData_loading}
                >
                    {newData_loading ? <ActivityIndicator color='black' /> : <Text>Add</Text>}
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', padding:SPACING}}>
                {
                    newData_error.error && <Text style={{fontWeight:'bold', color:'red'}}>{newData_error.error}</Text>
                }
            </View>
        </View>
    )
}