import '../styles/components/Letters.scss'
const SolutionLetter = (props) => {
    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters">{props.renderSolutionLetters}</ul>
        </div>
    )
};
export default SolutionLetter