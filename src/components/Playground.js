import React, { useState, useEffect, useContext } from 'react';
import { findWinner } from '../library/findWinner';
import { Row } from './Row';
import { players, Annoucement } from './Annoucement';
import { AppContext } from '../App';
export const Playground = () => {
  const { winner, setWinner, fullbox, setfullbox, resetFullBox, isGameStarted, setisGameStarted } = useContext(AppContext);
  const [player, setPlayerChance] = useState(players[0]);
  const onClick = (row, col) => {
    if (winner === undefined && fullbox[row][col] === null) {
      setfullbox((fullbox) => {
        fullbox[row][col] = player;
        return [...fullbox];
      });
      setPlayerChance((player) => {
        if (player === players[0]) {
          return players[1];
        }
        else {
          return players[0];
        }
      });
      if (isGameStarted === false) {
        setisGameStarted(true)
      }
    }
  };

  useEffect(() => {
    const winner = findWinner(fullbox);
    if (winner) {
      setWinner(winner);
    }
  }, [fullbox]);

  return (<div className="fullBox">
    {fullbox.map((col, row) => {
      return (
        <div className="row" key={row}>
          {Row({ row: row, col, onClick })}
        </div>
      );
    })}
    {
      isGameStarted && <button className="mt-5" style={{ backgroundColor: "blue" }} onClick={resetFullBox} >Reset</button>
    }
    {winner &&
      <Annoucement {...winner} {...{ winner: "A" }} />}
  </div>);
};
