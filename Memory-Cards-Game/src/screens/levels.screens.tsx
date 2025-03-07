import React, { useContext } from 'react'
import { Elevels } from '../types/@types'
import { GameContext } from '../providers/gameModeContext'
import { useNavigate } from 'react-router-dom';

const Levels = () => {
  const {setgameMode} = useContext(GameContext);
  const navigate = useNavigate()
  const handleSelectLevel = (level: Elevels) => {
    setgameMode(old => ({...old, level}));
    navigate("/game")
  }
  return (
    <div className="levels-screen">
      <h1>Flip Cards Game</h1>
      <h3>Please Select Your Level</h3>
      <div className="levels">
        <span className="level"onClick={()=> handleSelectLevel(Elevels.EASY)}>Easy</span>
        <span className="level"onClick={()=> handleSelectLevel(Elevels.MEDIUM)}>Medium</span>
        <span className="level"onClick={()=> handleSelectLevel(Elevels.HARD)}>Hard</span>
      </div>
    </div>
  )
}

export default Levels