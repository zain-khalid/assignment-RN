import React, {useContext, useEffect, useState} from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import styles from '../assets/styles';
import { GlobalContext } from '../context/Provider';
import signOut from '../context/actions/auth/signOut';
import New from './todo/New';
import Edit from './todo/Edit'

const Stack = createNativeStackNavigator();

function User() {

    const {authDispatch, authState:{out_loading}} = useContext(GlobalContext)

    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ 
            title: 'To Do App',
            headerRight: () => (
                <TouchableOpacity
                    style={styles.smallBtn}
                    onPress={()=>signOut(authDispatch)}
                    disabled={out_loading}
                >
                    {out_loading ? <ActivityIndicator color='black' /> : <Text>Sign Out</Text>}
                </TouchableOpacity>
            ),
            }}
        />
        <Stack.Screen 
            name="new" 
            component={New} 
            options={{ 
            title: 'Add New',
            headerRight: () => (
                <TouchableOpacity
                    style={styles.smallBtn}
                    onPress={()=>signOut(authDispatch)}
                >
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            ),
            }}
        />
        <Stack.Screen 
            name="edit" 
            component={Edit} 
            options={{ 
            title: 'Edit',
            headerRight: () => (
                <TouchableOpacity
                    style={styles.smallBtn}
                    onPress={()=>signOut(authDispatch)}
                >
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            ),
            }}
        />
        </Stack.Navigator>
  );
}

export default User;