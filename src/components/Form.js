import '../styles/components/Form.scss'
const Form = (props) => {
    const handleInputLetter = (ev) => {
        props.handleClickLetter(ev.target.value)

    }
    return (
        <form className="form">
            <label className="title" htmlFor="last-letter">
                Escribe una letra:
            </label>
            <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleInputLetter}
                value={props.lastLetter}
            />
        </form>
    )
};
export default Form