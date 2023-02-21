import { useEffect, useState } from "react";

export function UseEffectComponent(){
    
    const [amount, setAmount] = useState(0)

    useEffect(()=>{
        if(amount !== 0) alert(`Alerta sendo chamado ${amount} vez(es).`)
    }, [amount])

    function handleAmounIncrement(){
        setAmount(prevState => prevState + 1)
    }
    
    return(
        <button onClick={handleAmounIncrement}>Clicke to increment {amount}</button>
    )
}