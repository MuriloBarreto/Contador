import React from 'react';
import './Content.css';
import Digit from './Digit';

export default function Content(props){
    return (
        <main className="content">
            <h2>Faltam</h2>
            <div className="temp">
                <Digit digit={props.dia} label="Dias"/>
                <Digit digit={props.hora} label="Horas"/>
                <Digit digit={props.minuto} label="Minutos"/>
                <Digit digit={props.segundo} label="Segundos"/>
            </div>

        </main>
    )
}