import { useContext } from "react"
import { GameContext } from "../../providers/gameModeContext"
import "./status.css"

const Status = () => {
    const {gameMode} = useContext(GameContext);
    return (
        <div className='status'>
            <span>Level:{Array.from({length: gameMode.level/2}).map(_ => '⭐')}</span>
            <span>Time:{gameMode.time}s</span>
            <span>Wrong-Moves:{gameMode.wrongMoves}</span>
        </div>
    )
}

export default Status