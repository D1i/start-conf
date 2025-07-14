import { Atom, atom } from 'jotai';
import { User } from '@/entities';

import { atomWithStorage } from 'jotai/utils';

export const uuidStorage = atomWithStorage('uuid', '');

export const userStorage = atom(new User());

// export const user: Atom<User> = atom((get, _set) => {
//   get(userStorage);
// });
