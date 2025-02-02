import { useState } from "react"
import { IStudent } from "../types"

interface IState {
    studentsList: IStudent[],
    totalAbsents: number,
}
type Action =   {type: 'INIT_LOCALSTORAGE', payload: IStudent[]} |
                {type: 'ADD_STUDENT', payload: IStudent} |
                {type: 'ADD_ABSENT', payload: {id: string, change: number}} |
                {type: 'REMOVE_FIRST'}|
                {type: 'SCROLL_TO_LAST', payload: HTMLDivElement | null};

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case 'INIT_LOCALSTORAGE': {
            if(state.studentsList.length === 0) {
                const storedList: IStudent[] = action.payload;
                const totalAbsents =  storedList.reduce((prev, current) => {return  prev + current.absents}, 0)
                return {...state, studentsList: storedList, totalAbsents: totalAbsents};
            }
            return state;
        }
        case 'ADD_STUDENT': {
            const newStd: IStudent = action.payload;
            newStd.id = Date.now().toString();
            return {...state, studentsList: [ newStd,...state.studentsList]};
        }
        case 'ADD_ABSENT' : {
            return { 
                studentsList: state.studentsList.map(
                    std => std.id == action.payload.id ? 
                    { ...std, absents: std.absents + action.payload.change} : std
                )
                , 
                totalAbsents: state.totalAbsents + action.payload.change
            };
        }
        case 'REMOVE_FIRST': {
            const newList = [...state.studentsList];
            newList.shift();
            return {...state, studentsList: newList};
        }
        case 'SCROLL_TO_LAST': {
            if(action.payload)
            action.payload.scrollIntoView({behavior: 'smooth'});
            return state;
        }
        default: return state;
    }
}
export default reducer;