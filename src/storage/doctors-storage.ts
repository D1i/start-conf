'use client';

import { atom, PrimitiveAtom } from 'jotai';

import { mocks } from '@/mocks';

import { Doctor } from '@/entities/doctor';
import { Illness } from '@/entities/illness';

export const doctorsStorage: PrimitiveAtom<Array<Doctor>> = atom(
  mocks.getDoctors(20)
); // TODO Убрать моки

export const doctors = atom((get) => {
  get(doctorsStorage); // Должен быть readonly
});

//VLAD А разве нам не достаточно вместо useAtom просто использовать useAtomValue для readonly?
