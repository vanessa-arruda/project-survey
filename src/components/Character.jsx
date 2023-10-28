//Question 2 Select dropdown menu
export const Character = ({updateFormData, value, name}) => {

    const characterData = (e) => updateFormData("characterData", e.target.value);

    return (
        <div className="character-question-container">
            <p>Hi, {name}!</p>
            <label className="questions">Choose one of the main character you'd like to be:</label>
            <select value={value} onChange={characterData} className="select-btn">
                <option value="">Select item</option>
                <option value="Barbie">Barbie</option>
                <option value="Clown">Clown</option>
                <option value="Farmer">Farmer</option>
                <option value="Ghost">Ghost</option>
                <option value="Pirate">Pirate</option>
                <option value="Witch">Witch</option>
                <option value="Zombie">Zombie</option>
            </select>
        </div>
    )
}