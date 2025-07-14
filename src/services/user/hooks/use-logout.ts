import { useSetAtom } from 'jotai';
import { User } from '@/entities';
import { userStorage, uuidStorage } from '@/storage/user-storage';

export const useLogout = () => {
  const setUuId = useSetAtom(uuidStorage);
  const setUser = useSetAtom(userStorage);

  return () => {
    setUuId('');
    setUser(new User());
  };
};
