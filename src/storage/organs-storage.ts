import { atom, PrimitiveAtom } from "jotai";

import { mocks } from "@mocks";

import { Organ } from "@/entities/organ";

export const organsStorage: PrimitiveAtom<Array<Organ>> = atom(
  mocks.getOrgans(50),
);

//@ts-ignore
export const organs: PrimitiveAtom<Array<Organ>> = atom((get, _set) => {
  get(organsStorage); // Должен быть readonly
});
