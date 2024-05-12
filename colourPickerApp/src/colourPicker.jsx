import { useState } from "react";

function colourPicker(){
    const[color, setColour] = useState("#FFFFF");

    function handleColorChange(e){
        setColour(e.target.value);
    }

    return( <div className="color-picker-container">
                <h1>Colour Picker</h1>
                <div className="color-display" style = {{backgroundColor: color}}>
                    <p>Selected Colour: {color}</p>
                </div>
                <label>Select a Colour: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>);

}
export default colourPicker;