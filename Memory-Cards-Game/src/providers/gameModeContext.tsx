import { createContext, useReducer, useState } from "react";
import { Elevels } from "../types/@types";
import { Action, IState, reducer } from "../state/reducer";

export interface IGameMode {
    level: Elevels;
}

export interface IGameContext {
    gameMode: IGameMode;
    setgameMode: React.Dispatch<React.SetStateAction<IGameMode>>;
    state: IState;
    dispatch: React.Dispatch<Action>;
}
const INITIAL_CONTEXT = {
    gameMode: {level: Elevels.MEDIUM},
    setgameMode: () => { },
    state: {cards: [], openCards: [], moves: 0},
    dispatch: () => {} 
}
export const GameContext = createContext<IGameContext>(INITIAL_CONTEXT);

export const GameModeProvider = (props: {children: React.ReactNode}) => {
    const [gameMode, setgameMode] = useState<IGameMode>({level: Elevels.MEDIUM});
    const [state, dispatch] = useReducer(reducer, {cards: [], openCards: [], moves: 0})
    return <GameContext.Provider value={{gameMode, setgameMode, state, dispatch}}>{props.children}</GameContext.Provider>
}
