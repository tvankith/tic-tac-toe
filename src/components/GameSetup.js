import React, { useContext } from 'react';
import { AppContext } from '../App';
export const GameSetup = () => {
  const { x, setX } = useContext(AppContext);
  return (
    <>
      <div className="row justify-content mb-5">
        <button onClick={() => setX(3)} className="setup-button" style={{ backgroundColor: x === 3 ? 'green' : 'red' }}>
          3x3
      </button>
        <button onClick={() => setX(4)} className="setup-button" style={{ backgroundColor: x === 4 ? 'green' : 'red' }}>
          4x4
      </button>
        <button onClick={() => setX(5)} className="setup-button" style={{ backgroundColor: x === 5 ? 'green' : 'red' }}>
          5x5
      </button>
      </div>
    </>
  );
};
