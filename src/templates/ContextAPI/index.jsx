import { CounterContextProvider } from '../../components/ContextAPI/context/CounterContext'
import {ContextAPIHome} from '../../components/ContextAPI/templates/Home/index'

export function ContextAPI(){
    return(
        <CounterContextProvider>
            <ContextAPIHome/>
        </CounterContextProvider>
    )
}