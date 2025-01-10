import {useEffect, useRef, useReducer} from 'react';
import './App.css'
import { IStudent } from './types';

import Student from './components/student/student.component';
import AddForm from './components/add-form/add-form.component';
import useLocalStorage from './hooks/local-storage.hook';
import reducer from './stateManager/reducer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './screens/main.screens';
import About from './screens/about.screens';
import StudentDetails from './screens/studentDetails.screens';
import NotFound from './screens/notFound.screens';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };
  return (
      <div className="main wrapper">
        <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
        <BrowserRouter>
          <nav style={{marginBottom: '20px'}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/student/:id' element={<StudentDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;