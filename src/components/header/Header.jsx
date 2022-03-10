import React from 'react';
import './Header.css'

export default function Hearder(props){
    return (
        <header className="header">
            <h1>{props.titulo}</h1>
            <button onClick={e => props.stop()}>{props.btnText}</button>
        </header>
    )
}