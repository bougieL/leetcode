function shuffle(array) {
  const res = [];

  while (array.length > 0) {
    const index = Math.floor(Math.random() * array.length);
    const value = array[index]
    res.push(value)
    array.splice(index, 1)
  }

  return res;
}
