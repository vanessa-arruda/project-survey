//Question 2 Select dropdown menu
export const Character = ({updateFormData, value, name}) => {

    const characterData = (e) => updateFormData("characterData", e.target.value);

    return (
        <div className="character-question-container">
            <p className="questions">Hi, {name}!</p>
            <label className="questions">Choose one of the main character you'd like to be:</label>
            <select value={value} onChange={characterData} className="select-btn">
                <option value="">Select item</option>
                <option value="Ghost">Ghost</option>
                <option value="Zombie">Zombie</option>
            </select>
        </div>
    )
}