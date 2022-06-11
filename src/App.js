import './App.css';
import {Routes, Route} from "react-router-dom";
import Navabr from './Component/Navabr';
import Total from './Component/Total';
import Home from './Component/Home';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">

      <Navabr />

      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/total' element={<Total />}></Route>
      <Route path='/todo/:id' element={<Todo />}></Route>
      </Routes>
      {/* <header className="App-header">
       
      </header> */}
    </div>
  );
}

export default App;
