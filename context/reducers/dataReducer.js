import { DATA_SUCCESS, DATA_ERROR, DATA_LOADING, NEW_DATA_ERROR, NEW_DATA_LOADING, NEW_DATA_SUCCESS, DELETE_DATA_ERROR, DELETE_DATA_LOADING, DELETE_DATA_SUCCESS, EDIT_DATA_ERROR, EDIT_DATA_SUCCESS, EDIT_DATA_LOADING, EDIT_DATA_STATE, MARK_DATA_LOADING, NEW_DATA_STATE } from "../../constants/actionTypes";

export default dataReducer = (state, {type, payload}) => {
    switch (type){
        case DATA_LOADING:
            return {
                ...state,
                loading:true,
                error:{}
            }
        case DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                dataObject:payload,
                data:payload.items.data,
                error:{}
            }
        case DATA_ERROR:
            return {
                ...state,
                loading:false,
                error:payload,
                data:[],
                dataObject:{}
            }
        case NEW_DATA_LOADING:
            return {
                ...state,
                newData_loading:true,
                newData_error:{},
                newData_success:false 
            }
        case NEW_DATA_SUCCESS:
            return {
                ...state,
                newData_loading:false,
                newData_data:payload,
                newData_error:{},
                newData_success:true,
                data:[ 
                        {
                            id: payload.item.id,
                            user_id: payload.item.user_id,
                            title: payload.item.title,
                            description: payload.item.description,
                            completed: 0,
                            completed_at: null,
                            created_at: payload.item.created_at,
                            updated_at: payload.item.updated_at
                        }, ...state.data
                    ]
            }
        case NEW_DATA_STATE:
            return {
                ...state,
                newData_Loading:false,
                newData_error: {},
                newData_success: false,
                newData:{},
            }
        case NEW_DATA_ERROR:
            return {
                ...state,
                newData_loading:false,
                newData_error:{},
                newData_data:{},
            }
        case DELETE_DATA_LOADING:
            return {
                ...state,
                delData_loading:true,
                delData_error:{},
                delData_success:false
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                delData_loading:false,
                delData:payload,
                data:state.data.filter(x=>x.id !==payload.id),
                delData_error:{},
                delData_success:true,
            }
        case DELETE_DATA_ERROR:
            return {
                ...state,
                delData_loading:false, 
                delData_error:payload,
                delData_data:{},
            }
        case EDIT_DATA_STATE:
            return {
                ...state,
                editData_Loading:false,
                editData_error: {},
                editData_success: false,
                editData:{}
            }
        case EDIT_DATA_LOADING:
            return {
                ...state,
                editData_loading:true,
                editData_error:{},
                editData_success:false
            }
        case EDIT_DATA_SUCCESS:
            var newArray = []
            state.data.map((element)=>{
                if(element.id === payload.item.id) newArray.push(payload.item)
                else newArray.push(element)
            })
            return {
                ...state,
                editData_loading:false,
                editData:payload,
                data:newArray,
                editData_error:{},
                editData_success:true,
                markData:{},
            }
        case EDIT_DATA_ERROR:
            return {
                ...state,
                editData_loading:false,
                editData_error:payload,
                editData_data:{},
            }
        case MARK_DATA_LOADING:
            return {
                ...state,
                markData:payload
            }

        default:
            return state
            
    }
}