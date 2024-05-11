function profilePicture(){
    const imageUrl = './src/assets/wall.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src = {imageUrl}></img>);

}
export default profilePicture