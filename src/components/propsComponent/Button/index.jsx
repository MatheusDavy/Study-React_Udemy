import { Component } from "react";
import './style.css'
export class Button extends Component{
    render(){
        const {text, onClick, disabled} = this.props

        return(
            <button id='load-more-post' onClick={onClick} disabled={disabled}>
                {text}
            </button>
        )
    }
}