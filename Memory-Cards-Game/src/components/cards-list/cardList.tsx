import "./card-list.css"
import Card from '../card/card';
import { Elevels } from "../../types/@types";
import createGameBoard from "../../utils/createGameBoard";
import { useContext, useEffect, useState } from "react";
import { Action, IState } from "../../state/reducer";
import { GameContext } from "../../providers/gameModeContext";
interface IProps {
    state: IState,
    dispatch: React.Dispatch<Action>
}
const CardList = (props:IProps) => {
    const {gameMode} = useContext(GameContext);
    useEffect (() => {
        if(props.state.cards.length === 0)
            props.dispatch({type: 'INIT', payload: {level: gameMode.level}})
    }, [])
    return (
        <div className={`cards ${gameMode.level}`}>
            {
                props.state.cards.map((c, index) => <Card solved={c.solved} visible= {c.visible} key={index} id={c.id} image={c.image} />)
            }
        </div>
    )
}

export default CardList;