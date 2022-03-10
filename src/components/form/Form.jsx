import React from "react";
import './Form.css'

export default function Form(props){
    return (
        <div className='bloco'>
        <h1>Contador</h1>
        <form className="formulario">
            <label htmlFor="dataAlvo">Informe uma data</label>
            <input onChange={e => props.atualizar(e)}  type="date" name="dataAlvo" required/>
            <button disabled={props.disabled} onClick={e => props.iniciar(e)}>Iniciar contagem</button>
        </form>
        </div>
    )
}