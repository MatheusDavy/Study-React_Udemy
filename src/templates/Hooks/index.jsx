import { CreateHooks } from "../../components/Hooks/createHook";
import { UseCallbackComponent } from "../../components/Hooks/useCallback";
import { UseEffectComponent } from "../../components/Hooks/useEffect";
import { UseMemoComponent } from "../../components/Hooks/useMemo";
import { UseReducerComponent } from "../../components/Hooks/useReducer";
import { UseRefComponent } from "../../components/Hooks/useRef";
import { UseStateComponent } from "../../components/Hooks/useState";

export function HooksPage(){
    return(
        <>
            {/* <UseStateComponent /> */}
            {/* <UseEffectComponent /> */}
            {/* <UseCallbackComponent /> */}
            {/* <UseMemoComponent /> */}
            {/* <UseRefComponent /> */}
            {/* <UseReducerComponent /> */}
            <CreateHooks />
        </>
    )
}