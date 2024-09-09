import React from 'react';
import "./Box.css";

export const Box = ({ value, onClick, isWinner }) => {
    const style = `box ${value === 'X' ? 'x' : 'o'} ${isWinner ? 'winner' : ''}`;
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
};
