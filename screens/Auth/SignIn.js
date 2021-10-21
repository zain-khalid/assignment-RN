import React ,{useState, useContext} from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../assets/styles'
import signIn from '../../context/actions/auth/signIn'
import { GlobalContext } from '../../context/Provider'

const SPACING = 30

export default SignIn = ({navigation}) => {

    const {authDispatch, authState:{loading, error}} = useContext(GlobalContext)

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [err, setError] = useState({})

    const signinUser = () => {
        if(email && pass) {
            signIn({email,password:pass})(authDispatch)
        } else {
            if(!email) setError({...err, email:true})
            if(!pass) setError({...err, pass:true})
        }
    } 
    return (
        <View style={{padding:SPACING, backgroundColor:'white', flex:1}}>
            <View style={{alignItems:'center'}}>
                <Text style={[{fontWeight:'bold', fontSize:20}]}>Sign In</Text>
            </View>
            <View style={{marginTop:SPACING}}>
                <Text>Email</Text>
                <TextInput 
                    style={[styles.searchInput, {borderColor:'red', borderWidth:err.email ? 1 : 0}]}
                    placeholder="Enter email"
                    value={email}
                    onChangeText={(value)=>setEmail(value)}
                />
                {err.email && <Text style={{color:'red'}}>Email is required.</Text>}
            </View>
            <View style={{marginTop:SPACING}}>
                <Text>Password</Text>
                <TextInput 
                    style={[styles.searchInput, {borderColor:'red', borderWidth:err.pass ? 1 : 0}]}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={(value)=>setPass(value)}
                />
                {err.pass && <Text style={{color:'red'}}>Password is required.</Text>}
            </View>
            <View style={{marginTop:SPACING, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={()=> navigation.goBack()}
                    disabled={loading}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={signinUser}
                    disabled={loading}
                >
                    {loading ? <ActivityIndicator color='black' /> : <Text>Sign In</Text>}
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', padding:SPACING}}>
                {
                    error.error && <Text style={{color:'red', fontWeight:'bold'}}>{error.error}</Text>
                }
                
            </View>
        </View>
    )
}
