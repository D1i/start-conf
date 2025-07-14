import { atom, PrimitiveAtom } from "jotai";

import { mocks } from "@/mocks";

import { Doctor } from "@/entities/doctor";

export const doctorsStorage: PrimitiveAtom<Array<Doctor>> = atom(
  mocks.getDoctors(),
); // TODO Убрать моки

//@ts-ignore
export const doctors: PrimitiveAtom<Array<Doctor>> = atom((get, _set) => {
  get(doctorsStorage); // Должен быть readonly
});
