import React, { Component } from "react";
import Content from "../components/Content";
import Form from "../components/form/Form";
import Hearder from "../components/Header";
import "./Contador.css";

const initialState = {
  tempVisivel: false,
  dataAlvo: "20/05/2025",
  dia: 1,
  hora: 10,
  minuto: 5,
  segundo: 4,
  stop: false,
  btnDisabled: true,
};

export default class Contador extends Component {
  state = { ...initialState };

  async updateField(event) {
    const dataAlvo = await event.target.value;
    this.setState({ 
      dataAlvo,
      btnDisabled: false
    });
  }

  iniciar(e) {
    e.preventDefault();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    this.setState({ tempVisivel: true, stop: false });
    let count_down = new Date(`${this.state.dataAlvo} 00:00:00`).getTime();

    let temporizador = setInterval(() => {
      let now = new Date(Date.now()).getTime();
      let diff = count_down - now;
      let dia = Math.floor(diff / day);
      if (dia >= 0) {
        this.setState({
          dia,
          hora: Math.floor((diff % day) / hour),
          minuto: Math.floor((diff % hour) / minute),
          segundo: Math.floor((diff % minute) / second),
        });
        if (this.state.stop) {
          clearInterval(temporizador);
        }
      } else {
        clearInterval(temporizador);
      }
    }, 1000);
  }

  reset() {
    this.setState({ stop: true, tempVisivel: false,
     btnDisabled: true});
  }

  render() {
    return (
      <div className="app">
        {this.state.tempVisivel ? (
          <>
            <Hearder
              titulo="Contador"
              btnText="Reiniciar"
              stop={() => this.reset()}
            />
            <Content
              dia={this.state.dia}
              hora={this.state.hora}
              minuto={this.state.minuto}
              segundo={this.state.segundo}
            />
          </>
        ) : (
          <Form
            atualizar={(e) => this.updateField(e)}
            iniciar={(e) => this.iniciar(e)} disabled={this.state.btnDisabled}
          />
        )}
      </div>
    );
  }
}
