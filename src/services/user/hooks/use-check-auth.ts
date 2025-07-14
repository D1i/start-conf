'use client';

import { useAtom, useAtomValue } from 'jotai';

import { userStorage, uuidStorage } from '@/storage/user-storage';
import { User } from '@/entities';

export const useCheckAuth = (): (() => boolean) => {
  const uuid = useAtomValue(uuidStorage);
  const [user, setUser] = useAtom(userStorage);

  return () => {
    if (user.isAuth) return true;
    if (uuid) {
      // const authUser = user.getAuthenticateUser(uuid);
      // setUser(authUser);
      const authUser = new User();
      authUser.authenticate(uuid);
      return true;
    }

    return false;
  };
};
