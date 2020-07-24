import React, { useContext } from 'react';
import { AppContext } from '../App'

const findColor = ({ actual_row, actual_col }, { winner_cross, winner_row, winner_col }, x) => {
    if (winner_row === actual_row) {
        return "yellow"
    }
    else if (actual_col === winner_col) {
        return "yellow"
    }
    else if ((winner_cross === 1) && (actual_row - actual_col) === 0) {
        return "yellow"
    }
    else if ((winner_cross === 2) && (actual_row + actual_col === x - 1)) {
        return "yellow"
    }
    return "red"
}
export const Box = ({ row, col, onClick, item }) => {
    const { winner, x } = useContext(AppContext);
    console.log("{ winner, x }", { winner, x })
    let color = "red";
    if (winner !== undefined) {
        color = findColor(
            { actual_row: row, actual_col: col },
            { winner_row: winner.row, winner_col: winner.col, winner_cross: winner.cross }, x)
    }
    return (
        <div onClick={() => onClick(row, col)} className="box" style={{ backgroundColor: color }}>{item}</div>
    );
};
