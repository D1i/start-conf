import { Illness } from "@/entities/illness";
import { createStore } from "jotai/vanilla/store";

export const getIllnessesByOrgan = (illness: Array<Illness>) => {
  const store = createStore();

  return (store.get(illness) as Array<Illness>).reduce(
    (accumulator: Array<Illness> | [], illnessIterator: Illness) => {
      if (illnessIterator.organs.includes(illness)) {
        accumulator.push(illnessIterator.name);
        return accumulator;
      }
    },
    [] as Array<Illness>,
  );
};
