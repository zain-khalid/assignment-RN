import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../assets/styles'

export default Welcome = ({navigation, route}) => {
    return (
        <View style={styles.welcomeMain}>
            <Text style={styles.welcomeHeading}>Welcome</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow, {marginRight:10}]}
                    onPress={()=>navigation.navigate('signin')}
                >
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={()=>navigation.navigate('signup')}
                >
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}