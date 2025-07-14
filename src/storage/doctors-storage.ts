'use client';

import { atom, PrimitiveAtom } from 'jotai';

import { mocks } from '@/mocks';

import { Doctor } from '@/entities/doctor';

export const doctorsStorage: PrimitiveAtom<Array<Doctor>> = atom(
  mocks.getDoctors(20)
); // TODO Убрать моки

//@ts-ignore
export const doctors: PrimitiveAtom<Array<Doctor>> = atom((get, _set) => {
  get(doctorsStorage); // Должен быть readonly
});

//VLAD А разве нам не достаточно вместо useAtom просто использовать useAtomValue для readonly?
