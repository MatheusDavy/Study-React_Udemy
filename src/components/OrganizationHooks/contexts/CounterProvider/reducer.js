import * as types from './types'

export const reducer = (state, action) => {
    // console.log(state) = é o valor do state do reducer
   // console.log(action) = é os valores passados no dispatch

    switch (action.type) {
        case types.INCREMENT_COUNTER: {
            return { ...state, counter: state.counter + 1 }
        }
        case types.DECREMENT_COUNTER: {
            return { ...state, counter: state.counter - 1 }
        }
    }

    return {...state}
}