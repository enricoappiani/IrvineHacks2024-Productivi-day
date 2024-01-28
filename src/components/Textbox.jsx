const Textbox = ({name, time, handleChange, value}) => {
    return (
        <form className="bg-white shadow-md rounded-4xl px-2 pt-6 pb-8 mb-4">
            <input size="15" name={name} placeholder={time} onChange={handleChange} value={value} id={`input-${name}`}></input>
        </form>
    )
}

export default Textbox