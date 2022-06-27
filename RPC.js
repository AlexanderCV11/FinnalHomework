import './RPC.css';
import './Game.js';

function RPS() {
  return (
    <div className="App">
      <h1>
          Bienvenido al piedra papel o tijera 
      </h1>
        <img id="user"></img>
        <img id="random"></img>
      <header className="App-header">

        

        <div id="resultado">
          Elije una opcion
        </div>
        
        <button className='boton' id='piedra'>
          <img src={'file:///C:/Users/Alexander%20Corral/OneDrive/Documentos/reactP/piedrapapeltijera/src/piedra.png'}  className='imagen'/>
        </button>
        <button className='boton' id='papel'>
          <img src={'file:///C:/Users/Alexander%20Corral/OneDrive/Documentos/reactP/piedrapapeltijera/src/papel.png'}  className='imagen'/>  
        </button>
        <button className='boton' id='tijera'>
          <img src={'file:///C:/Users/Alexander%20Corral/OneDrive/Documentos/reactP/piedrapapeltijera/src/tijera.png'}  className='imagen'/>
        </button>
        
      </header>
    </div>
  );
}

export default RPS;