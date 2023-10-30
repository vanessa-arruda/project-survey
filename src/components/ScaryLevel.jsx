import { useState } from "react";

export const ScaryLevel = ({updateFormData}) => {

    const [scaryLevel, setScaryLevel] = useState(0);

    const scaryLevelData = (e) => updateFormData("scaryLevel", e.target.value); 
    const scaryLevelOptions = [
        "Baby Halloween",
        "Kids trick or treat school event",
        "Average adult scary party",
        "I want them to be afraid of me",
        "I'll make them sleep with lights on"
    ]

    const handleValueChange = (value) => {
        setScaryLevel(value);
        updateFormData("scaryLevel", scaryLevelOptions[value]);
    }

    return (
        <div className="slider-main-container">
            <p className="questions">Zombie right?</p>
            <p className="questions">In this case, what level of scary do you wanna look like?</p>
            <div className="slider-container">
                <input 
                type="range"
                className="slider-bar"
                step="1"
                min="0"
                max="4"
                value={scaryLevel}
                onChange={(e) => handleValueChange(e.target.value)}>
                </input>
            </div>
            <div>
                <p className="scary-level-options">{scaryLevelOptions[scaryLevel]}</p>
            </div>
        </div>
    )
}