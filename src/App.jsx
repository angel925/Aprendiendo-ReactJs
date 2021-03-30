//importacion 
import React from 'react'
import Result from './components/Result'
import Numbers from './components/Numbers'
import './App.css'
//generacion de la funcion
const App = () => {
    //cuerpo de funcion 
    console.log("Rende App")
    return (

        <main className='react-calculator'>

            <Result value={"10"}/>
            <Numbers/>
            <div className="functions">
                <button>
                    CLEAR
                </button>
                <button>
                    Remove
                </button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>


        </main>)
};
//exportacion
export default App;