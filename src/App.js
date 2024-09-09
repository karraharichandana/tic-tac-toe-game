import React, { useState } from 'react';
import { Board } from './components/Board';
import { ResetButton } from './components/ResetButton';
import './App.css';

const App = () => {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState([]);

  const handleClick = (idx) => {
    const newBoards = boards.slice();
    if (calculateWinner(newBoards) || newBoards[idx]) return;
    newBoards[idx] = isXNext ? 'X' : 'O';
    setBoards(newBoards);
    setIsXNext(!isXNext);
    const winner = calculateWinner(newBoards);
    if (winner) {
      setWinningLine(getWinningLine(newBoards, winner));
    }
  };

  const resetBoard = () => {
    setBoards(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine([]);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const getWinningLine = (squares, winner) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === winner && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return [];
  };

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  const winner = calculateWinner(boards);
  const draw = !winner && isBoardFull(boards);
  const status = winner ? `Winner: ${winner}` : draw ? `It's a Draw!` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <Board board={boards} onClick={handleClick} winningLine={winningLine} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
};

export default App;
