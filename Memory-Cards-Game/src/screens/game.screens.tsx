import React, { useContext, useReducer } from 'react'
import Status from '../components/status/status';
import CardList from '../components/cards-list/cardList';
import "./screens.css"
import { GameContext } from '../providers/gameModeContext';
import Congrats from '../components/congrats/congrats';

const Game = () => {
    const {gameMode} = useContext(GameContext);
    return (
        <div className="game-wrapper">
            <Status/>
            <CardList/>
            {gameMode.finished && <Congrats/>}
        </div>
    )
}

export default Game;