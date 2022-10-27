import { letters } from "./helpers/letters";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HangImage } from './components/HangImage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Imagenes del ahorcado */}
      <HangImage/>

      {/* Palabra Oculta */}
      <h3> _ _ _ _ _ _ _ _ _</h3>

      {/* Intentos */}
      <h3> Intentos : 0</h3>

      {/* Botones de las palabras */}
      {
           letters.map((letter) => (
            <button 
            key={letter}> 
            {letter}
            </button>
           ))
      }
    </div>
  )
}

export default App
