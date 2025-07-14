'use client';

import { useSetAtom } from 'jotai';
import { v4 as uuid } from 'uuid';
import { userStorage, uuidStorage } from '@/storage/user-storage';

export const useAuthenticate = (): (() => void) => {
  const setUuId = useSetAtom(uuidStorage);
  const setUser = useSetAtom(userStorage);

  return () => {
    setUser((user) => {
      const id = uuid();
      setUuId(id);
      const authUser = user.getAuthenticateUser(id);
      return authUser;
    });
  };
};
