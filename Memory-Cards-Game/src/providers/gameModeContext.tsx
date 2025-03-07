import { createContext, useReducer, useState } from "react";
import { Elevels } from "../types/@types";
import { Action, IState, reducer } from "../state/reducer";

export interface IGameMode {
    level: Elevels;
    finished: boolean;
    wrongMoves: number;
    time: number;
}

export interface IGameContext {
    gameMode: IGameMode;
    setgameMode: React.Dispatch<React.SetStateAction<IGameMode>>;
    state: IState;
    dispatch: React.Dispatch<Action>;
    resetGame: () => void
}
const INIIAL_STATE: IGameMode = {
    level: Elevels.EASY,
    finished: false,
    wrongMoves: 0,
    time: 0
}
const INITIAL_CONTEXT = {
    gameMode: INIIAL_STATE,
    setgameMode: () => { },
    state: {cards: [], openCards: [], moves: 0, initialized: false},
    dispatch: () => { }, 
    resetGame: () => { }
}
export const GameContext = createContext<IGameContext>(INITIAL_CONTEXT);

export const GameModeProvider = (props: {children: React.ReactNode}) => {
    const [gameMode, setgameMode] = useState<IGameMode>(INIIAL_STATE);
    const [state, dispatch] = useReducer(reducer, {cards: [], openCards: [], moves: 0, initialized: false});
    const resetGame = () => {
        setgameMode(old => ({...INIIAL_STATE, level: old.level}));
        
        if(state.initialized)
        dispatch({type: 'INIT', payload: {level: gameMode.level}});
        
    }
    return <GameContext.Provider value={{gameMode, setgameMode, state, dispatch, resetGame}}>{props.children}</GameContext.Provider>
}
