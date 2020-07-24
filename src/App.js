import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { createFullBox } from './library/createFullBox';
import { Playground } from './components/Playground';
import { GameSetup } from './components/GameSetup';
import { History } from './components/History';

export const AppContext = React.createContext();

function App() {
  const [history, setHistory] = useState([]);
  const [x, setX] = useState(3)
  const [winner, setWinner] = useState();
  const [isGameStarted, setisGameStarted] = useState(false);
  const [fullbox, setfullbox] = useState(createFullBox(x));
  const resetFullBox = () => {
    setisGameStarted(false)
    setfullbox(createFullBox(x))
    setWinner(undefined);
  }
  const playAgain = () => {
    setfullbox(createFullBox(x))
    setWinner(undefined);
    setisGameStarted(false)
    if (winner) {
      if (winner.winner) {
        setHistory((history) => [{ winner, x }, ...history])
      }
      else {
        setHistory((history) => [{ winner: { winner: "Draw" }, x }, ...history])
      }
    }
  }
  useEffect(() => {
    setfullbox(createFullBox(x))
    setWinner(undefined)
  }, [x])
  const AppState = {
    x,
    winner,
    setWinner,
    fullbox,
    setfullbox,
    playAgain,
    setX,
    history,
    resetFullBox,
    isGameStarted,
    setisGameStarted
  }
  return (
    <div className="App">
      <AppContext.Provider value={AppState}>
        <div className="column align-items">
          <GameSetup />
          <Playground />
          <History />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
