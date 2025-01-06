import {useEffect, useRef, useReducer} from 'react';
import './App.css'
import { IStudent } from './types';

import Student from './components/student/student.component';
import AddForm from './components/add-form/add-form.component';
import useLocalStorage from './hooks/local-storage.hook';
import reducer from './stateManager/reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, {stdList: [], totalAbs: 0});
  const { storedData } = useLocalStorage(state.stdList, 'students-list');
  const lastStdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch({type: 'ADD_LOCALSTORAGE', payload: storedData || []});
  }, [storedData]);

  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={(newStudent: IStudent) => dispatch({type: 'ADD_STUDENT', payload: newStudent})} />
      <div className='stats'>
        <button onClick={() => dispatch({type: 'REMOVE_FIRST'})}>POP Student</button>
        <button onClick={() => dispatch({type:'SCROLL_TO_LAST', payload: lastStdRef.current})}>Scroll to Last</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {state.totalAbs}</b>
      </div>
      {
        state.stdList.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            absents={student.absents}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
            onAbsentChange={(changeObj) => dispatch({type: 'ADD_ABSENT', payload: changeObj})}
          />
        )
        )
      }
      <div ref={lastStdRef}></div>
    </div>
  )
}

export default App;