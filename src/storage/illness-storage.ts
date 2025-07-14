import { atom, PrimitiveAtom } from 'jotai';

import { mocks } from '@/mocks';

import { Illness } from '@/entities/illness';

export const illnessesStorage: PrimitiveAtom<Array<Illness>> = atom(
  mocks.getIllnesses()
); // TODO Убрать моки

//@ts-ignore
export const illnesses: PrimitiveAtom<Array<Illness>> = atom((get, _set) => {
  get(illnessesStorage); // Должен быть readonly
});

//VLAD А разве нам не достаточно вместо useAtom просто использовать useAtomValue для readonly?
