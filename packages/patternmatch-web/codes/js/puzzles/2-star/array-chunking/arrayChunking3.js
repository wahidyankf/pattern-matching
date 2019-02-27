function chunk(array, size) {
  const {chunked} = array.reduce(
    (accumulator, item, index) => {
      const count = (index + 1) % size;
      const {chunkGroup} = accumulator;

      if (count === 1 || size === 1) {
        accumulator.chunked.push([item]);
      } else {
        accumulator.chunked[chunkGroup].push(item);

        accumulator.chunkGroup = count === 0 ? chunkGroup + 1 : chunkGroup;
      }

      return accumulator;
    },
    {
      chunked: [],
      chunkGroup: 0,
    }
  );

  return chunked;
}
