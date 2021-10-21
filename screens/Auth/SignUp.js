import React ,{useState, useContext} from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../assets/styles'
import signUp from '../../context/actions/auth/signUp'
import { GlobalContext } from '../../context/Provider'

const SPACING = 30

export default SignUp = ({navigation}) => {

    const {authDispatch, authState:{up_loading, up_error, isSignUp, message}} = useContext(GlobalContext)

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [pass_confirm, setConfirm_pass] = useState(null)
    const [err, setError] = useState({})
    const signUpUser = () => {
        if(email && pass && pass ? pass_confirm === pass : false) {
            signUp({email,password:pass, confirm_password:pass_confirm})(authDispatch)
        } else {
            if(!email) setError({...err, email:true})
            if(!pass) setError({...err, pass:true})
            if(pass !== pass_confirm) setError({...err, con_pass:true})
        }
    } 
    return (
        <View style={{padding:SPACING, backgroundColor:'white', flex:1}}>
            <View style={{alignItems:'center'}}>
                <Text style={[{fontWeight:'bold', fontSize:20}]}>Sign Up</Text>
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
            <View style={{marginTop:SPACING}}>
                <Text>Confirm Password</Text>
                <TextInput 
                    style={[styles.searchInput, {borderColor:'red', borderWidth:err.con_pass ? 1 : 0}]}
                    placeholder="Re Enter Password"
                    secureTextEntry={true}
                    value={pass_confirm}
                    onChangeText={(value)=>setConfirm_pass(value)}
                />
                {err.con_pass && <Text style={{color:'red'}}>Password not match.</Text>}
            </View>
            <View style={{marginTop:SPACING, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={()=> navigation.goBack()}
                    disabled={up_loading}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.smallBtn, styles.smallShadow]}
                    onPress={signUpUser}
                    disabled={up_loading}
                >
                    {up_loading ? <ActivityIndicator color='black' /> : <Text>Sign Up</Text>}
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', padding:SPACING}}>
                {
                    up_error && <Text style={{fontWeight:'bold', color:'red'}}>{up_error.error}</Text>
                }
                {
                    isSignUp && <Text style={{fontWeight:'bold'}}>{message}</Text>
                }
            </View>

        </View>
    )
}
