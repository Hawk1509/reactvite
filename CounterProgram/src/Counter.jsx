import {useState} from "react"

function Counter(){
    const[count,setCount] = useState(0);
    const[ChangeNum,setChangeNum] = useState(1);

    const increment = () => {
        setCount(count + Number(ChangeNum));
    }
    
    const decrement = () => {
        setCount(count - Number(ChangeNum));
    }

    const reset = () => {
        setCount(0);
    }

    const textReader= (event) => {
        setChangeNum (event.target.value);

        /*if (isNaN(textReader)){
            setChangeNum(textReader);
        }
        else{
            setChangeNum(1);
        }*/
    };
    

    return(<div className = "count-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick = {decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
            <div className="number-reader" onChange={textReader}>
                <h3>Enter value to increment the number by:</h3>
                <input 
                    type="text"
                    
                />
            </div> 
            </div>);


    
}
export default Counter