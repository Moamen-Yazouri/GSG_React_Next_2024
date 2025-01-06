import { useState } from "react"
import { IStudent } from "../types"

interface IState {
    stdList: IStudent[],
    totalAbs: number,
}
type Action =   {type: 'ADD_LOCALSTORAGE', payload: IStudent[]} |
                {type: 'ADD_STUDENT', payload: IStudent} |
                {type: 'ADD_ABSENT', payload: {id: string, change: number}} |
                {type: 'REMOVE_FIRST'}|
                {type: 'SCROLL_TO_LAST', payload: HTMLDivElement | null};

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case 'ADD_LOCALSTORAGE': {
            if(state.stdList.length === 0) {
                const storedList: IStudent[] = action.payload;
                const totalAbsents =  storedList.reduce((prev, curr) => {return  prev + curr.absents}, 0)
                return {...state, stdList: storedList, totalAbs: totalAbsents};
            }
            return state;
        }
        case 'ADD_STUDENT': {
            const newStd: IStudent = action.payload;
            newStd.id = Date.now().toString();
            return {...state, stdList: [ newStd,...state.stdList]};
        }
        case 'ADD_ABSENT' : {
            return { 
                stdList: state.stdList.map(
                    std => std.id == action.payload.id ? 
                    { ...std, absents: std.absents + action.payload.change} : std
                )
                , 
                totalAbs: state.totalAbs + action.payload.change
            };
        }
        case 'REMOVE_FIRST': {
            const newList = [...state.stdList];
            newList.shift();
            return {...state, stdList: newList};
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