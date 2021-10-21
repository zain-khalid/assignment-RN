import React, { useEffect } from 'react'
import UserValidation from './navigation'
import GlobalProvider from './context/Provider'
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet } from 'react-native';

function App() {
  useEffect(()=>{
    setTimeout(async () => {
      await SplashScreen.hide();
    }, 3000);
  }, [])
  return (
    <GlobalProvider>
      <UserValidation />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App