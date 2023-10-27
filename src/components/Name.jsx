import { useState } from "react";
export const Name = () => {

    const[name, setName] = useState("");
    console.log(name);

    return (
      <div className="name-container">
        <label htmlFor="name-input">Enter your name: </label>
        <input 
            id="name-input" 
            type="text"
            onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
    )
  };