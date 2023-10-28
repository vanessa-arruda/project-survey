//question 4 - radio button

export const HeadItem = ({updateFormData, value, name, }) => {

    const chosenHeadItem = (e) => updateFormData("headItem", e.target.value);

    return (
        <div>
            <p>Choose one head accessory you want to use:</p>
            <div value={value} onChange={chosenHeadItem}>
                <label><input type="radio" name="headItem" value="bandana" checked={checked}>Bandana</input></label>
                <label><input type="radio" name="headItem" value="cowboy">Cowboy hat</input></label>
                <label><input type="radio" name="headItem" value="crown">Crown</input></label>
                <label><input type="radio" name="headItem" value="jewerly">Hair jewerly</input></label>
                <label><input type="radio" name="headItem" value="long-b-wig">Long black wig</input></label>
                <label><input type="radio" name="headItem" value="long-w-wig">Long white wig</input></label>
                <label><input type="radio" name="headItem" value="nun-coif">Nun coif</input></label>
                <label><input type="radio" name="headItem" value="wig">Crazy colorful wig</input></label>
                <label><input type="radio" name="headItem" value="pirate-hat">Pirate hat</input></label>
                <label><input type="radio" name="headItem" value="safety-helmet">Safety Helmet</input></label>
                <label><input type="radio" name="headItem" value="witch-hat">Witch hat</input></label>
                <label><input type="radio" name="headItem" value="none">None</input></label>
            </div>
        </div>
    )
}