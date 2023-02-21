import { useEffect } from 'react';
import * as actionTypes from './actions-types'

export const buildActions = (dispatch) => {

    return {
        increase: ()=>dispatch({type: actionTypes.INCREASE}),
        decrease: ()=>dispatch({type: actionTypes.DECREASE}),
        reset: ()=>dispatch({type: actionTypes.RESET}),
        setCounter: (counter)=>dispatch({type: actionTypes.SET_COUNTER, payload: counter }),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
        asyncDecrease: () => asyncDecreaseFn(dispatch),
        asyncError: () => asyncErrorFn(dispatch),
    };
}

const asyncIncreaseFn = async (dispatch)=>{
    dispatch({type: actionTypes.ASYNC_START})

    return await new Promise(resolve => setTimeout(()=>{
        dispatch({type: actionTypes.ASYNC_INCREASE_END})
        resolve('RESOLVED!')
    }, 3000))
}

const asyncDecreaseFn = async (dispatch)=>{
    dispatch({type: actionTypes.ASYNC_START})

    return await new Promise(resolve => setTimeout(()=>{
        dispatch({type: actionTypes.ASYNC_DECREASE_END})
        resolve('RESOLVED!')
    }, 3000))
}

const asyncErrorFn = async (dispatch)=>{
    dispatch({type: actionTypes.ASYNC_START})

    return await new Promise(resolve => setTimeout(()=>{
        dispatch({type: actionTypes.ASYNC_INCREASE_ERROR})
        resolve('REJECTED!')
    }, 3000))
}
