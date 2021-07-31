import {ButtonHTMLAttributes} from 'react';
import './styles.css';
type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
    text:string;
}

export const Button = (props:buttonProps) =>{
    return(
        <button className="fl w-10">
            {props.text}
        </button>
    )
}