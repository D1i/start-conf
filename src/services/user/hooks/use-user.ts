'use client';

import { useAtomValue } from 'jotai';

import { userStorage } from '@/storage/user-storage';
import { UserDataType } from '../types';

export const useUser = (): UserDataType => {
  const user = useAtomValue(userStorage);

  return { userName: user.userName };
};
