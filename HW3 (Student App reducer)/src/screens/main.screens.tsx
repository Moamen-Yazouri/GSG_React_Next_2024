import React, { useEffect, useReducer, useRef } from 'react'
import reducer from '../stateManager/reducer';
import useLocalStorage from '../hooks/local-storage.hook';
import AddForm from '../components/add-form/add-form.component';
import { IStudent } from '../types';
import Student from '../components/student/student.component';

const Main = () => {
    const [state, dispatch] = useReducer(reducer, {studentsList: [], totalAbsents: 0});
    const { storedData } = useLocalStorage(state.studentsList, 'students-list');
    const lastStdRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch({type: 'INIT_LOCALSTORAGE', payload: storedData || []});
    }, [storedData]);
    return (
        <>
            <AddForm className="addForm" onSubmit={(newStudent: IStudent) => dispatch({type: 'ADD_STUDENT', payload: newStudent})} />
            <div className='stats'>
                <button onClick={() => dispatch({type: 'REMOVE_FIRST'})}>POP Student</button>
                <button onClick={() => dispatch({type:'SCROLL_TO_LAST', payload: lastStdRef.current})}>Scroll to Last</button>
                <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {state.totalAbsents}</b>
            </div>
            {
                state.studentsList.map(student => (
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
        </>
    )
}

export default Main