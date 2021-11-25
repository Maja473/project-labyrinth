import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";
import { useNavigate } from 'react-router-dom'

//göra så att theStart inte syns


const TheGame = () => {
  const { game, coordinates } = useSelector((store) => store.game.currentPosition);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onRestart = () => {
    dispatch(game.actions.restartGame())
    navigate('/')
  }

  return (
    <>
      <p>{coordinates}</p>
      {game?.actions?.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
      {game?.actions?.map((item) => (
        <button
          key={item.direction}
          onClick={() => {
            dispatch(nextStep(item.direction));
          }}
        >
          {item.direction}
        </button>
      ))}
    <StartOverButton onClick={onRestart}>Start over</StartOverButton>
    </>
  );
};

export default TheGame;
