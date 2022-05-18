namespace ArrayGeneric {

  function getRandomElement<T>(items: T[]): T {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  const el1 = getRandomElement([1, 2, 3, 4, 5]);
  const el2 = getRandomElement(['a', 'b', 'c']);
  const el3 = getRandomElement(['a', 'b', 'c', 1, null]);

}