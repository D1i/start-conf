import {atom, PrimitiveAtom} from "jotai";

import {mocks} from "@/mocks";

import {Illness} from "@/entities/illness";


export const illnessesStorage: PrimitiveAtom<Array<Illness>> = atom(mocks.getIllnesses()); // TODO Убрать моки

export const illnesses: Array<Illness> = atom((get, set) => {
    get(illnessesStorage);
});
