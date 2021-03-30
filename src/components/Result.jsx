import React from 'react'

const Result = (props) => {
    console.log("Renderización de Rresult", props.value)
    return (
        <div className="result">
            {props.value}
        </div>
    )
}

export default Result;