import React from 'react';
import { Box } from './Box';
import './Board.css';

export const Board = ({ board, onClick, winningLine }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        const isWinner = winningLine.includes(idx);
        return (
          <Box
            key={idx}
            value={value}
            onClick={() => value === null && onClick(idx)}
            isWinner={isWinner}
          />
        );
      })}
    </div>
  );
};
