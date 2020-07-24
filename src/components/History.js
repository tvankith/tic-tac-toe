import React, { useContext } from 'react';
import { AppContext } from '../App';
export const History = () => {
  const { history } = useContext(AppContext);
  return (
    <div className="mt-5">
      {history?.length > 0 && <table>
        <tr>
          <th>Game No.</th>
          <th>Setup</th>
          <th>Winner</th>
        </tr>
        {history.map((item, index) => {
          const { x, winner } = item;
          return (
            <tr key={index}>
              <td>{`${index + 1}`}</td>
              <td>{`${x}X${x}`}</td>
              <td>{`${winner.winner}`}</td>
            </tr>
          )
        })}
      </table>}
    </div>
  );
};
