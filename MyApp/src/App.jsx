import { Routes, Route } from 'react-router-dom';
import Counter from './Counter.jsx'
import colourPicker from './colourPicker.jsx';
import MyComponent from './MyComponent.jsx';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<colourPicker/>}/>
      <Route path='/CounterApp' element={<Counter/>}/>
      <Route path='/MyComponent' element={<MyComponent/>}/>
      
    </Routes>
  );
}

export default App;
