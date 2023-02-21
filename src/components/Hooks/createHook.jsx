import { useEffect } from "react"
import { useState } from "react"

const useMyHook = (cb, delay = 1000)=>{
    useEffect(()=>{
        const interval = setInterval(()=>{
            cb()
        }, delay)

        return ()=> clearInterval(interval)
    },[cb, delay])
}

export function CreateHooks(){
    
    const [counter, setCounter] = useState(0)
    const [delay, setDelay] = useState()
    const [incrementor, setIncrementor] = useState(100)
    useMyHook( ()=> setCounter(c => c + 1), delay)
    
    useEffect(()=>{
        setDelay(incrementor)
    }, [incrementor])

    return(
        <div>
            <h1>Contador : {counter}</h1>
            <h4>Delay : {delay}</h4>
            <button onClick={()=>setDelay(c => c + incrementor)}> + {incrementor}</button>
            <button onClick={()=>setDelay(c => c - incrementor)}> - {incrementor}</button>
            <br />
            <input type="number" onChange={(e)=> setIncrementor(Number(e.target.value))}/>


        </div>
    )
}