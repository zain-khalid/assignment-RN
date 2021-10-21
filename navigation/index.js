import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from '../screens/Auth/index';
import { GlobalContext } from '../context/Provider';
import User from '../screens';


function UserValidation() {
  const {
    authState:{isSignIn}
  } = useContext(GlobalContext)
  

  return (
      <NavigationContainer>
      { isSignIn ?
          <User />
        : <Authentication />
      }
      </NavigationContainer>
  );
}

export default UserValidation;