import React ,{useEffect, useContext, useState} from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList,Alert, ActivityIndicator } from 'react-native'
import styles, { SPACING } from '../assets/styles/index'
import getData from '../context/actions/getData'
import { GlobalContext } from '../context/Provider'
import moment from 'moment'
import deleteData from '../context/actions/deleteData'
import mark from '../context/actions/mark'

export default Home = ({navigation}) => {
    const [search, setSearch] = useState(null)
    const [page, setPage] = useState([0,3])
    const {dataDispatch, dataState:{data, markData}} = useContext(GlobalContext)
    const myList = () => {
        getData(dataDispatch)
    }

    const checkdelete = (id) => {
        Alert.alert(
            "Delete confirmation",
            "Are you sure you want to delete this",
            [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () => deleteData(id)(dataDispatch) }
            ]
          );
    }

    const markComplete = (item) =>{
        mark(item)(dataDispatch)
    }

    useEffect(()=>{
        myList()
    },[])
    return (
        <View style={styles.main}>
            <View style={[styles.topMenu, styles.smallShadow]}>
                <TextInput
                    style={[styles.searchInput, {flex:2, marginRight:5}]}
                    value={search}
                    onChangeText={(value)=>setSearch(value)}
                    placeholder="Search"
                />
                <View style={{flexDirection:'row-reverse'}}>
                    <TouchableOpacity
                        style={styles.smallBtn}
                        onPress={()=>navigation.navigate('new')}
                    >
                        <Text>Add New</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{marginTop:SPACING/2, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:SPACING, paddingRight:SPACING}}>
                    <TouchableOpacity
                        style={[styles.smallBtn, styles.smallShadow]}
                        disabled={page[0] === 0 ? true : false}
                        onPress={()=>{
                            setPage([page[0]-3, page[1]-3])
                        }}
                    >
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold'}}>{page[0]} to {page[1]} / {data.length}</Text>
                    <TouchableOpacity
                        style={[styles.smallBtn, styles.smallShadow]}
                        disabled={page[1] > data.length ? true : false}
                        onPress={()=>{
                            setPage([page[0]+3, page[1]+3])
                        }}
                    >
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={search ? data.filter(x=> x.title.search(search) >= 0).slice(page[0],page[1]) : data.slice(page[0], page[1])}
                    keyExtractor={(item)=>item.id.toString()}
                    contentContainerStyle={styles.list}
                    renderItem={({item})=>{
                        return(
                            <View style={[styles.listItem]}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontSize:17, flex:1}}>{item.title}</Text>
                                    <Text style={{fontWeight:'bold', fontSize:10}}>{moment(item.created_at).format('ll')}</Text>
                                </View>
                                <Text style={{fontSize:13}}>{item.description}</Text>
                                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:SPACING/2}}>
                                    <TouchableOpacity
                                        style={[styles.deleteBtn, styles.smallShadow]}
                                        onPress={()=>checkdelete(item.id)}
                                    >
                                        <Text>Delete</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.editBtn, styles.smallShadow]}
                                        onPress={()=>navigation.navigate('edit', {data: item})}
                                    >
                                        <Text>Edit</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[item.completed === 0 ? styles.successBtn : styles.completeBtn, styles.smallShadow]}
                                        disabled={item.completed === 0 ? false : true}
                                        onPress={()=>markComplete(item)}
                                    >
                                        {markData.id === item.id ? <ActivityIndicator color='black' /> :<Text>{item.completed === 0 ? 'Mark as completed' : 'Completed'}</Text>}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
