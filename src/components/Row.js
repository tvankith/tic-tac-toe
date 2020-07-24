import React from 'react';
import { Box } from './Box';
export const Row = ({ col, row, onClick }) => {
  return col.map((item, index) => {
    return <Box key={index} row={row} col={index} onClick={onClick} item={item} />;
  });
};
