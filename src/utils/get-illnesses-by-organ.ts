import {illnessesStorage} from "@/storage/illness-storage";
import {Illness} from "@/entities/illness";
import {createStore} from "jotai/vanilla/store";

export const getIllnessesByOrgan = (illnesse) => {
    const store = createStore();

    return (store.get(illnesse) as Array<Illness>).reduce((accumulator: Array<Illness> | [], illnessIterator: Illness) => {
        if (illnessIterator.organs.includes(illnesse)) {
            accumulator.push(illnessIterator.name);
            return accumulator;
        }
    }, [] as Array<Illness>);
}
