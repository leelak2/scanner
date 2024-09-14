// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AddStudent from './components/AddStudent';
import Report from './components/Report';
import Student from './components/Student';
import Barscan from './components/Barscan';
import Editstudent from './components/Editstudent' ;
function App() {
  return (
    <>
    <div className='container-fluid' style={{height:'800px',background:''}}>
    <div className='row'>
    <BrowserRouter>
    <Sidebar></Sidebar>
     
    <Routes>
    <Route path="/attendance" element={<Barscan/>}></Route>
    <Route path="/AddStudent" element={<AddStudent/>}></Route>
    <Route path="/report" element={<Report/>}></Route>
    <Route path="/student" element={<Student/>}></Route>
    <Route path='/Editstudent/:id' element={<Editstudent/>}></Route>  
    </Routes>
   


    
  </BrowserRouter>
  
    <Content></Content>
    </div>
    </div>

    </>


  );
}


export default App;