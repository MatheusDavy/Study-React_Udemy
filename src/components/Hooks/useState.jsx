import { useState } from "react"


export function UseStateComponent(){

    const [rotating, setRotating] = useState(false)
    const [amountClicked, setAmountClicked] = useState(1)

    function handleRotating(){
        setRotating(!rotating)
    }

    function handleAmountClickedIncrement(){
        setAmountClicked(prevState => prevState + 1)
    }

    function handleAmountClickedDecrement(){
        setAmountClicked(prevState => prevState - 1)
    }

    return(
        <div className={`container ${rotating === true ? 'rotating' : 'notRotaing'}`}>
            {rotating === true ? 
                <p>
                    Opa {amountClicked}
                </p>
            : 
                <p>
                    Hellow {amountClicked}
                </p>
            }

            <br />
            <br />
            <button onClick={handleRotating}>
                change state
            </button>
            <br />
            <br />
            <button onClick={handleAmountClickedIncrement}>
                add more one
            </button>
            <br />
            <br />
            <button onClick={handleAmountClickedDecrement}>
                add more one
            </button>
        </div>

        
    )
}