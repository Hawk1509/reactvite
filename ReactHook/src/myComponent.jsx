import React, { useState } from "react"

function MyComponent(){
    const [name, setName] = useState("AMBADA");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateName = () => {
        setName("THALOYI");
    }

    const IncrementAge = () => {
        setAge(age + 1);
    }

    const updateInformation = () => {
        setIsEmployed(!isEmployed);
    }


    return(<div>
            <p>Dialogue :  {name} </p>  
            <button onClick={updateName}>Press to Complete</button>

            <p>Age : {age} </p>
            <button onClick={IncrementAge}>Increment Age</button>
            <h3>Age Increments by 1</h3>

            <p>Employement : {isEmployed? "Yes" : "No"}</p>
            <button onClick={updateInformation}>Update Information</button>
            <h3>Press to change the status</h3>
            <p></p>
            </div>);
}
export default MyComponent