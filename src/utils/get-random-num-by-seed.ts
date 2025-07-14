export const getRandomNumBySeed = (
  max: number = 10,
  seed: number = 1000
): number => {
  return Math.abs(Math.floor(Math.sin(seed++ * 1000) * max));
};
