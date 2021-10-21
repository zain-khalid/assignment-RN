import React, { useState, useContext, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles, {SPACING} from "../../assets/styles";
import editData from "../../context/actions/editData";
import editDataState from "../../context/actions/editDataState";
import { GlobalContext } from "../../context/Provider";

export default Edit = ({navigation, route}) => {
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [err, setErr] = useState({})

    const {dataDispatch, dataState:{editData_error, editData_loading, editData_success}} = useContext(GlobalContext)

    const sendData = () => {
        if(title && desc){
            var payLoad = route.params.data
            payLoad.title = title
            payLoad.description = desc
            editData(payLoad)(dataDispatch)
        } else {
            if(!title) setErr({...err, title:true})
            else setErr({...err, title:false})
            
            if(!desc) setErr({...err, desc:true})
            else setErr({...err, desc:false})
        }
    }
    
    useEffect(() => {
        setTitle(route.params.data.title)
        setDesc(route.params.data.description)
        editDataState(dataDispatch)
        if(editData_success) navigation.goBack()
    }, [route.params.data, editData_success])
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
                    disabled={editData_loading}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={sendData}
                    disabled={editData_loading}
                >
                    {editData_loading ? <ActivityIndicator color='black' /> : <Text>Edit</Text>}
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', padding:SPACING}}>
                {
                    editData_error.error && <Text style={{fontWeight:'bold', color:'red'}}>{editData_error.error}</Text>
                }
            </View>
        </View>
    )
}