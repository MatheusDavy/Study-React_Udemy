export function Button({children, onButtonClick}){

    return(
        <button
            onClick={onButtonClick}
            style={{padding: '15px', fontSize: '20px', borderRadius: '5px'}}
        >{children}</button>
    )
}