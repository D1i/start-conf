export function pickRandomBySeed<T>(array: Array<T>, seed: number = 1000): T {
  const num = Math.abs(Math.floor(Math.sin(seed * 1000) * (array.length - 1)));
  return array[num];
}
