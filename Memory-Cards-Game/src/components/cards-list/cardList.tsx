import "./card-list.css"
import Card from '../card/card';
import { Elevels } from "../../types/@types";
import createGameBoard from "../../utils/createGameBoard";
import { useContext, useEffect, useState } from "react";
import { Action, IState } from "../../state/reducer";
import { GameContext } from "../../providers/gameModeContext";
interface IProps {

}
const CardList = (props:IProps) => {
    const {gameMode} = useContext(GameContext);
    const {state, dispatch} = useContext(GameContext);
    useEffect (() => {
        if(state.cards.length === 0)
            dispatch({type: 'INIT', payload: {level: gameMode.level}})
    }, [])
    return (
        <div className={`cards ${gameMode.level}`}>
            {
                state.cards.map((c, index) => <Card index={index} visible= {c.visible} key={index} id={c.id} image={c.image} />)
            }
        </div>
    )
}

export default CardList;