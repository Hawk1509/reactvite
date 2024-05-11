function Button(){
    var count = 0;

    const handleClick = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} You clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} Stop clicking me!`);
        }
    };
    return (<button onClick={handleClick}>Click Me!</button>);

}
export default Button