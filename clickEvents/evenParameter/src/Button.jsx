function Button(){

    const handleClick = (e) => e.target.textContent = "FOCUS ON EXCELLENCE";
    return (<button onClick={(e) => handleClick(e)}>Click Me!</button>);

}
export default Button