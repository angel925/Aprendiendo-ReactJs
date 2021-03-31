
import ProTypes from 'prop-types'

const Result = ({ value }) => (
    <div className="result">
        {value}
    </div>
)

//protypes requeridos 
Result.proTypes = {
    value: ProTypes.string.isRequired
}
Result.defaultProps = {
    value: '0'
}

export default Result;