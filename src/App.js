import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
import AddTeacher from './pages/AddTeacher';
import AddChildren from './pages/AddChildren';

function App() {
  return (
    <>
      {/* <Home/> */}
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addteacher" element={<AddTeacher/>}/>
            <Route path="/addchildren" element={<AddChildren/>}/>

            


  </Routes>
    </>
  );
}

export default App;
