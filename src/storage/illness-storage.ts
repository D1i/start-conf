import { atom, PrimitiveAtom } from 'jotai';

import { mocks } from '@/mocks';

import { Illness } from '@/entities/illness';

export const illnessesStorage: PrimitiveAtom<Array<Illness>> = atom(
  mocks.getIllnesses()
); // TODO Убрать моки

export const illnesses = atom((get) => {
  get(illnessesStorage); // Должен быть readonly
});

//VLAD А разве нам не достаточно вместо useAtom просто использовать useAtomValue для readonly?
