function List(){
    const fruit=[{id: 1, name: "apple", calories: 95},
    {id: 2,name:"orange",calories:108},
    {id: 3,name:"coconut",calories:159},
    {id: 4,name:"papaya",calories:35}];
fruit.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical 
const lowCalFruit = fruit.filter(fruit => fruit.calories<100);// for display of low calorie fruits

const highCalFruit = fruit.filter(fruit => fruit.calories >100);//for display of fruit having calorie greater 100


const listItem= highCalFruit.map(highCalFruit => <li key={highCalFruit.name}>
    {highCalFruit.name}:&nbsp; <b>{highCalFruit.calories}</b></li>);

    return (<ol> {listItem}</ol>);

}
export default List