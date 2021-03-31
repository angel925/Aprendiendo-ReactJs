import ProTypes from 'prop-types'
import Numbers from './Numbers'

const MathOperations = (onClickOperation, onClickEqual) =>(
    <section className="math-operations">
        <Numbers text="+" clicHandler={onClickOperation} />
        <Numbers text="-" clicHandler={onClickOperation} />
        <Numbers text="*" clicHandler={onClickOperation} />
        <Numbers text="/" clicHandler={onClickOperation} />
        <Numbers text="=" clicHandler={onClickEqual} />
    </section>
)


MathOperations.proTypes = {
    onClickOperation : ProTypes.func.isRequired,
    onClickEqual: ProTypes.func.isRequired
}


export default MathOperations