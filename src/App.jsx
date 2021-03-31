// se importan en oder alfabetico
//importacion 
import React from 'react'
import Result from './components/Result'
import MathOperaions from './components/MathOperations'
import Numbers from './components/Numbers'


import './App.css'
//generacion de la funcion
const App = () => {
    const clicHandlerFuntion = text =>{
        console.log("Numbers.clickHandler", text)
    }
    //cuerpo de funcion 
    console.log("Rende App")
    return (
        <main className='react-calculator'>
            <Result value = {undefined} />
            <div className="numbers">
                <Numbers  text="1" clicHandler={clicHandlerFuntion}/>
                <Numbers  text="2" clicHandler={clicHandlerFuntion}/>
                <Numbers  text="3" clicHandler={clicHandlerFuntion}/>
                <Numbers  text="4" clicHandler={clicHandlerFuntion}/>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>
                    Clr
                </button>
                <button>
                    Rmv
                </button>
            </div>
            {/* lo paso sin valor para que me arroje el error de proTypes */}
           <MathOperaions/>
        </main>
        )
};
//exportacion
export default App;