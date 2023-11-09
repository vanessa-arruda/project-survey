//question 5 - checkbox button
//Choose face accessories:
// Phantom mask, Monster mask, clown makeup, Día de los muertos make up, scars, blood marks, Vampire Teeth

export const FaceItem = ({ value, updateFormData }) => {
    const faceItemUrl="https://media.giphy.com/media/da7JVUDLQfB645dZ8T/giphy.gif";
    // Define an array of available face accessories
    const accessories = [
      "Phantom mask",
      "Monster mask",
      "Clown makeup",
      "Día de los muertos make up",
      "Scars",
      "Blood marks",
      "Vampire Teeth"
    ];
  
    // Define a function to handle checkbox changes
    const handleCheckboxChange = (accessory) => {
      const updatedAccessories = value.includes(accessory)
        ? value.filter(item => item !== accessory)
        : [...value, accessory];
  
      // Update the form data with the selected accessories
      updateFormData('faceItem', updatedAccessories);
    };
  
    return (
      <div>
        <p className="questions">Let's also add some make up and/or face accessories to finish?</p>
        <p className="questions">Choose what you want to use below: </p>
        {accessories.map(accessory => (
          <form>
            <label key={accessory} htmlFor={accessory}>
                <input
                id={accessory}
                type="checkbox"
                value={accessory}
                checked={value.includes(accessory)}
                onChange={() => handleCheckboxChange(accessory)}
                />
                {accessory}
            </label>
          </form>
        ))}
        <div className="faceitems-img-container">
          <img src={faceItemUrl} className="faceitems-img"/>
        </div>
      </div>
    );
  };