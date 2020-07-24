import React, { useContext } from 'react';
import { AppContext } from '../App';

export const players = ["A", "B"];
export const Annoucement = () => {
  const { winner, playAgain, draw } = useContext(AppContext);
  return <div>
    {winner !== undefined ?
      <>
        {winner?.winner && <div>Congratulations!!!</div>}
        <p>
          {winner?.winner}
        </p>
        <p>
          {winner.draw ? <div>oops..That's a draw</div> : null}
        </p>
        <button onClick={() => playAgain()}>Play Again</button>
      </>
      : null}
  </div>;
};
