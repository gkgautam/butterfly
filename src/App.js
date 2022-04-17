import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
import AddTeacher from './pages/AddTeacher';

function App() {
  return (
    <>
      {/* <Home/> */}
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addteacher" element={<AddTeacher/>}/>
            


  </Routes>
    </>
  );
}

export default App;
