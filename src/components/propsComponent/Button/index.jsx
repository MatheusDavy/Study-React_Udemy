import { Component } from "react";
import './style.css'
export class Button extends Component{
    render(){
        const {text, onClick} = this.props

        return(
            <button id='load-more-post' onClick={onClick}>
                {text}
            </button>
        )
    }
}