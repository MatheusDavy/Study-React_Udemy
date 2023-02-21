import { initialState } from '.'
import * as actionTypes from './actions-types'

export const reducer = (state, action)=>{

    switch(action.type){
        case actionTypes.INCREASE: {
            return {...state, counter: state.counter + 1}
        }

        case actionTypes.DECREASE: {
           if(state.counter > 0){
            return {...state, counter: state.counter - 1}
           }else{
            console.warn("Min value is 0")
           }
        }

        case actionTypes.RESET: {
            return {...initialState}
        }

        case actionTypes.SET_COUNTER: {
            return {...state, ...action.payload}
        }

        case actionTypes.ASYNC_START: {
            return {...state, loading: true, error: false}
        }

        case actionTypes.ASYNC_INCREASE_END: {
            return {...state, loading: false, counter: state.counter + 1, error: false}
        }

        case actionTypes.ASYNC_DECREASE_END: {
            if(state.counter > 0){
                return {...state, loading: false, counter: state.counter - 1, error: false}
            } else{
                console.warn("Min value is 0")
            }
        }

        case actionTypes.ASYNC_INCREASE_ERROR: {
            return {...state, loading: false, error: true}
        }

    }

    return {...state}

}