import ProTypes from 'prop-types'


// Numbers for the calc app 0-9
//Componente para los numeros numbers, en vez de button
const Numbers = ({ type, text, clicHandler }) => (
    <button className={type} onClick={() => clicHandler(text)}>
        <span>{text}</span>
    </button>
)

Numbers.proTypes = {
    type: ProTypes.string,
    text: ProTypes.string.isRequired,
    clicHandler: ProTypes.func.isRequired
}

export default Numbers;