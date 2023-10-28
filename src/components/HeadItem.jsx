//question 4 - radio button

export const HeadItem = ({updateFormData, value, name, }) => {

    const funImgUrl="https://media.giphy.com/media/7702jh3NsloOseiDUk/giphy-downsized-large.gif";
    const chosenHeadItem = (e) => updateFormData("headItem", e.target.value);

    return (
        <div>
            <p className="questions">Choose one head accessory you want to use:</p>
            <div className="head-items-container">
                <div>
                    <img src={funImgUrl} className="headitems-img"/>
                </div>
                <div value={value} onChange={chosenHeadItem} className="radio-btn-headitems">
                    <div>
                        <input type="radio" id="bandana" name="headItem" value="bandana"/><label htmlFor="bandana">Bandana</label>
                    </div>
                    <div>
                        <input type="radio" name="headItem" value="cowboy"/><label htmlFor="cowboy">Cowboy hat</label>
                    </div>
                    <div>
                        <input type="radio" name="headItem" value="crown"/><label htmlFor="crown">Crown</label>
                    </div>
                    <div>
                        <input type="radio" name="headItem" value="jewerly"/><label htmlFor="jewerly">Hair jewerly</label>
                    </div>
                    <div>
                        <input type="radio" name="headItem" value="long-b-wig"/><label htmlFor="long-b-wig">Long black wig</label>
                    </div>
                    <div>
                        <input type="radio" name="headItem" value="wig"/><label htmlFor="wig">Crazy colorful wig</label>
                    </div>
                    <div>
                    <input type="radio" name="headItem" value="pirate-hat"/><label htmlFor="pirate-hat">Pirate hat</label>
                    </div>
                    <div>
                    <input type="radio" name="headItem" value="safety-helmet"/><label htmlFor="safety-helmet">Safety Helmet</label>
                    </div>
                    <div>
                    <input type="radio" name="headItem" value="witch-hat"/><label>Witch hat</label>
                    </div>
                    <div>
                    <input type="radio" name="headItem" value="none"/><label htmlFor="none">None</label>
                    </div>
                </div>

            </div>
        </div>
    )
}