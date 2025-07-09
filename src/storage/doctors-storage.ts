import {atom, PrimitiveAtom} from "jotai";

import {mocks} from "@/mocks";

import {Doctor} from "@/entities/doctor";
import {Illness} from "@/entities/illness";


export const doctorsStorage: PrimitiveAtom<Array<Doctor>> = atom(mocks.getDoctors()); // TODO Убрать моки

export const doctors: Array<Illness> = atom((get, set) => {
    get(doctorsStorage);
});
