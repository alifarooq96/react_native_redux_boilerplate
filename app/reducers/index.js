import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, ADD_TO_DATA } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case ADD_TO_DATA:
            return {
                ...state,
                data: [{
                    "title": "Update your main files",
                    "description": "Update index.ios.js and index.android.js"
                  }, ...state.data]
            }
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;