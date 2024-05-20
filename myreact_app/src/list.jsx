function List(){
    const itemList = props.items;
    


// fruit.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical 
// const lowCalFruit = fruit.filter(fruit => fruit.calories<100);// for display of low calorie fruits

// const highCalFruit = fruit.filter(fruit => fruit.calories >100);//for display of fruit having calorie greater 100


const listItem= itemList.map(items => <li key={items.name}>
    {items.name}:&nbsp; <b>{items.calories}</b></li>);

    return (<ol> {listItem}</ol>);

}
export default List
