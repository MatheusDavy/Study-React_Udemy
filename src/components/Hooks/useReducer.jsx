import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react"

function decrementeIncrement(state, action){
    switch(action.type){
        case 'increment':
        return state + 1;
        
        case 'decrement':
            return state - 1;

        default:
            alert("Erro desconhecido")

    }
}

export function UseReducerComponent(){
    
    const [counter, dispatch] = useReducer(decrementeIncrement, 0)
    
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> dispatch({type: 'increment'})}>Incrementar</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Decrementar</button>
        </div>
    )
}