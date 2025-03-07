import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../providers/gameModeContext";
import { checkFinished } from "../utils/game.utils";

const gameLogic = () => {
    const {state, dispatch, gameMode, setgameMode, resetGame} = useContext(GameContext);
    const navigate = useNavigate();
    const timeRef = useRef(0)
    
    useEffect (() => {
        if(!state.initialized)
            dispatch({type: 'INIT', payload: {level: gameMode.level}});
            resetGame();
            timeRef.current = setInterval(() => {
                setgameMode(old => ({...old, time: old.time + 1}));
            }, 1000);

            return () => {
                clearInterval(timeRef.current);
            }

    }, [])

    useEffect(() => {
        if(!state.initialized) return;

        if(state.openCards.length===2) {
            setgameMode(old => ({...old, wrongMoves: old.wrongMoves + 1}));
            setTimeout(() => {
                dispatch({type:"HIDE_MISMATCHES"});
            }, 1500);
        }

        const isFininshed = checkFinished(state.cards);
        if(isFininshed) {
            setgameMode(old => ({...old, finished: true}));
            clearInterval(timeRef.current);
            dispatch({type: "REPLAY"});
            setTimeout(()=>{
                navigate("/score-board");
            }, 3000)
        }
    }, [state.openCards]);
    return {
        state,
        gameMode,
    }
};
export default gameLogic;