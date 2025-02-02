import React, { useContext, useReducer } from 'react'
import Status from '../components/status/status';
import CardList from '../components/cards-list/cardList';
import "./screens.css"
import { reducer } from '../state/reducer';
import { Elevels } from '../types/@types';
import { GameContext, GameModeProvider } from '../providers/gameModeContext';

const Game = () => {
    const [state, dispatch] = useReducer(reducer, {cards: [], openCards: [], moves: 0});
    return (
        <div className="game-wrapper">
            <Status/>
            <CardList 
                dispatch={dispatch}
                state={state}
            />
        </div>
    )
}

export default Game;