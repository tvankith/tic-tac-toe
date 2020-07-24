export const createFullBox = (x) => {
  const box = [...Array(x)].map(e => Array(x));
  for (let i = 0; i < x; ++i) {
    for (let j = 0; j < x; ++j) {
      box[i][j] = null;
    }
  }
  return box;
};
