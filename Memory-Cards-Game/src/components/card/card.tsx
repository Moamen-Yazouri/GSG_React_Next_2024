import { useContext, useEffect, useState } from "react";
import { ICard } from "../../types/@types";
import "./card.css"
import { GameContext } from "../../providers/gameModeContext";
import { checkFinished } from "../../utils/game.utils";
interface IProps extends ICard {
    index: number;
}
const Card = (props:IProps) => {
    const {state,dispatch} = useContext(GameContext);
    const handleFlip = () => {
        dispatch({type: "FLIP_CARD", payload: {index: props.index}});
    }
    return (
    <div className={`card ${props.visible}`} onClick={handleFlip}>
        {   
            props.visible ? props.id
            : 0
        }
    </div>
    )
}

export default Card;