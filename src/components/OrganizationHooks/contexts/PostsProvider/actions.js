import * as types from './types'

export const loadPost = async(dispatch)=>{
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRaw.json()
    
    return () => dispatch({type: types.POSTS_SUCCESS, payload: posts})
}