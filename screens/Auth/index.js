import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './SignIn'
import Wellcome from '../Wellcome' 
import SignUp from './SignUp'

export default Authentication = () => {
    const AuthStack = createNativeStackNavigator()
    return (
        <AuthStack.Navigator 
            screenOptions={{headerShown:false}}
            initialRouteName="welcome"
        >
            <AuthStack.Screen name={'signin'} component={SignIn} />
            <AuthStack.Screen name={'signup'} component={SignUp} />
            <AuthStack.Screen name={'welcome'} component={Wellcome} />
        </AuthStack.Navigator> 
    )
}
