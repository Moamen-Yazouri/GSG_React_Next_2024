import { createContext, useState } from "react";
import { Elevels } from "../types/@types";

export interface IGameMode {
    level: Elevels;
}

export interface IGameContext {
    gameMode: IGameMode;
    setgameMode: React.Dispatch<React.SetStateAction<IGameMode>>
}

export const GameContext = createContext<IGameContext>({gameMode: {level: Elevels.MEDIUM}, setgameMode: () => { } });

export const GameModeProvider = (props: {children: React.ReactNode}) => {
    const [gameMode, setgameMode] = useState<IGameMode>({level: Elevels.MEDIUM})
    return <GameContext.Provider value={{gameMode, setgameMode}}>{props.children}</GameContext.Provider>
}
