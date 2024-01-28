const Textbox = ({time, handleChange, activity}) => {
    return (
        <form class="bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4">
            <input size="15" name={time} placeholder={time} onChange={handleChange} value={activity.time}></input>
        </form>
    )
}

export default Textbox