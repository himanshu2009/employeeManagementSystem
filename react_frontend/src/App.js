import AddEmp from './Components/AddEmp';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import EditEmp from './Components/EditEmp';
function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}>  </Route>
        <Route path='/add-employee' element={<AddEmp/>}>  </Route>
        <Route path='/editEmp/:id' element={<EditEmp/>}></Route>
      </Routes>
    
      
     
     
    </div>
  );
}

export default App;
