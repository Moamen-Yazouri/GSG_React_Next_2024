import { useContext, useEffect, useState } from "react";
import { ICard } from "../../types/@types";
import "./card.css"
import { GameContext } from "../../providers/gameModeContext";
interface IProps extends ICard {
    index: number;
}
const Card = (props:IProps) => {
    const {state, dispatch} = useContext(GameContext)
    const handleFlip = () => {
        dispatch({type: "FLIP_CARD", payload: {index: props.index}});
    }
    useEffect(() => {
        if(state.openCards.length===2) {
            setTimeout(() => {
                dispatch({type:"HIDE_MISMATCHES"});
                console.log(state.openCards);
                
            }, 2000)
            
        }
    }, [state.openCards])
    return (
    <div className="card" style={{backgroundImage: props.visible ? `url(${props.image})` : "none"}} onClick={handleFlip}>
        
    </div>
    )
}

export default Card;