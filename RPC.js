import React, { useState } from 'react';
import Game from './Game.js';
import Resultado from './Resultado';
import { View } from 'react-native';
import styles from './styles';


function RPS() {

  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});

   
const opciones = [
  {
    eleccion: "piedra",
    derrota:"tijera"
  },

  {
    eleccion: "papel",
    derrota:"piedra"
  },
  
  {
    eleccion: "tijera",
    derrota:"papel"
  }
]

const elegirOpcion = (event) => {
  const jugador = opciones.find(e => e.eleccion === event.target.textContent);
  setEleccionJugador(jugador);
  eleccionRival();
}

const eleccionRival = () => {
  const eleccion = opciones[Math.floor(Math.random() * opciones.length)];

  setEleccionMaquina(eleccion);
}

  return (
    <div className="App">
      <Resultado jugador = {eleccionJugador} maquina = {eleccionMaquina}
      />
      <main>
        <section>
          <div className = "jugador">Jugador</div>
          <div className = "eleccion">{eleccionJugador.eleccion}</div>
        </section>
        <section>
          <div className = "maquina">Maquina</div>
          <div className = "eleccion">{eleccionMaquina.eleccion}</div>
        </section>
      </main>

      <View style={styles.opciones}>
        {
          opciones.map((e, index) => <Game
          elegir = {elegirOpcion}
            valor = {opciones[index]}
          />)
        }
      </View>
    </div>
  );
}

export default RPS;