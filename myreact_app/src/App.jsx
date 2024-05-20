import List from "./list.jsx";
function App() {

        const fruit=[{id: 1, name: "apple", calories: 95},
                    {id: 2,name:"orange",calories:108},
                    {id: 3,name:"coconut",calories:159},
                    {id: 4,name:"papaya",calories:35}];
    
        return(<List items ={fruit} category ="Fruits"/>);
}

export default App
