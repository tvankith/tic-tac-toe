import { players } from "../components/Annoucement";
export const findWinner = (fullbox) => {
    const x = fullbox.length;
    let a_1_cross_times = 0;
    let b_1_cross_times = 0;
    let a_2_cross_times = 0;
    let b_2_cross_times = 0;
    let totalfilled = 0;
    for (let i = 0; i < x; ++i) {
        let first = players[0];
        let second = players[1];
        let a_row_times = 0;
        let b_row_times = 0;
        let a_col_times = 0;
        let b_col_times = 0;
        for (let j = 0; j < x; ++j) {
            if (fullbox[i][j] !== null) {
                if (first === fullbox[i][j]) {
                    a_row_times++;
                }
                else {
                    b_row_times++;
                }
            }
            if (fullbox[j][i] !== null) {
                if (first === fullbox[j][i]) {
                    a_col_times++;
                }
                else {
                    b_col_times++;
                }
            }
            if ((i - j) === 0 && (fullbox[i][j] !== null)) {
                if (first === fullbox[i][j]) {
                    a_1_cross_times++;
                }
                else {
                    b_1_cross_times++;
                }
            }
            if (
                ((i + j) === (x - 1))
                &&
                (fullbox[i][j] !== null)) {
                if (first === fullbox[i][j]) {
                    a_2_cross_times++;
                }
                else {
                    b_2_cross_times++;
                }
            }
            if (fullbox[j][i] !== null) {
                totalfilled++
            }
        }
        if (a_row_times === x) {
            return { winner: first, row: i };
        }
        else if (b_row_times === x) {
            return { winner: second, row: i };
        }
        else if (a_col_times === x) {
            return { winner: first, col: i };
        }
        else if (b_col_times === x) {
            return { winner: second, col: i };
        }
        else if (a_1_cross_times === x) {
            return { winner: first, cross: 1 };
        }
        else if (a_2_cross_times === x) {
            return { winner: first, cross: 2 };
        }
        else if (b_1_cross_times === x) {
            return { winner: second, cross: 1 };
        }
        else if (b_2_cross_times === x) {
            return { winner: second, cross: 2 };
        }
        else if (totalfilled === (x * x)) {
            return { draw: true };
        }
    }
};
