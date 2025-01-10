import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom';
import reducer from '../stateManager/reducer';
import useLocalStorage from '../hooks/local-storage.hook';
import { IStudent } from '../types';
import Student from '../components/student/student.component';

const StudentDetails = () => {
    const [currStd, setCurrStd] = useState<IStudent>();
    const {id} = useParams();
    const stdArr =localStorage.getItem('students-list');
    const [state, dispatch] = useReducer(reducer, {stdList: stdArr ? JSON.parse(stdArr) : [], totalAbs: 0});
    useEffect(() => {
        if(state.stdList.length > 0) {
            const std = state.stdList.find(student => student.id === id);
            if(std){
                setCurrStd(std)
            }
        }
    }, [id]);

    return (
        <div style={{minHeight: "50vh", display: "flex", alignItems: 'center'}}>
            {
                currStd && (
                    <Student
                    id={currStd.id}
                    name={currStd.name}
                    age={currStd.age}
                    absents={currStd.absents}
                    isGraduated={currStd.isGraduated}
                    coursesList={currStd.coursesList}
                    onAbsentChange={(changeObj) => dispatch({type: 'ADD_ABSENT', payload: changeObj})}
                />
                )  
            }
        </div>
    )
}

export default StudentDetails;