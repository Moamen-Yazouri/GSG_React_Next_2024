import { useState } from "react";
import { ICard } from "../../types/@types";
import "./card.css"
interface IProps extends ICard {
    
}
const Card = (props:IProps) => {
    const [visible, setVisible] = useState(false);
    const handleFlip = () => {
        
    }
    return (
    <div className="card" style={{backgroundImage: props.visible ? `url(${props.image})` : `none` }} onClick={handleFlip}>
        
    </div>
    )
}

export default Card;