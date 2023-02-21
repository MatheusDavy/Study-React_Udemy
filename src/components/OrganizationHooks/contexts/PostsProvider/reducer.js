import * as types from './types'

export const reducer = (state, action) => {
    // console.log(state) = é o valor do state do reducer
   // console.log(action) = é os valores passados no dispatch

    switch (action.type) {
        case types.POSTS_SUCCESS: {
            return { ...state, posts: action.payload, loading: false }
        }
        case types.POSTS_LOADING: {
            return { ...state, loading: true }
        }
    }

    return {...state}
}