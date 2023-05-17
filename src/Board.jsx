import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    console.log(copyState[index]);
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinnder = () => {
    const Winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const checkWin of Winner) {
      const [a, b, c] = checkWin;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const checkWin = checkWinnder();
  console.log(checkWin);

  return (
    <div className="border-cainter">
      {checkWin ? (
        <>
          {checkWin} is winner{" "}
          <button
            onClick={() => {
              setState(Array(9).fill(null)), setIsXTurn(true);
            }}
          >
            Start The Game Again
          </button>
        </>
      ) : (
        <>
          <h3>
            {" "}
            Player {isXTurn ? "X" : "O"} Move{" "}
            <button
              onClick={() => {
                setState(Array(9).fill(null)), setIsXTurn(true);
              }}
            >
              Start The Game Again
            </button>
          </h3>
          <div className="border-row">
            <Square value={state[0]} onClick={() => handleClick(0)} />
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="border-row">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="border-row">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
