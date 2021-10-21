import React, {createContext, useReducer} from "react"

import authInitialState from "./initialStates/authInitialState"
import authReducer from "./reducers/authReducer"

import dataList from "./initialStates/dataList"
import dataReducer from './reducers/dataReducer'

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState)
    const [dataState, dataDispatch] = useReducer(dataReducer, dataList)

    return (
        <GlobalContext.Provider 
            value={{
                authState, 
                authDispatch,
                dataState, 
                dataDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider; 
