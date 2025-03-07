import "./card-list.css"
import Card from '../card/card';
import gameLogic from "../../hooks/game-logic";

const CardList = () => {
    const {gameMode, state} = gameLogic();
    
    return (
        <div className={`cards l${gameMode.level}`}>
            {
                state.cards.map((c, index) => 
                <Card 
                revealed={false}
                index={index}
                visible= {c.visible} 
                key={index} 
                id={c.id} 
                image={c.image} 
                />)
            }
        </div>
    )
}

export default CardList;